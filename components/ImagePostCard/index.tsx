import AyeCasoImage from "../ui/AyeCasoImage";
import { cn } from "@/lib/utils";
import { ImagePost } from "@/src/API";
import { useRouter } from "next/navigation";

interface IProps {
  imagePost?: ImagePost;
  maxWidth?: string;
  maxHeight?: string;
  isCustomClass?: string;
}

const ImagePostCard = ({
  imagePost,
  maxHeight,
  maxWidth,
  isCustomClass,
}: IProps) => {
  const router = useRouter();
  if (!imagePost?.imageKey) return null;

  const onImagePostClick = () => {
    router.push(`/post/${imagePost?.id}`);
  };

  return (
    <AyeCasoImage
      className={cn(
        "flex-auto h-auto rounded-none sm:rounded-md transition duration-300 ease-in-out hover:opacity-80 cursor-pointer ",
        isCustomClass ? isCustomClass : " grid-image-caso"
      )}
      imageURL={imagePost?.imageKey}
      alt={imagePost.title}
      onClick={onImagePostClick}
      magnify={false}
      maxHeight={maxHeight ? maxHeight : "380px"}
      maxWidth={maxWidth ? maxWidth : "32%"}
      quality={75}
    />
  );
};

export default ImagePostCard;
