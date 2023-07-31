"use client";

import "@/styles/globals.css";
import "@/styles/custom_amplify.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteLogo } from "@/components/SiteLogo";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/Toaster";
import config from "@/src/aws-exports";
import {
  defaultDarkModeOverride,
  ThemeProvider as AWSThemeProvider,
  ColorMode,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

// Initialize Amplify
Amplify.configure({ ...config, ssr: true });
const NextNProgress = dynamic(() => import("nextjs-progressbar"), {
  ssr: false,
});
export const fontHeading = localFont({
  src: "../assets/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

function MyApp({ Component, pageProps }: any) {
  const pathname = usePathname();
  // Dark Theme
  const [colorMode, setColorMode] = useState<ColorMode>("dark");
  const theme = {
    name: "my-theme",
    overrides: [defaultDarkModeOverride],
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <AWSThemeProvider theme={theme} colorMode={colorMode}>
        <main
          id="main-div"
          className="relative bg-background h-[100dvh] antialiased overflow-scroll scrollbar-thin bg-gradient scrollbar-thumb-gray-800 scrollbar-track-gray-900"
        >
          <SiteLogo />
          <NextNProgress
            height={7}
            color="linear-gradient(to right, #00c6ff, #0072ff)"
            options={{ easing: "ease", speed: 500, showSpinner: false }}
          />
          <div className="flex-1 pt-10">
            <Component {...pageProps} />
            <SiteHeader />
          </div>
          <Toaster />
        </main>
      </AWSThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
