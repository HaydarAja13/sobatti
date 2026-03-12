"use client";

import { motion } from "motion/react";
import {
  Shield,
  Zap,
  Globe,
  Users,
  Layers,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: Shield,
    title: "Military-Grade Security",
    description:
      "End-to-end encryption with multi-signature protocols protecting every transaction on the network.",
  },
  {
    icon: Zap,
    title: "Blazing Performance",
    description:
      "Sub-second finality with 100,000+ TPS throughput — faster than any legacy blockchain.",
  },
  {
    icon: Globe,
    title: "Truly Decentralized",
    description:
      "Powered by 10,000+ validator nodes across 80+ countries. No single point of failure.",
  },
  {
    icon: Users,
    title: "Community Governed",
    description:
      "Every protocol upgrade is voted on by token holders. Your voice shapes the future.",
  },
  {
    icon: Layers,
    title: "Multi-Chain Ready",
    description:
      "Seamless interoperability with Ethereum, Solana, and all major L1/L2 ecosystems.",
  },
  {
    icon: Lock,
    title: "Zero-Knowledge Privacy",
    description:
      "Optional privacy layer with ZK-proofs — verify without revealing sensitive data.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#060a1e] px-6 py-28 sm:py-36"
    >
      {/* Section transition gradients */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-[#050816] to-transparent" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-indigo-600/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] translate-y-1/3 -translate-x-1/3 rounded-full bg-blue-600/6 blur-[120px]" />
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
              About Sobatti
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Infrastructure for the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Next Era
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-blue-200/50"
          >
            We&apos;re building the foundational layer that empowers developers
            to create unstoppable applications — with the speed, security, and
            scale the world demands.
          </motion.p>
        </div>

        <Separator className="mx-auto my-16 max-w-xs bg-white/[0.06]" />

        {/* Feature cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/15 hover:bg-blue-500/[0.03]"
            >
              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 ring-1 ring-blue-500/10 transition-all duration-300 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 group-hover:ring-blue-500/20">
                <feature.icon
                  size={20}
                  className="text-blue-400 transition-colors group-hover:text-blue-300"
                />
              </div>

              {/* Content */}
              <h3 className="mb-2.5 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-blue-200/40">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/[0.06] bg-gradient-to-r from-blue-600/[0.06] to-indigo-600/[0.06] p-8 backdrop-blur-sm sm:flex-row sm:p-10"
        >
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Ready to build on Sobatti?
            </h3>
            <p className="text-sm text-blue-200/50">
              Join thousands of developers shipping the next generation of dApps.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <Button
              asChild
              className="h-11 border-0 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:brightness-110"
            >
              <a href="#contact" className="gap-2">
                Start Building
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-white/[0.08] bg-white/[0.03] px-6 font-semibold text-blue-200/70 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
            >
              <a href="#faq">Read Docs</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
