import { EImageBaseURL, getImageURLAyeCaso } from "@/lib/imageUtil";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  imageURL?: string;
  width?: number;
  height?: number;
  alt?: string;
  maxWidth?: any;
  maxHeight?: any;
  isPreview?: boolean;
  magnify?: boolean;
  quality?: number;
  className?: string;
  onClick?: () => void;
  unoptimized?: boolean;
}
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#26292B" offset="20%" />
      <stop stop-color="#2B2F31" offset="50%" />
      <stop stop-color="#16181A" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#16181A" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
const AyeCasoImage: React.FC<IProps> = ({
  imageURL,
  height = 840,
  width = 1600,
  alt,
  maxWidth,
  maxHeight,
  isPreview,
  magnify,
  quality,
  className,
  onClick,
  unoptimized,
}: IProps) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isImageBroken, setIsImageBroken] = useState<boolean>(false);

  let url: any = imageURL;

  if (isImageBroken) {
    return <></>;
  }

  const renderImage = () => {
    if (isError) {
      return (
        <Image
          unoptimized
          alt={`${alt} - AyeCaso` || "AyeCaso Image"}
          key={`story-image-${url}`}
          src={getImageURLAyeCaso(url)}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          width={magnify ? 3840 : 700}
          className={cn(className)}
          height={magnify ? 2160 : 475}
          onError={() => setIsImageBroken(true)}
          quality={quality || 75}
          onClick={onClick}
          style={{
            objectPosition: "center",
            objectFit: "cover",
            maxWidth: maxWidth,
            width: "100%",
            height: "100%",
            maxHeight: maxHeight,
          }}
        />
      );
    }

    return (
      <Image
        alt={`${alt} - AyeCaso` || "AyeCaso Image"}
        key={`story-image-${url}`}
        src={getImageURLAyeCaso(url)}
        placeholder="blur"
        className={cn(className)}
        onError={() => setIsError(true)}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        width={magnify ? 3840 : 800}
        height={magnify ? 2160 : 475}
        quality={quality || 75}
        onClick={onClick}
        style={{
          objectPosition: "center",
          objectFit: "cover",
          maxWidth: maxWidth,
          width: width || "100%",
          height: height || "100%",
          maxHeight: maxHeight,
        }}
      />
    );
  };

  return <>{renderImage()}</>;
};

export default AyeCasoImage;
