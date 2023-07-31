import { PostActions } from "@/components/ImagePostCard/PostActions";
import { AiModelsList, ImagePostModel } from "@/components/ManagePost/types";
import AyeCasoImage from "@/components/ui/AyeCasoImage";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getUserInitials } from "@/src/customQueries";
import { getImagePost } from "@/src/graphql/queries";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { withSSRContext } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export async function getStaticProps(context: any) {
  const { params } = context;
  const post_id = params?.id;

  if (!post_id) {
    return {
      notFound: true,
    };
  }

  try {
    const SSR = withSSRContext();

    // Get ImagePost Data
    const { data } = await SSR.API.graphql({
      query: getImagePost,
      variables: { id: post_id },
    });

    if (!data?.getImagePost?.id) {
      return {
        notFound: true,
      };
    }

    // Get User Data initials for ImagePost creator
    let userData = await SSR.API.graphql({
      query: getUserInitials,
      variables: { id: data?.getImagePost?.user_id },
    });
    userData = userData?.data?.getUser;

    if (!userData.id) {
      return {
        notFound: true,
      };
    }

    // Modifying User Object for conflicting Id
    userData = {
      ...userData,
      user_id: userData?.id,
    };
    delete userData.id;

    return {
      props: {
        postInfo: JSON.stringify({ ...data?.getImagePost, ...userData }),
        key: data?.getImagePost?.id,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Page(props: any) {
  const postInfo: ImagePostModel | any = useMemo(
    () => JSON.parse(props?.postInfo),
    []
  );
  const router = useRouter();

  return (
    <main className="w-full flex justify-center flex-col items-start pb-[200px] pt-3 relative">
      <section className="max-w-[1200px] m-auto flex justify-center w-full ">
        <figure>
          <AyeCasoImage
            className="flex-auto h-auto w-auto rounded-none sm:rounded-md ayecaso-big-image"
            imageURL={postInfo?.imageKey}
            alt={postInfo?.title}
            magnify={true}
            maxHeight={"70vw"}
            maxWidth={"auto"}
            quality={100}
          />
        </figure>
      </section>
      <section className="max-w-[700px] w-full flex justify-between items-start sm:items-center m-auto sm:pt-4 sm:pb-5">
        <PostActions imagePost={postInfo} />
      </section>
      <Separator className="max-w-[700px] m-auto" />
      <section className="max-w-[700px] w-full m-auto mt-0 sm:mt-1 px-3 sm:px-4 p-2 ">
        <p className=" text-md font-semibold -tracking-tight sm:text-xl">
          {postInfo?.title}
        </p>
        <div className=" flex justify-between items-center gap-1 pt-4">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => router.push(`/profile/${postInfo?.user_id}`)}
          >
            <Avatar>
              <AvatarImage
                src={!postInfo?.picture ? "/02.png" : postInfo?.picture}
                alt={`${postInfo?.username} - AyeCaso`}
                referrerPolicy="no-referrer"
              />
              <AvatarFallback>
                <Avatar>
                  <AvatarImage
                    src={"/02.png"}
                    alt={`${postInfo?.username} - AyeCaso`}
                    referrerPolicy="no-referrer"
                  />
                </Avatar>
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">
                {postInfo?.username?.slice(0, 15)}
              </p>
              <p className="text-xs text-muted-foreground pt-1">
                {postInfo?.tagline}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-1">
            {AiModelsList?.map(
              (model: any) =>
                model.name === postInfo?.creator_model && (
                  <div
                    className="flex w-full justify-start items-center gap-2 text-sm "
                    key={postInfo?.creator_model}
                  >
                    {model.name}
                    <img
                      src={model.logo}
                      height={20}
                      width={20}
                      alt={model.name}
                      className=" rounded-sm "
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </section>
      <section className="max-w-[700px] w-full m-auto mt-2 sm:mt-4 p-3 border-0 sm:border pb-4 sm:p-4 bg-gradient-2 bg-[#16181A]  rounded-lg ">
        <p className="text-sm text-gray-300 leading-7">
          <Badge
            variant={"outline"}
            className="rounded-full bg-gray-800 pb-1 mr-2 "
          >
            Prompt
          </Badge>
          {postInfo?.description}
        </p>
        <Separator className="my-4" />
        <div className=" flex flex-wrap justify-start items-center gap-2">
          {postInfo?.tags?.map((tag: string, index: number) => (
            <Badge
              variant={"secondary"}
              key={index + "tag"}
              className="rounded-md   bg-blue-900 pb-1 "
            >
              {tag}
            </Badge>
          ))}
        </div>
      </section>
    </main>
  );
}
