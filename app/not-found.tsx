import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex h-fit w-fit flex-col items-center justify-center gap-3 rounded-xl border p-4 md:p-6">
        <h1 className="text-center text-6xl font-bold md:text-7xl lg:text-8xl">
          404
        </h1>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl">
          Page Not Found!
        </h2>
        <Link href="/">
          <Button type="button" className="cursor-pointer">
            <HomeIcon /> Back to Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
}
