import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn } from "@/utils/auth.client";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Logo from "../Logo";

export function MobileSignIn({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  setLoading,
  rememberMe,
  setRememberMe,
  appName,
  funnelLink,
  className,
}: AuthProps) {
  return (
    <div
      className={twMerge("flex h-full w-full flex-col gap-8 p-5", className)}
    >
      <Logo width={140} height={30} />
      <p className="text-3xl font-medium">Log In {appName}</p>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            className="h-12 bg-transparent! open:border-my-brand-color hover:border-my-brand-color focus:border-my-brand-color!"
            id="email"
            type="email"
            placeholder="email@example.com"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="grid">
          <div className="mb-2 flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              href="#"
              className="text-sm underline hover:text-my-brand-color"
            >
              Forgot your password?
            </Link>
          </div>

          <Input
            id="password"
            type="password"
            className="h-12 border-accent-foreground/50 bg-transparent! hover:border-my-brand-color! focus:border-my-brand-color! dark:border-accent"
            placeholder="password"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-4 flex items-center gap-2">
            <Checkbox
              defaultChecked
              id="remember"
              className="rounded-sm border-accent-foreground/50 dark:border-accent"
              onClick={() => {
                setRememberMe(!rememberMe);
              }}
            />
            <Label
              htmlFor="remember"
              className="text-accent-foreground/50 dark:text-accent-foreground/80"
            >
              Remember me
            </Label>
          </div>
          <Button
            type="submit"
            className="mt-6 h-13 w-full bg-my-brand-color text-foreground hover:cursor-pointer hover:bg-my-brand-color/50"
            disabled={loading}
            onClick={async () => {
              await signIn.email({
                email,
                password,
                rememberMe,
                fetchOptions: {
                  onRequest: () => {
                    setLoading(true);
                  },
                  onResponse: () => {
                    setLoading(false);
                  },
                },
              });
            }}
          >
            {loading ? (
              <Loader2Icon size={16} className="animate-spin" />
            ) : (
              <p>Continue</p>
            )}
          </Button>
        </div>
        <div className="flex w-full items-center justify-center gap-x-4 overflow-x-hidden">
          <Separator className="w-full bg-accent-foreground/50 dark:bg-accent" />
          <p className="text-sm text-accent-foreground/50 dark:text-accent">
            or
          </p>
          <Separator className="w-full bg-accent-foreground/50 dark:bg-accent" />
        </div>
        <div className="flex h-5 w-full items-center justify-center gap-x-5 font-medium text-my-brand-color">
          <Link className="flex w-25 justify-end" href={funnelLink || ""}>
            <p className="hover:cursor-pointer hover:underline">Access</p>
          </Link>
          <Separator
            orientation="vertical"
            className="bg-accent-foreground/50 dark:bg-accent"
          />
          <p className="start-0 w-25 hover:cursor-pointer hover:underline">
            Contact us
          </p>
        </div>
      </div>
    </div>
  );
}
