export enum EImageBaseURL {
  AWS_CLOUDFRONT = "https://xyz.cloudfront.net/",
}

export const getImageURLAyeCaso = (
  imageURL: string | null | undefined,
  optimized?: boolean,
  height?: string,
  width?: string
): any => {
  if (!imageURL) return `/02.png`;

  const isExternalImageURL =
    imageURL.substring(0, 4) === "http" || imageURL.substring(0, 4) === "blob";

  const mediaURL = isExternalImageURL
    ? imageURL
    : `${EImageBaseURL.AWS_CLOUDFRONT}public/${imageURL}`;

  const finalURL = optimized
    ? `//wsrv.nl/?url=${mediaURL}&w=${width}&h=${height}&fit=cover`
    : mediaURL;

  return finalURL;
};

export const generateImageURLFromObject = (imageObject: any): string => {
  return URL.createObjectURL(imageObject);
};
