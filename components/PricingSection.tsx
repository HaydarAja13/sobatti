"use client";

import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started.",
    price: "$19",
    period: "/month",
    featured: false,
    features: [
      "Feature one placeholder",
      "Feature two placeholder",
      "Feature three placeholder",
      "Feature four placeholder",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "Best for growing teams and professionals.",
    price: "$49",
    period: "/month",
    featured: true,
    features: [
      "Everything in Starter",
      "Feature five placeholder",
      "Feature six placeholder",
      "Feature seven placeholder",
      "Feature eight placeholder",
      "Feature nine placeholder",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For organizations that need more power.",
    price: "$99",
    period: "/month",
    featured: false,
    features: [
      "Everything in Professional",
      "Feature ten placeholder",
      "Feature eleven placeholder",
      "Feature twelve placeholder",
      "Feature thirteen placeholder",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#060a1e] px-6 py-28 sm:py-36"
    >
      {/* Section transition gradients */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-[#050816] to-transparent" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-blue-600/6 blur-[140px]" />
        <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] translate-x-1/4 rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <Badge
              variant="outline"
              className="gap-2 border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm hover:bg-blue-500/15"
            >
              Pricing
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Simple,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-blue-200/50"
          >
            Choose the plan that fits your needs. No hidden fees, cancel
            anytime.
          </motion.p>
        </div>

        <Separator className="mx-auto my-16 max-w-xs bg-white/[0.06]" />

        {/* Pricing cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 ${
                plan.featured
                  ? "border-blue-500/25 bg-blue-500/[0.06] shadow-xl shadow-blue-600/10 lg:scale-105"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-blue-500/15 hover:bg-blue-500/[0.03]"
              }`}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="gap-1.5 border-0 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-600/25">
                    <Sparkles size={12} />
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Plan name & description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-blue-200/40">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-white">
                  {plan.price}
                </span>
                <span className="text-base font-medium text-blue-200/40">
                  {plan.period}
                </span>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className={`mb-8 h-12 w-full text-base font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:brightness-110"
                    : "border-white/[0.08] bg-white/[0.04] text-blue-200/70 hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-white"
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                <a href="#contact">{plan.cta}</a>
              </Button>

              {/* Divider */}
              <Separator className="mb-6 bg-white/[0.06]" />

              {/* Features list */}
              <ul className="flex flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-blue-200/50"
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        plan.featured
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-white/[0.06] text-blue-200/40"
                      }`}
                    >
                      <Check size={12} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
