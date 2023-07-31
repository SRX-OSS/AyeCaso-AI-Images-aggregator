import { ProfileBody } from "@/components/Profile/ProfileBody";
import { ProfileHeader } from "@/components/Profile/ProfileHeader";
import { EProfileTabs } from "@/components/Profile/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useUser from "@/hooks/Auth/useUser";
import { getUser } from "@/src/graphql/queries";
import { withSSRContext } from "aws-amplify";
import { ImageIcon, Sparkle } from "lucide-react";
import { useMemo, useState } from "react";

export async function getStaticProps(context: any) {
  const { params } = context;
  const profile_id = params?.id;

  if (!profile_id) {
    return {
      notFound: true,
    };
  }

  try {
    const SSR = withSSRContext();
    const { data } = await SSR.API.graphql({
      query: getUser,
      variables: { id: profile_id, isDisabled: false },
    });

    if (!data?.getUser?.id) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        profileInfo: JSON.stringify(data?.getUser),
        key: data?.getUser?.id,
      },
      revalidate: 5,
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
  const profileInfo: any = useMemo(() => JSON.parse(props?.profileInfo), []);
  const { user } = useUser();

  const [activeTab, setActiveTab] = useState<EProfileTabs>(EProfileTabs.LATEST);
  return (
    <main className="w-full min-h-[98vh] pt-2 flex justify-center items-start pb-[100px] relative ">
      <section className="max-w-[1200px] w-full m-2">
        <ProfileHeader user={profileInfo} />
        <Tabs
          value={activeTab}
          onValueChange={(item: any) => setActiveTab(item)}
          className="w-full pt-4 "
        >
          <TabsList className="grid w-full max-w-[400px] grid-cols-2  m-[auto]">
            <TabsTrigger value={EProfileTabs.LATEST}>
              <ImageIcon className="h-4 w-4 mr-2" />
              {EProfileTabs.LATEST}
            </TabsTrigger>
            <TabsTrigger value={EProfileTabs.POPULAR}>
              <Sparkle className="h-4 w-4 mr-2" />
              {EProfileTabs.POPULAR}
            </TabsTrigger>
          </TabsList>
          <TabsContent value={EProfileTabs.LATEST}>
            <ProfileBody user={user} profile_id={profileInfo?.id} />
          </TabsContent>
          <TabsContent value={EProfileTabs.POPULAR}>
            <ProfileBody
              user={user}
              isPopular={true}
              profile_id={profileInfo?.id}
            />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
