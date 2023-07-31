import ImagePostCard from "@/components/ImagePostCard";
import AyeCasoImage from "@/components/ui/AyeCasoImage";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { divideArray } from "@/lib/performanceUtils";
import { cn } from "@/lib/utils";
import { ImagePost } from "@/src/API";
import { listImagePostByViews } from "@/src/customQueries";
import { API } from "aws-amplify";
import { Flame } from "lucide-react";
import { Lily_Script_One } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const lilyOne = Lily_Script_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [postList, setPostList] = useState<ImagePost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextListToken, setNextListToken] = useState<String | null>(null);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 743px)" });

  const fetchPost = async () => {
    setLoading(true);
    try {
      const queryObj: any = {
        limit: 10,
      };
      if (nextListToken) {
        queryObj.nextToken = nextListToken;
      }

      // Fetch Latest ImagePosts for Profile
      const { data }: any = await API.graphql({
        query: listImagePostByViews,
        variables: queryObj,
      });

      setPostList((prev: ImagePost[]) => [
        ...prev,
        ...data?.searchImagePosts?.items,
      ]);

      // Set NextToken for fetching next available ImagePosts, if available
      setNextListToken(
        data?.searchImagePosts?.item?.length < 10
          ? null
          : data?.searchImagePosts?.nextToken
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const router = useRouter();

  const onImagePostClick = (imagePost: ImagePost) => {
    router.push(`/post/${imagePost?.id}`);
  };

  return (
    <main className="w-full min-h-[98vh] pt-10 flex justify-center flex-col items-center pb-[100px] relative ">
      <div className="p-2 max-w-[900px] w-full ">
        <div className="border border-gray-700 bg-gradient-2 rounded-lg text-center">
          <div className="content mb-5 mt-20">
            <h1
              className={cn(lilyOne.className, "title text-5xl  md:text-7xl ")}
            >
              ayecaso
              <div className="aurora">
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
              </div>
            </h1>
          </div>
          <div className="pb-20 font-semibold -tracking-tighter text-md">
            World of AI Generated Art
          </div>
        </div>
      </div>

      <div className="pb-3 max-w-[900px] w-full pt-8 pl-3 sm:pl-1 text-gray-300 flex justify-start items-center gap-1  text-left -tracking-tighter text-sm">
        <Flame /> Trending
      </div>
      <Separator className="mb-3 bg-gray-700 max-w-[900px] w-full  " />
      <section className="max-w-[900px] w-full p-1 ">
        {isMobileScreen ? (
          <div className="flex w-full max-w-[1200px] flex-wrap justify-center gap-1 sm:gap-2 items-start ">
            {postList?.map((post: ImagePost, index: number) => {
              return <ImagePostCard imagePost={post} key={`${index}-posts`} />;
            })}
          </div>
        ) : (
          divideArray(postList, 4)?.map(
            (foursList: ImagePost[], index: number) => {
              return (
                <div
                  className="wrapper mb-[-190px]"
                  key={`divide-post-${index}`}
                >
                  {foursList?.map((post: ImagePost, index2: number) => {
                    if (index2 === 0) {
                      return (
                        <picture
                          className="news-item hero-item"
                          key={`post-${index}-${index2}`}
                        >
                          <AyeCasoImage
                            className={cn(
                              " transition duration-300 ease-in-out hover:opacity-80 cursor-pointer object-contain "
                            )}
                            imageURL={post?.imageKey}
                            alt={post.title}
                            onClick={() => onImagePostClick(post)}
                            magnify={false}
                            maxHeight={"100%"}
                            maxWidth={"100%"}
                            quality={100}
                          />
                        </picture>
                      );
                    } else {
                      return (
                        <picture
                          className="news-item standard-item"
                          key={`post-${index}-${index2}`}
                        >
                          <AyeCasoImage
                            className={cn(
                              " transition duration-300 ease-in-out hover:opacity-80 cursor-pointer "
                            )}
                            imageURL={post?.imageKey}
                            alt={post.title}
                            onClick={() => onImagePostClick(post)}
                            magnify={false}
                            maxHeight={"100%"}
                            maxWidth={"100%"}
                            quality={100}
                          />
                        </picture>
                      );
                    }
                  })}
                </div>
              );
            }
          )
        )}
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
      </section>
    </main>
  );
}
