import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn } from "@/utils/auth.client";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Logo from "../Logo";

export function DesktopSignIn({
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
    <Card
      className={twMerge(
        "h-fit w-fit min-w-105 flex-col items-start justify-center gap-y-8 border-accent bg-transparent p-10",
        className,
      )}
    >
      <Logo width={140} height={30} />
      <h3 className="font-sans text-3xl font-semibold">{`Log in ${appName}`}</h3>
      <div className="flex w-full flex-col">
        <CardContent className="m-0! flex w-full flex-col gap-y-10 p-0!">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="h-12 bg-transparent! hover:border-project focus:border-project!"
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

          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-sm underline hover:text-project">
                Forgot your password?
              </Link>
            </div>

            <Input
              id="password"
              type="password"
              className="h-12 bg-transparent! hover:border-project! focus:border-project!"
              placeholder="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="mt-4 flex items-center gap-2">
              <Checkbox
                defaultChecked
                id="remember"
                className="rounded-sm bg-transparent! text-white!"
                onClick={() => {
                  setRememberMe(!rememberMe);
                }}
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>

            <Button
              type="submit"
              className="mt-6 h-13 w-full bg-project text-foreground hover:cursor-pointer hover:bg-project/50"
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
        </CardContent>
      </div>
      <div className="flex w-full items-center justify-center gap-x-4 overflow-x-hidden">
        <Separator className="w-full!" />
        <p className="text-sm text-white/50">or</p>
        <Separator className="w-full!" />
      </div>
      <div className="flex h-5 w-full items-center justify-center gap-x-5 font-medium text-project">
        <Link className="flex w-20 justify-end" href={funnelLink || ""}>
          <p className="hover:cursor-pointer hover:underline">Access</p>
        </Link>
        <Separator orientation="vertical" />
        <p className="start-0 w-20 hover:cursor-pointer hover:underline">
          Contact us
        </p>
      </div>
    </Card>
  );
}
