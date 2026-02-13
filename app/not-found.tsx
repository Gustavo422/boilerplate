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
      <div className="flex flex-col items-center justify-start rounded-md border border-accent-foreground p-4 text-center text-accent-foreground dark:border-accent">
        <span>
          <h1 className="text-[80px] font-bold tracking-tight text-balance">
            404
          </h1>
          <h2 className="mb-8 scroll-m-20 text-4xl font-normal tracking-tight">
            Page not found!
          </h2>
        </span>
        <Link href="/">
          <Button
            type="button"
            className="mb-8 cursor-pointer bg-my-brand-color text-xl text-accent-foreground hover:text-accent"
            size="lg"
          >
            <HomeIcon data-icon="inline-start" className="min-h-6 min-w-6" />
            Back to Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
}
