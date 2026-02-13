"use client";

import { Separator } from "@/components/ui/separator";
import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata";
import { twMerge } from "tailwind-merge";
import DesktopHeader from "./desktop-header/DesktopHeader";
import MobileHeader from "./mobile-header/MobileHeader";
export function Header() {
  const navLinks = headerNavLinks;
  const homeLink = navLinks[0].link || "";
  const isFixed = siteMetadata.stickyNav ? "sticky top-0 z-50" : "";

  return (
    <header
      className={twMerge(
        isFixed,
        "bg-opacity-10 flex h-(--my-header-h) w-full flex-col bg-background/35 bg-clip-padding backdrop-blur-sm backdrop-filter dark:bg-background/85",
      )}
    >
      <MobileHeader
        className="flex sm:hidden"
        homeLink={homeLink}
        headerNavLinks={navLinks}
      />
      <DesktopHeader
        className="hidden sm:flex"
        homeLink={homeLink}
        headerNavLinks={navLinks}
      />
      <Separator />
    </header>
  );
}
