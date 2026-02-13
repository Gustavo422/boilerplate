import { Header } from "@/components/layout/header/Header";

import { Suspense } from "react";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <main className="flex w-full pl-[calc(100vw-100%)]">{children}</main>
    </Suspense>
  );
}
