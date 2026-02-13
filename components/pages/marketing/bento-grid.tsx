export default function BentoGrids() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-balance md:text-5xl">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-4 text-base text-balance text-muted-foreground md:text-lg">
            A thoughtfully designed platform that grows with your business.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-4 lg:gap-4">
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-6 text-primary-foreground md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1 lg:p-8">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wider text-primary-foreground/70 uppercase">
                Performance
              </p>
              <h3 className="text-lg font-semibold">Built for speed</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                Every interaction is optimized. Pages load in milliseconds,
                searches return instantly, and bulk operations complete in
                seconds.
              </p>
            </div>
            <div className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground/80 md:text-4xl lg:text-5xl">
              50ms
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border bg-card p-6 md:col-span-1 md:col-start-3 md:row-start-1 lg:p-8">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Uptime
              </p>
              <h3 className="text-lg font-semibold">Always available</h3>
            </div>
            <div className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
              99.99%
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border bg-card p-6 md:col-span-1 md:col-start-4 md:row-start-1 lg:p-8">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Support
              </p>
              <h3 className="text-lg font-semibold">Response time</h3>
            </div>
            <div className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
              &lt;2hrs
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-muted p-6 md:col-span-2 md:col-start-3 md:row-start-2 lg:p-8">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Security
              </p>
              <h3 className="text-lg font-semibold">
                Enterprise-grade protection
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                SOC 2 Type II certified. End-to-end encryption. Granular access
                controls. Your data stays yours.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-muted p-6 md:col-span-2 md:col-start-1 md:row-start-3 lg:p-8">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Integrations
              </p>
              <h3 className="text-lg font-semibold">Connect everything</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Works with your existing stack. 100+ native integrations,
                webhooks, and a full REST API.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border bg-card p-6 md:col-span-2 md:col-start-3 md:row-start-3 lg:p-8">
            <div>
              <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Scale
              </p>
              <h3 className="text-lg font-semibold">
                From startup to enterprise
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Start free, grow without limits. The same platform powers solo
                founders and Fortune 500 teams.
              </p>
            </div>
            <div className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
              10M+ users
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
