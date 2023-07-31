import LoginPrompt from "./LoginPrompt";
import CreatePost from "./ManagePost/CreatePost";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAccountInit from "@/hooks/Auth/useAccountInit";
import useUser from "@/hooks/Auth/useUser";
import {
  Bookmark,
  HomeIcon,
  LogOut,
  Plus,
  Search,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export function SiteHeader() {
  useAccountInit();
  const pathname = usePathname();

  const hideHeader = useMemo(() => pathname?.includes("/login"), [pathname]);
  const { user, logOut } = useUser();
  const [openCreatePostModal, setOpenCreatePostModal] =
    useState<boolean>(false);

  if (hideHeader) {
    return <></>;
  }
  return (
    <header className="fixed bottom-0 z-40 w-full flex justify-center border-b bg-gray-900 glassDark ">
      <div
        className=" px-5 py-5 sm:px-5 sm:py-5 flex h-16 w-full sm:max-w-[500px] items-center justify-around
                       sm:justify-center gap-5 sm:gap-10 "
      >
        <Link href={"/"} passHref>
          <div className="pointer  ">
            <HomeIcon />
          </div>
        </Link>
        <Link href={"/search"} passHref>
          <div className="pointer  ">
            <Search />
          </div>
        </Link>
        <div className="pointer  " onClick={() => setOpenCreatePostModal(true)}>
          <Plus className="h-7 w-7" />
        </div>
        <Link href={"/saved"} passHref>
          <div className="pointer  ">
            <Bookmark />
          </div>
        </Link>
        <div className="flex items-center justify-end gap-1 lg:gap-3 pr-4 lg:pr-0">
          <div className="mt-[3px]" key={user?.user_id + user?.picture}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-7 w-7 rounded-full pointer"
                >
                  <Avatar className="h-7 w-7  ">
                    <AvatarImage
                      src={!user?.picture ? "/02.png" : user?.picture}
                      alt={user?.name}
                      referrerPolicy="no-referrer"
                    />
                    <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                {user?.username && (
                  <>
                    <DropdownMenuLabel className="font-normal">
                      <Link href={`/profile/${user?.user_id}`}>
                        <div className="flex flex-col space-y-1  pointer">
                          <p className="text-sm font-medium leading-none">
                            @{user?.username}
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                  </>
                )}

                <DropdownMenuGroup>
                  <DropdownMenuItem className=" pointer ">
                    <Link
                      href={user?.sub ? `/profile/${user?.user_id}` : "/login"}
                      className="w-full h-full  flex items-center "
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>{user?.sub ? "Profile" : "Login"}</span>
                    </Link>
                  </DropdownMenuItem>
                  {!user?.sub && (
                    <DropdownMenuItem className=" pointer ">
                      <Link
                        href={"/login"}
                        className="w-full h-full  flex items-center "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="mr-2 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>

                        <span>Create Account</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {user?.sub && (
                    <>
                      <DropdownMenuItem className=" pointer">
                        <Link
                          href={user?.user_id ? "/Settings" : "/login"}
                          className="w-full h-full  flex items-center "
                        >
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuGroup>
                {user?.sub && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={logOut}
                      className="text-red-500 pointer"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {!user?.sub ? (
        <section>
          <LoginPrompt
            setOpenLoginPromptModal={setOpenCreatePostModal}
            openLoginPromptModal={openCreatePostModal}
            header={"Please Login to share your AI Art"}
          />
        </section>
      ) : (
        <Dialog
          open={openCreatePostModal}
          onOpenChange={setOpenCreatePostModal}
        >
          <DialogContent className="max-h-[100vh] sm:max-h-[85vh] h-auto overflow-auto scrollbar-thin  scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
            <DialogHeader>
              <DialogTitle className="text-lg pb-1 flex justify-start items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>

                <div>Publish</div>
              </DialogTitle>
              <DialogDescription className="whitespace-pre-line rounded-md text-left ">
                Upload your AI generated Art
              </DialogDescription>
            </DialogHeader>{" "}
            <CreatePost />
          </DialogContent>
        </Dialog>
      )}
    </header>
  );
}
