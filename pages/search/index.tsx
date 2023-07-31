import { fontHeading } from "../_app";
import ImagePostCard from "@/components/ImagePostCard";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { mergeAndSortById } from "@/lib/performanceUtils";
import { cn } from "@/lib/utils";
import { ImagePost } from "@/src/API";
import { searchImagePosts } from "@/src/graphql/queries";
import { API } from "aws-amplify";
import { Search, Sparkles } from "lucide-react";
import { useState } from "react";

interface NextToken {
  title: string | null;
  tags: string | null;
}

export default function Page() {
  const [searchQuery, setSearchQuey] = useState<string>("");
  const [prevSearchQuery, setPrevSearchQuey] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, serIsError] = useState<boolean>(false);
  const [postList, setPostList] = useState<ImagePost[]>([]);
  const [nextListToken, setNextListToken] = useState<NextToken | null>(null);
  const [totalResults, setTotalResults] = useState<number | null>(null);

  // Handle User Input change
  const handleQueryInputChange = (e: any) => {
    setSearchQuey(e.target.value);
    setTotalResults(null);
    serIsError(false);
    setNextListToken(null);
    setPostList([]);
  };

  const searchByTitle = async () => {
    const queryObj: any = {
      filter: {
        title: { match: `${searchQuery}` },
        isPrivate: { eq: false },
      },
      limit: 16,
    };
    if (nextListToken?.title) {
      queryObj.nextToken = nextListToken?.title;
    }
    const { data }: any = await API.graphql({
      query: searchImagePosts,
      variables: queryObj,
    });

    return data;
  };

  const searchByTags = async () => {
    const queryObj: any = {
      filter: {
        tags: { match: `${searchQuery?.toLowerCase()}` },
        isPrivate: { eq: false },
      },
      limit: 16,
    };
    if (nextListToken?.tags) {
      queryObj.nextToken = nextListToken?.tags;
    }
    const { data }: any = await API.graphql({
      query: searchImagePosts,
      variables: queryObj,
    });

    return data;
  };

  const submitSearch = async () => {
    if (searchQuery !== prevSearchQuery) {
      setTotalResults(null);
      serIsError(false);
      setNextListToken(null);
    } else {
      if (!nextListToken) {
        return;
      }
    }

    setIsLoading(true);
    try {
      const searchResults = await Promise.all([
        searchByTitle(),
        searchByTags(),
      ]);

      setPostList((prev: ImagePost[]) =>
        mergeAndSortById(
          searchQuery === prevSearchQuery
            ? [
                ...prev,
                ...searchResults?.[0]?.searchImagePosts?.items,
                ...searchResults?.[1]?.searchImagePosts?.items,
              ]
            : [
                ...searchResults?.[0]?.searchImagePosts?.items,
                ...searchResults?.[1]?.searchImagePosts?.items,
              ]
        )
      );

      // Set NextToken for fetching next available ImagePosts, if available
      setNextListToken({
        title: searchResults?.[0]?.searchImagePosts?.nextToken,
        tags: searchResults?.[1]?.searchImagePosts?.nextToken,
      });
      setTotalResults(
        searchResults?.[0]?.searchImagePosts?.total +
          searchResults?.[1]?.searchImagePosts?.total
      );
    } catch (error) {
      serIsError(true);
      setPostList([]);
      setNextListToken(null);
      setTotalResults(null);
    } finally {
      setIsLoading(false);
      setPrevSearchQuey(searchQuery);
    }
  };

  return (
    <main
      className={cn(
        "w-full  flex justify-center relative ",
        postList?.length <= 0 ? "items-start" : "items-center"
      )}
    >
      <section
        className={cn(
          "max-w-[1200px] w-full m-2 flex flex-col justify-center items-center ",
          postList?.length <= 0
            ? "min-h-[80vh]"
            : "mt-10  min-h-[80vh] pb-[100px]"
        )}
      >
        <div
          className={cn(
            fontHeading.className,
            "font-heading pl-1 pb-2 flex justify-center items-center gap-1  -tracking-tighter md:-tracking-tighter w-auto text-xl sm:text-2xl "
          )}
        >
          <Sparkles className="h-7 w-7 mr-2 mb-1" /> Search
        </div>
        <div className="w-full flex mt-2 items-center mb-5 max-w-[700px] bg-transparent border border-gray-600 p-1 pl-4 pr-2 rounded-full">
          <Search className="w-4 h-4 text-gray-400  " />
          <Input
            type="search"
            placeholder="Search for AI Image Posts..."
            className="border-0 -tracking-tight outline-none bg-transparent "
            onChange={handleQueryInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitSearch();
              }
            }}
          />
        </div>
        <>
          {!!searchQuery && !!totalResults && (
            <>
              <div className=" mb-2 sm:mt-5 w-full max-w-[700px] flex justify-between items-start ">
                <div className="text-sm text-gray-400">
                  Search Results for &quot;{searchQuery}&quot;
                </div>
                <div className="text-sm text-gray-400">
                  {totalResults} Results
                </div>
              </div>
              <Separator className="sm:mt-2 mb-3 sm:mb-10 bg-gray-700 max-w-[700px] " />
            </>
          )}

          {postList?.length > 0 && (
            <div className="flex w-full max-w-[1200px] flex-wrap justify-center gap-1 sm:gap-2 items-start ">
              {postList?.map((post: ImagePost, index: number) => {
                return (
                  <ImagePostCard imagePost={post} key={`${index}-posts`} />
                );
              })}
            </div>
          )}
          {isLoading && (
            <div className="flex flex-wrap w-full justify-center gap-1 sm:gap-2 items-start ">
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
          {totalResults === 0 && !isLoading && postList?.length < 1 ? (
            <div className="p-5  flex justify-center break-words text-center w-full text-xs text-gray-400">
              No AI Image Posts Found related to &quot;{searchQuery}&quot;.
            </div>
          ) : (
            isError && (
              <div className="p-5 flex justify-center break-words text-center w-full text-xs text-red-500 font-medium ">
                Something Went Wrong! Please try again later.
              </div>
            )
          )}
        </>
      </section>
    </main>
  );
}
