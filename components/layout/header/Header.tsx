"use client";

import { Separator } from "@/components/ui/separator";
import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata";
import { twMerge } from "tailwind-merge";
import DesktopHeader from "./desktop-header/DesktopHeader";
import MobileHeader from "./mobile-header/MobileHeader";
export function Header() {
  const navLinks = headerNavLinks;
  const homeLink = String(navLinks[0].link);
  const isFixed = !siteMetadata.stickyNav ? "" : "sticky top-0 z-50";

  return (
    <header
      className={twMerge("flex h-(--project-h) w-full flex-col", isFixed)}
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
