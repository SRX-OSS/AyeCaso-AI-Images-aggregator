"use client";

import { SidebarNav } from "./components/sidebar-nav";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { fontHeading } from "@/pages/_app";

const sidebarNavItems = [
  {
    title: "Account",
    href: "/Settings",
  },
  {
    title: "Notifications",
    href: "/Settings/notifications",
  },
  {
    title: "Delete",
    href: "/Settings/delete",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <main className="w-full min-h-[98vh] pt-2 pl-2 pr-2 sm:pt-20  flex justify-center items-start pb-[100px] relative ">
      <section className="max-w-[800px] w-full m-2">
        <div className=" space-y-6 pb-16 ">
          <div className="space-y-0.5">
            <h2
              className={cn(
                fontHeading.className,
                "font-heading font-semibold -tracking-tighter md:-tracking-tighter tight text-3xl 2xl:text-5xl xl:text-5xl lg:text-5xl "
              )}
            >
              Settings
            </h2>
            <p className="text-muted-foreground  text-xs 2xl:text-base xl:text-base lg:text-base">
              Manage your Profile, Account settings and preferences.
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col 2xl:space-y-8 xl:space-y-8 lg:space-y-8 lg:flex-row lg:space-x-12">
            <aside className="-mx-4 lg:w-1/5 hidden 2xl:block xl:block lg:block">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl" style={{ marginTop: "0" }}>
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
