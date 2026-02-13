import { Badge } from "@/components/ui/badge";
import { Check, Rocket, Settings, Zap } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-5 flex justify-center">
            <Badge variant="default">Getting started</Badge>
          </div>
          <h2 className="text-3xl font-semibold text-balance md:text-5xl">
            Simple steps to get you started
          </h2>
          <p className="mt-6 text-base text-balance text-muted-foreground md:text-lg">
            Follow these straightforward steps to set up your account and start
            using our platform in minutes.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute right-0 left-0 mt-6 h-0.5 bg-border" />

            <div className="grid grid-cols-4 gap-4">
              <div className="relative">
                <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2 border-border bg-background">
                  <Rocket className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Sign up
                  </h3>
                  <p className="mt-2 text-sm text-balance text-muted-foreground">
                    Create your account quickly using email or social login.
                    Start your free trial instantly.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2 border-border bg-background">
                  <Settings className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Set up integrations
                  </h3>
                  <p className="mt-2 text-sm text-balance text-muted-foreground">
                    Connect your favorite tools and services. Seamless
                    integration with hundreds of popular platforms.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2 border-border bg-background">
                  <Zap className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Customize settings
                  </h3>
                  <p className="mt-2 text-sm text-balance text-muted-foreground">
                    Tailor the platform to your needs. Configure preferences and
                    settings with ease.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border-2 border-border bg-background">
                  <Check className="size-5" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-balance">
                    Launch and grow
                  </h3>
                  <p className="mt-2 text-sm text-balance text-muted-foreground">
                    Start using the platform right away. Track your progress and
                    scale as you grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative space-y-4">
            <div className="absolute top-0 bottom-0 left-4 w-px bg-border" />

            <div className="relative flex items-start gap-4">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background sm:border-2">
                <Rocket className="size-4" />
              </div>
              <div className="grow rounded-lg border bg-muted p-4">
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    Step 1
                  </span>
                  <h3 className="mt-1 font-semibold">Sign up</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Create your account quickly using email or social login. Start
                  your free trial instantly.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background sm:border-2">
                <Settings className="size-4" />
              </div>
              <div className="grow rounded-lg border bg-muted p-4">
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    Step 2
                  </span>
                  <h3 className="mt-1 font-semibold">Set up integrations</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Connect your favorite tools and services. Seamless integration
                  with hundreds of popular platforms.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background sm:border-2">
                <Zap className="size-4" />
              </div>
              <div className="grow rounded-lg border bg-muted p-4">
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    Step 3
                  </span>
                  <h3 className="mt-1 font-semibold">Customize settings</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tailor the platform to your needs. Configure preferences and
                  settings with ease.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background sm:border-2">
                <Check className="size-4" />
              </div>
              <div className="grow rounded-lg border bg-muted p-4">
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    Step 4
                  </span>
                  <h3 className="mt-1 font-semibold">Launch and grow</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Start using the platform right away. Track your progress and
                  scale as you grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
