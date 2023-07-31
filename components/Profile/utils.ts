import { ImagePost } from "@/src/API";

export enum EProfileTabs {
  POSTS = "Posts",
  LATEST = "Latest",
  POPULAR = "Popular",
  FAVORITES = "Saved",
  GALLERY = "Gallery",
}

export const filterPrivateOnes = (list: ImagePost[]) => {
  return list?.filter((post: ImagePost) => !post.isPrivate);
};
