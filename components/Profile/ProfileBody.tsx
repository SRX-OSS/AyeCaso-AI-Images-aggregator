import ImagePostCard from "../ImagePostCard";
import { Skeleton } from "../ui/skeleton";
import { ImagePost, ModelSortDirection } from "@/src/API";
import { profilePostByDate, profilePostByViews } from "@/src/graphql/queries";
import { API } from "aws-amplify";
import { PlusCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface IProps {
  user?: any;
  isPopular?: boolean;
  profile_id?: string;
}

export function ProfileBody({ user, isPopular, profile_id }: IProps) {
  const [postList, setPostList] = useState<ImagePost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextListToken, setNextListToken] = useState<String | null>(null);

  const fetchPost = async () => {
    setLoading(true);
    try {
      // Query Object configuration
      const queryObj: any = {
        user_id: profile_id,
        sortDirection: ModelSortDirection.DESC,
        limit: 16,
      };
      if (nextListToken) {
        queryObj.nextToken = nextListToken;
      }

      // Fetch Latest ImagePosts for Profile
      const { data }: any = await API.graphql({
        query: isPopular ? profilePostByViews : profilePostByDate,
        variables: queryObj,
      });

      setPostList((prev: ImagePost[]) => [
        ...prev,
        ...data?.[isPopular ? "profilePostByViews" : "profilePostByDate"]
          ?.items,
      ]);

      // Set NextToken for fetching next available ImagePosts, if available
      setNextListToken(
        data?.[isPopular ? "profilePostByViews" : "profilePostByDate"]
          ?.nextToken
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (profile_id) fetchPost();
  }, [profile_id]);

  return (
    <article className="w-full pt-2 pb-40 min-h-[50vh]">
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 items-start ">
        {postList?.map((post: ImagePost | any, index: number) => (
          <ImagePostCard imagePost={post} key={`${index}-posts`} />
        ))}
      </div>
      {loading && (
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 items-start ">
          {[1, 2, 3, 4, 5]?.map((_: number, index: number) => {
            return (
              <Skeleton
                key={`${index}-placeholder`}
                className=" w-[48%] sm:w-[32%]  h-[30vh]  rounded-none sm:rounded-md  flex-auto"
              />
            );
          })}
        </div>
      )}
      {!loading && postList?.length < 1 && (
        <div
          className="m-auto cursor-pointer flex justify-center flex-col gap-3 text-gray-400 items-center p-6 pt-32 text-center"
          onClick={fetchPost}
        >
          <Sparkles color="#d4d4d4" className="pb-2 h-10 w-10  " />
          No Posts Yet!
        </div>
      )}
      {nextListToken && !loading && (
        <div
          className="m-auto cursor-pointer flex justify-center items-center p-6 pt-16 text-center"
          onClick={fetchPost}
        >
          <PlusCircle color="#d4d4d4" className="pb-2 h-10 w-10  " />
        </div>
      )}
    </article>
  );
}
