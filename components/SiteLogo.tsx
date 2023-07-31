import useAccountInit from "@/hooks/Auth/useAccountInit";
import useUser from "@/hooks/Auth/useUser";
import { cn } from "@/lib/utils";
import { Lily_Script_One } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const lilyOne = Lily_Script_One({
  subsets: ["latin"],
  weight: "400",
});

export function SiteLogo() {
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
    <nav className=" z-40 w-full flex justify-center fixed ">
      <Link href={"/"} passHref>
        <div
          className={cn(
            lilyOne.className,
            "pointer f-cat p-1 text-2xl pl-4 pr-4 rounded-br-xl bg-gray-900 glassDark rounded-bl-xl border -tracking-tighter"
          )}
        >
          ayecaso
        </div>
      </Link>
    </nav>
  );
}
