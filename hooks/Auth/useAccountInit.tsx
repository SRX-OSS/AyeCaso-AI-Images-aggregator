import useUser from "./useUser";
import { ElocalStoreKeys } from "@/lib/utils";
import { createUser } from "@/src/graphql/mutations";
import { getUser } from "@/src/graphql/queries";
import { API } from "aws-amplify";
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function useAccountInit() {
  const pathname = usePathname();
  const { user } = useUser();

  const setAccountIfNotAvailable = useCallback(async () => {
    try {
      const isAccountAlreadyPresent = localStorage.getItem(
        ElocalStoreKeys.isAccountInitialized
      );
      if (
        !isAccountAlreadyPresent ||
        isAccountAlreadyPresent !== user?.user_id
      ) {
        const { data }: any = await API.graphql({
          query: getUser,
          variables: { id: user?.user_id },
        });

        if (!data?.getUser?.id) {
          const { data }: any = await API.graphql({
            query: createUser,
            variables: {
              input: {
                id: user?.user_id,
                username: user?.username,
                picture: user?.picture || "",
                likesCount: 0,
                reachCount: 0,
                tagline: "",
                links: [],
              },
            },
            authMode: "AMAZON_COGNITO_USER_POOLS",
          });
          if (data?.createUser?.id) {
            localStorage.setItem(
              ElocalStoreKeys.isAccountInitialized,
              `${user?.user_id}`
            );
          }
        } else {
          !isAccountAlreadyPresent &&
            localStorage.setItem(
              ElocalStoreKeys.isAccountInitialized,
              `${user?.user_id}`
            );
        }
      }
    } catch (error) {
      console.error("Session not Found");
    }
  }, [user?.user_id, pathname]);

  useEffect(() => {
    if (user?.user_id) {
      setAccountIfNotAvailable();
    }
  }, [pathname, user?.user_id]);

  return {};
}
