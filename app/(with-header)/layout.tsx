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
      <main className="flex h-[calc(100vh-var(--project-h))] w-full">
        {children}
      </main>
    </Suspense>
  );
}
