import ImagePostCard from "../ImagePostCard";
import { Skeleton } from "../ui/skeleton";
import { ImagePost, ModelSortDirection } from "@/src/API";
import { getImagePost, savedPostByDate } from "@/src/graphql/queries";
import { API } from "aws-amplify";
import { Library, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface IProps {
  user?: any;
}

export function SavedList({ user }: IProps) {
  const [postList, setPostList] = useState<ImagePost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextListToken, setNextListToken] = useState<String | null>(null);

  const fetchPost = async () => {
    setLoading(true);
    try {
      // Query Object configuration
      const queryObj: any = {
        user_id: user?.user_id,
        sortDirection: ModelSortDirection.DESC,
        limit: 12,
      };
      if (nextListToken) {
        queryObj.nextToken = nextListToken;
      }

      // Fetch Latest ImagePosts for Profile
      const { data }: any = await API.graphql({
        query: savedPostByDate,
        variables: queryObj,
      });

      const postIds = data?.savedPostByDate?.items?.map((item: any) => {
        return item?.id?.slice(item?.user_id?.length + 1);
      });

      const results: any[] = [];
      for (const id of postIds) {
        const result: any = await API.graphql({
          query: getImagePost,
          variables: { id, isPrivate: false },
        });
        results.push(result.data.getImagePost);
      }

      setPostList((prev: ImagePost[]) => [...prev, ...results]);

      // Set NextToken for fetching next available Saved ImagePosts, if available
      setNextListToken(data?.savedPostByDate?.nextToken);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.user_id) fetchPost();
  }, [user?.user_id]);

  return (
    <article className="w-full pt-2 pb-40 min-h-[50vh] ">
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 items-start ">
        {postList?.map((post: ImagePost, index: number) => {
          return <ImagePostCard imagePost={post} key={`${index}-posts`} />;
        })}
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
          <Library color="#d4d4d4" className="pb-2 h-10 w-10  " />
          No Posts Saved Yet!
        </div>
      )}
      {nextListToken && !loading && (
        <div
          className="m-aut0 cursor-pointer flex justify-center items-center p-6 pt-16 text-center"
          onClick={fetchPost}
        >
          <PlusCircle color="#d4d4d4" className="pb-2 h-10 w-10  " />
        </div>
      )}
    </article>
  );
}
