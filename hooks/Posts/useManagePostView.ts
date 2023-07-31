import { incrementProfileReachCount } from "@/components/ImagePostCard/utils";
import { getImagePostViews, updateImagePostViews } from "@/src/customQueries";
import { Redis } from "@upstash/redis";
import { API } from "aws-amplify";
import { useCallback, useEffect } from "react";

interface IProps {
  post_id: string;
  post_user_id: string;
}

// Custom Hook to handle View Counts of Image Post
export default function useManagePostView({ post_id, post_user_id }: IProps) {
  const redis = new Redis({
    url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL || "",
    token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN || "",
  });

  const updateViewCounts = async () => {
    try {
      const newDataPostLikesCount: any = await API.graphql({
        query: getImagePostViews,
        variables: { id: post_id },
      });

      // Updated View Count
      const newViewCount =
        (newDataPostLikesCount?.data?.getImagePost?.viewsCount || 0) + 1;

      await API.graphql({
        query: updateImagePostViews,
        variables: {
          input: {
            id: post_id,
            viewsCount: newViewCount,
          },
        },
      });

      //Increment Profile Total Reach Count (Better way is to use Redis Counter to handle millions of request)
      incrementProfileReachCount(post_user_id);

      // Waiting Counter in Redis
      await redis.setex(post_id, 3600, "1");
    } catch (e) {
      console.error(e);
    }
  };

  const manageViewCount = useCallback(async () => {
    try {
      const data = await redis.get(post_id);
      if (!data) {
        await updateViewCounts();
      }
    } catch (error) {
      console.error("View errors");
    }
  }, [post_id]);

  useEffect(() => {
    manageViewCount();
  }, [post_id]);

  return {};
}
