import LoginPrompt from "../LoginPrompt";
import { incrementProfileLikeCount } from "./utils";
import useUser from "@/hooks/Auth/useUser";
import useManagePostView from "@/hooks/Posts/useManagePostView";
import { formatNumbers, timeAgo } from "@/lib/general";
import { cn } from "@/lib/utils";
import { ImagePost } from "@/src/API";
import { getImagePostLikes, updateImagePostLikes } from "@/src/customQueries";
import {
  createLiked,
  createSaved,
  deleteLiked,
  deleteSaved,
} from "@/src/graphql/mutations";
import { getLiked, getSaved } from "@/src/graphql/queries";
import { API } from "aws-amplify";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface IProps {
  imagePost?: ImagePost | any;
}

export function PostActions({ imagePost }: IProps) {
  const router = useRouter();
  useManagePostView({
    post_id: imagePost?.id,
    post_user_id: imagePost?.user_id,
  });
  const { user, isLoggedIn } = useUser();

  // States
  const [liked, setLiked] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingSaved, setLoadingSaved] = useState<boolean>(false);
  const [openLoginPromptModal, setOpenLoginPromptModal] =
    useState<boolean>(false);

  const checkLikeStatus = useCallback(async () => {
    if (!user?.user_id) return;
    try {
      const { data }: any = await API.graphql({
        query: getLiked,
        variables: {
          id: `${user?.user_id}-${imagePost?.id}`,
        },
      });
      setLiked(!!data?.getLiked?.id);
    } catch (error) {
      console.error(error);
    }
  }, [user?.user_id]);

  const checkSavedStatus = useCallback(async () => {
    if (!user?.user_id) return;
    try {
      const { data }: any = await API.graphql({
        query: getSaved,
        variables: {
          id: `${user?.user_id}-${imagePost?.id}`,
        },
      });
      setSaved(!!data?.getSaved?.id);
    } catch (error) {
      console.error(error);
    }
  }, [user?.user_id]);

  useEffect(() => {
    if (user?.user_id && isLoggedIn) {
      checkLikeStatus();
      checkSavedStatus();
    }
  }, [user?.user_id, isLoggedIn]);

  const onImagePostLikeClick = async () => {
    if (!isLoggedIn || !user?.user_id) {
      setOpenLoginPromptModal(true);
      return;
    }

    if (loading) return;

    let isDisLike = liked;
    setLiked((prev) => !prev);
    setLoading(true);

    try {
      await API.graphql({
        query: isDisLike ? deleteLiked : createLiked,
        variables: {
          input: {
            id: `${user?.user_id}-${imagePost?.id}`,
          },
        },
      });

      // Get Fresh Like Count (Since DynamoDB doesn't support increment like SQL, We can used Redis Counter for Scaling it Better and reducing DB load)
      const newDataPostLikesCount: any = await API.graphql({
        query: getImagePostLikes,
        variables: { id: imagePost?.id },
      });

      // Updated Like Count
      const newLikeCount = !isDisLike
        ? newDataPostLikesCount?.data?.getImagePost?.likesCount + 1
        : newDataPostLikesCount?.data?.getImagePost?.likesCount - 1;

      await API.graphql({
        query: updateImagePostLikes,
        variables: {
          input: {
            id: imagePost?.id,
            likesCount: newLikeCount,
          },
        },
      });

      //Increment Profile Total Like Count (Better way is to use Redis Counter to handle millions of request)
      incrementProfileLikeCount(imagePost?.user_id);
    } catch (error) {
      console.error(error);
      setLiked((prev) => !prev);
    } finally {
      setLoading(false);
    }
  };

  const onImagePostSavedClick = async () => {
    if (!isLoggedIn || !user?.user_id) {
      setOpenLoginPromptModal(true);
      return;
    }

    if (loadingSaved) return;

    let isUnSave = saved;
    setSaved((prev) => !prev);
    setLoadingSaved(true);
    try {
      await API.graphql({
        query: isUnSave ? deleteSaved : createSaved,
        variables: {
          input: {
            id: `${user?.user_id}-${imagePost?.id}`,
            user_id: user?.user_id,
          },
        },
      });
    } catch (error) {
      console.error(error);
      setSaved((prev) => !prev);
    } finally {
      setLoadingSaved(false);
    }
  };

  return (
    <>
      <div className="p-2 pb-3 sm:pb-0 sm:px-4 w-[33%] ">
        <div className="text-sm sm:text-md flex justify-start items-center sm:items-end gap-2">
          <div className="font-semibold ">
            {formatNumbers(imagePost.viewsCount)}
          </div>
          <div className="font-normal text-xs sm:text-sm text-gray-300 ">
            Views
          </div>
        </div>
        <div className="text-[10px] sm:text-xs pt-0 sm:pt-1 flex justify-start items-center gap-2">
          <div className="font-normal text-gray-400 ">
            {timeAgo(imagePost.createdAt)}
          </div>
        </div>
      </div>
      <div
        className="text-md text-muted-foreground w-[33%] pt-3 sm:pt-0 pl-2 flex justify-center items-center gap-1 cursor-pointer"
        onClick={onImagePostLikeClick}
      >
        <Image
          src={liked ? "/like-on-min.png" : "/like-off-min.svg"}
          alt={"like-button"}
          height={33}
          width={33}
          className={cn(!liked && "filter-invert", "h-8 w-8 sm:h-10 sm:w-10 ")}
        />
        <div className="font-semibold text-gray-300 ">
          {formatNumbers(imagePost.likesCount)}
        </div>
      </div>
      <div
        onClick={onImagePostSavedClick}
        className={cn(
          "text-sm pt-4 sm:pt-2 flex justify-end w-[33%] pr-3  sm:pr-1 items-center gap-2 cursor-pointer ",
          saved ? "text-white" : "text-muted-foreground"
        )}
      >
        <Bookmark
          fill={saved ? "white" : ""}
          className="h-6 w-6 sm:h-7 sm:w-7"
        />
      </div>
      {openLoginPromptModal && (
        <LoginPrompt
          setOpenLoginPromptModal={setOpenLoginPromptModal}
          openLoginPromptModal={openLoginPromptModal}
          header={"Please Login for Free to continue."}
        />
      )}
    </>
  );
}
