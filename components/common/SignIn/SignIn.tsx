"use client";

import projectsData from "@/data/projectsData";
import siteMetadata from "@/data/siteMetadata";
import { useState } from "react";
import { DesktopSignIn } from "./DesktopSignIn";
import { MobileSignIn } from "./MobileSignIn";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const funnelLink = projectsData?.[0].funnelLink || "";

  const appName = siteMetadata.headerTitle;

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <DesktopSignIn
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        setLoading={setLoading}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        appName={appName}
        funnelLink={funnelLink}
        className="hidden sm:flex"
      />
      <MobileSignIn
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        setLoading={setLoading}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        appName={appName}
        funnelLink={funnelLink}
        className="flex sm:hidden"
      />
    </div>
  );
}
