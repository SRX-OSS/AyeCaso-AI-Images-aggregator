import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

// Custom Hook to reuse in components which required current authenticated user information
export default function useUser() {
  const [sessionLoaded, setSessionLoaded] = useState<boolean>(false);
  const [userSessionData, setUserSessionData] = useState<any>({});
  const router = useRouter();

  const getCurrentUserSession = useCallback(async () => {
    try {
      const user = await Auth.currentUserInfo();
      setUserSessionData({ username: user?.username, ...user?.attributes });
    } catch (error) {
      console.error("Session not Found");
    } finally {
      setSessionLoaded(true);
    }
  }, [router.pathname]);

  useEffect(() => {
    getCurrentUserSession();
  }, [router.pathname]);

  const logOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error("Error Signing out");
    }
  };

  return {
    isLoading: !sessionLoaded,
    isLoggedIn: !!userSessionData?.username,
    user: {
      ...userSessionData,
      username:
        userSessionData?.name?.replaceAll(" ", "_") ||
        userSessionData?.username,
      user_id: userSessionData?.sub,
      id: userSessionData?.sub,
    },
    logOut,
  };
}
