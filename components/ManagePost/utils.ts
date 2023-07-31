import { AiModelsList, ImagePostModel } from "./types";
import uniqid from "uniqid";

export const generateUniqueImageKey = (user_id: string) => {
  return `${user_id}/${uniqid()}`;
};

export const defaultPost: ImagePostModel = {
  isPrivate: false,
  isNSFW: false,
  tags: [],
  description: "",
  creator_model: AiModelsList[0].name,
};
