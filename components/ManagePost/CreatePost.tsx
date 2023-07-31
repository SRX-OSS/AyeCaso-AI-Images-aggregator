import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { AiModelsList, ImagePostModel } from "./types";
import { defaultPost, generateUniqueImageKey } from "./utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { GeneralErrorMessage } from "@/lib/MessageEnum";
import { generateImageURLFromObject } from "@/lib/imageUtil";
import { cn } from "@/lib/utils";
import { createImagePost } from "@/src/graphql/mutations";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, Storage } from "aws-amplify";
import { ArrowRight, Loader2, LucideEdit, PlusCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  imagePostEdit?: ImagePostModel;
  user?: any;
}

const CreatePost = ({ user, imagePostEdit }: IProps) => {
  const [imagePost, setImagePost] = useState<ImagePostModel>(
    imagePostEdit ? imagePostEdit : defaultPost
  );
  const [nextStep, setNextStep] = useState<boolean>(false);
  const [imageLoadError, setImageLoadError] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [published, setPublished] = useState<boolean>(false);
  const [uploadingPercent, setUploadingPercent] = useState<number>(0);
  const [error, setError] = useState<string>("");

  // Input Image File State
  const [imageURL, setImageURL] = useState<any>("");
  const [imageFileObject, setImageFileObject] = useState<any>(null);

  // Static Data
  const isEdit = useMemo(() => !!imagePostEdit?.post_id, [imagePostEdit]);
  const user_id = useMemo(() => user?.attributes?.sub, [user]);

  const progressCallback = (progress: any) => {
    const progressInPercentage = Math.round(
      (progress.loaded / progress.total) * 100
    );
    setUploadingPercent(progressInPercentage);
  };

  // Image Post Final Submit
  const handleImagePostSubmit = async () => {
    setUploading(true);

    try {
      const uploadedImage = await Storage.put(
        generateUniqueImageKey(user_id),
        imageFileObject,
        {
          contentType: imageFileObject.type,
          // Progress callback
          progressCallback,
        }
      );
      const newPost: any = await API.graphql({
        query: createImagePost,
        variables: {
          input: {
            id: uuidv4(),
            user_id: user_id,
            gallery_id: null,
            title: imagePost?.title?.slice(0, 100),
            imageKey: uploadedImage.key,
            description: imagePost?.description?.slice(0, 1000),
            creator_model: imagePost?.creator_model,
            likesCount: 0,
            viewsCount: 0,
            isPrivate: imagePost?.isPrivate,
            isNSFW: imagePost?.isNSFW,
            tags: imagePost?.tags?.map((tag: string) => tag?.toLowerCase()),
            category: imagePost?.category,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      if (newPost?.data?.createImagePost?.id) {
        setPublished(true);
        setNextStep(false);
        setUploading(false);
        return;
      }
    } catch (error) {
      setError(GeneralErrorMessage.GENERAL_ERROR);
      console.error(error);
    }
  };

  // Image File Input
  const handleFileImageInput = (e: any) => {
    const imageFileObjectInput = e.target?.files[0];
    var reader = new FileReader();

    if (!imageFileObjectInput) {
      if (!!imageFileObject) return;
    }
    if (imageFileObjectInput?.size > 52_428_800) {
      setImageLoadError("Image file should be less than 50MB.");
      return;
    }
    if (imageFileObjectInput?.type?.includes("image/")) {
      reader.onload = function (e) {
        setImageFileObject(imageFileObjectInput);
        setImageURL(generateImageURLFromObject(imageFileObjectInput));
      };
      reader.readAsDataURL(imageFileObjectInput);
      setImageLoadError("");
    } else {
      setImageLoadError("Selected File is not Image!");
    }
  };

  const resetForm = () => {
    setNextStep(false);
    setUploading(false);
    setPublished(false);
    setImageLoadError("");
    setUploadingPercent(0);
    setError("");
    setImageURL("");
    setImageFileObject(null);
    setImagePost(defaultPost);
  };

  return published ? (
    <div className=" w-full flex justify-center flex-col items-center gap-3 ">
      <div className="p-2 pt-4  w-full flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-green-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      </div>
      <div className="text-sm text-gray-500 -tracking-tighter ">
        Image Posted Successfully.
      </div>
      <div className="p-2 pt-4 w-full flex justify-center">
        <Button
          variant="outline"
          className=" text-sm rounded-full "
          size={"sm"}
          type="button"
          onClick={resetForm}
        >
          Create new Post
        </Button>
      </div>
    </div>
  ) : (
    <form>
      {!nextStep ? (
        <>
          <label htmlFor="input-post-id">
            {imageURL ? (
              <img
                className="mb-4 w-[inherit] overflow-hidden object-cover
                            m-auto h-auto max-h-[35vh] sm:max-h-[350px] 
                            cursor-pointer relative rounded-md "
                src={imageURL}
              />
            ) : (
              <div className="mb-4 bg-gray-800 bg-gradient rounded-md flex w-full h-64  justify-center items-center  pointer ">
                <div className="text-md text-gray-300 flex justify-center items-center gap-3">
                  <PlusCircle /> Upload Image
                </div>
              </div>
            )}
            <input
              className="hidden"
              id="input-post-id"
              type="file"
              onChange={handleFileImageInput}
              accept="image/*"
            />
          </label>
          <div>
            {imageLoadError && (
              <div className="text-sm text-red-500 pt-2 -tracking-tighter ">
                {imageLoadError}
              </div>
            )}
          </div>
          <div
            className={cn(
              "flex  items-center w-full pt-2 sm:pt-0",
              imageURL ? "justify-between" : "justify-end"
            )}
          >
            {imageURL && (
              <label htmlFor="input-post-id-edit">
                <div
                  className="flex p-1 pl-2 pr-2 rounded-full bg-transparent border border-gray-700 hover:bg-slate-800 transition-colors
                 justify-start items-center text-gray-500  text-md cursor-pointer text-sm font-normal "
                >
                  <LucideEdit className="h-4 w-4 mr-1 ml-1" /> Change
                </div>
                <input
                  className="hidden"
                  id="input-post-id-edit"
                  type="file"
                  onChange={handleFileImageInput}
                  accept="image/*"
                />
              </label>
            )}

            <Button
              className=" text-md rounded-full "
              size={"sm"}
              disabled={!imageURL}
              onClick={() => imageURL && setNextStep(true)}
            >
              <ArrowRight className="w-5 h-5 " />
            </Button>
          </div>
        </>
      ) : uploading ? (
        <div className="p-10 w-full flex justify-center items-center flex-col gap-5 ">
          {!error ? (
            <>
              <div className="text-slate-400">
                {uploadingPercent < 100
                  ? "Uploading Image..."
                  : "Posting Image..."}
              </div>
              <div className="w-full flex justify-center ">
                {uploadingPercent < 100 ? (
                  <Progress value={uploadingPercent} className="" />
                ) : (
                  <Loader2 className="h-7 w-7 animate-spin" />
                )}
              </div>
            </>
          ) : (
            <div>
              {error && (
                <>
                  <div className="p-2  w-full flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-500 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500 pt-2 -tracking-tighter ">
                    {error}
                  </div>
                  <div className="p-2 pt-4 w-full flex justify-center">
                    <Button
                      variant="outline"
                      className=" text-sm rounded-full "
                      size={"sm"}
                      type="button"
                      onClick={resetForm}
                    >
                      Create Post
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="grid gap-6 pt-2">
            <div className="grid gap-2">
              <Label htmlFor="title" className="pb-1">
                Title
              </Label>
              <Input
                id="title"
                maxLength={100}
                placeholder="A cat with a spacesuit..."
                required
                onChange={(e) => {
                  setImagePost((prev: ImagePostModel) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description" className="pb-1">
                Prompt
              </Label>
              <Textarea
                id="description"
                maxLength={1000}
                placeholder="(Optional) Please describe what prompt you used to create this Image in short."
                onChange={(e) => {
                  setImagePost((prev: ImagePostModel) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="grid  gap-4">
              <div className="grid gap-2">
                <Label htmlFor="aimodel" className="pb-1">
                  AI Model (Used to generate image)
                </Label>
                <Select
                  defaultValue={AiModelsList[0].name}
                  required
                  onValueChange={(data) =>
                    setImagePost((prev: ImagePostModel) => ({
                      ...prev,
                      creator_model: data,
                    }))
                  }
                >
                  <SelectTrigger id="aimodel">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {AiModelsList.map((model, index) => {
                      return (
                        <SelectItem value={model.name} key={index}>
                          <div className="flex w-full justify-start items-center gap-2 ">
                            {!model?.logo ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                />
                              </svg>
                            ) : (
                              <img
                                src={model.logo}
                                height={20}
                                width={20}
                                alt={model.name}
                                className=" rounded-sm "
                              />
                            )}
                            {model.name}
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <TagsInput
              value={imagePost.tags}
              onChange={(data) =>
                setImagePost((prev: ImagePostModel) => ({
                  ...prev,
                  tags: data,
                }))
              }
              name="tags_image"
              placeHolder="Enter Tags relevant to Image"
            />
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center space-x-3">
                <Label htmlFor="nfsw">NSFW</Label>
                <Switch
                  id="nfsw"
                  checked={imagePost.isNSFW}
                  onCheckedChange={(data) =>
                    setImagePost((prev: ImagePostModel) => ({
                      ...prev,
                      isNSFW: data,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex justify-between gap-2 w-full">
            <Button
              variant="outline"
              className=" text-md rounded-full "
              size={"sm"}
              type="button"
              disabled={uploading}
              onClick={() => imageURL && setNextStep(false)}
            >
              Back
            </Button>
            <Button
              className=" text-md rounded-full "
              size={"sm"}
              disabled={!imageURL || !imagePost.title || uploading}
              onClick={handleImagePostSubmit}
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
              Publish
            </Button>
          </div>
        </>
      )}
    </form>
  );
};

export default withAuthenticator(CreatePost);
