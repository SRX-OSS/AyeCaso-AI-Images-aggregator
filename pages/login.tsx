import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import router from "next/router";
import { useEffect } from "react";

function Login({ user }: any) {
  useEffect(() => {
    if (user?.username) {
      router.push("/");
    }
  }, [user?.username]);

  return (
    <h1 className="flex justify-center items-center h-screen text-3xl ">
      {user?.username && "Login"}
    </h1>
  );
}

export default withAuthenticator(Login);
