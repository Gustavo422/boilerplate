import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic plan",
    price: 10,
    description: "Basic features for up to 10 users.",
    popular: false,
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    inheritFrom: "free plan",
  },
  {
    name: "Business plan",
    price: 20,
    description: "Growing teams up to 20 users.",
    popular: true,
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    inheritFrom: "Basic",
  },
  {
    name: "Enterprise plan",
    price: 40,
    description: "Advanced features + unlimited users.",
    popular: false,
    features: [
      "Access to basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    inheritFrom: "Business",
  },
];

export default function PricingSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-12 space-y-4 text-center">
          <h1 className="font-heading text-5xl text-balance text-foreground lg:text-5xl">
            A plan for every need
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Safely trade, earn, & borrow digital assets with top-tier security.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative shadow-none lg:p-0 ${
                plan.popular
                  ? "border-0 bg-linear-to-br from-my-brand-color via-65% to-accent text-white"
                  : "bg-card"
              }`}
            >
              {/* Plan Header */}
              <CardContent className="lg:p-8">
                <div className="mb-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <h3
                      className={`font-medium ${plan.popular ? "text-white" : "text-foreground"}`}
                    >
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-3xl font-bold lg:text-4xl ${plan.popular ? "text-white" : "text-foreground"}`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`text-lg ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}
                    >
                      per month
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "secondary" : "default"}
                  className="mb-8 w-full"
                  size="lg"
                >
                  Get started
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  <div>
                    <p
                      className={`mb-2 text-xs font-semibold tracking-wide uppercase ${
                        plan.popular ? "text-white" : "text-foreground"
                      }`}
                    >
                      Features
                    </p>
                    <p
                      className={`mb-4 text-sm ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}
                    >
                      Everything in{" "}
                      <span className="font-medium">{plan.inheritFrom}</span>{" "}
                      plus....
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check
                          className={`mt-0.5 h-5 w-5 shrink-0 ${
                            plan.popular
                              ? "text-white"
                              : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={`text-sm ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
