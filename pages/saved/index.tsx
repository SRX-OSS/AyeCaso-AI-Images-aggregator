import { fontHeading } from "../_app";
import { SavedList } from "@/components/Profile/SavedList";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useUser from "@/hooks/Auth/useUser";
import { cn } from "@/lib/utils";
import { Bookmark } from "lucide-react";
import Link from "next/link";

export default function Page(props: any) {
  const { isLoading, isLoggedIn, user } = useUser();

  return (
    <main className="w-full min-h-[98vh] pt-5 flex justify-center items-start pb-[100px] relative ">
      <section className="max-w-[1200px] w-full m-2">
        <div
          className={cn(
            fontHeading.className,
            "font-heading pl-1 -tracking-tighter md:-tracking-tighter tight text-xl "
          )}
        >
          Saved
        </div>
        <Separator className=" my-1 sm:my-3 mt-2" />
        {!isLoading && !isLoggedIn ? (
          <div className="p-5 pt-20 m-auto">
            <div>
              <div className="text-lg font-semibold  flex justify-center items-center gap-2">
                <Bookmark />
                Login
              </div>
              <div className="text-md pt-2 text-gray-400 pb-3 flex justify-center items-center gap-2">
                Please Login to see Saved Posts.
              </div>
              <div className="flex w-full gap-5 pt-5  justify-center ">
                <Link href="/login">
                  <Button
                    type="button"
                    className="w-auto flex justify-center items-center gap-2 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                    <div>Sign in</div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <SavedList user={user} />
        )}
      </section>
    </main>
  );
}
