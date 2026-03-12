"use client";

import { motion } from "motion/react";
import { Shield, Zap, Globe, Users, Layers, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: Shield,
    title: "Solutif",
    description: "(Solution-oriented): Providing effective technical solutions",
  },
  {
    icon: Zap,
    title: "Optimis",
    description:
      "(Optimistic): Maintaining a positive approach to technological challenges",
  },
  {
    icon: Globe,
    title: "Bersahabat",
    description: "(Friendly): Fostering an approachable learning environment",
  },
  {
    icon: Users,
    title: "Adaptif",
    description:
      "(Adaptive): Staying current with rapid technological advancements",
  },
  {
    icon: Layers,
    title: "Terampil",
    description: "(Skilled): Delivering high-quality and competent results",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#060a1e] px-6 py-28 sm:py-36"
    >
      {/* Section transition gradients */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-40 bg-linear-to-b from-[#050816] to-transparent" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 bg-linear-to-t from-[#050816] to-transparent" />

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-150 w-150 -translate-y-1/3 translate-x-1/3 rounded-full bg-indigo-600/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-125 w-125 translate-y-1/3 -translate-x-1/3 rounded-full bg-blue-600/6 blur-[120px]" />
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
              className="gap-2 border-blue-500/20 bg-blue-500/10 px-4 py-4 text-md font-medium text-blue-300 backdrop-blur-sm hover:bg-blue-500/15"
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
            Our Core{" "}
            <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Values
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-blue-200/50"
          >
            At the core of Sobat TI are five foundational principles designed to
            guide our approach to addressing complex technological challenges.
            By adhering to these values, we ensure the consistent delivery of
            high-quality services
          </motion.p>
        </div>

        <Separator className="mx-auto my-16 max-w-xs bg-white/6" />

        {/* Feature cards — 3 + 2 centered */}
        <div className="flex flex-col items-center gap-4 ">
          {/* Top row: 3 */}
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 3).map((feature, i) => (
              <AboutCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
          {/* Bottom row: 2 centered */}
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:max-w-[66.666%]">
            {features.slice(3).map((feature, i) => (
              <AboutCard key={feature.title} feature={feature} index={i + 3} />
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/6 bg-linear-to-r from-blue-600/600 to-indigo-600/600 p-8 backdrop-blur-sm sm:flex-row sm:p-10"
        >
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Ready to learn with SobatTi?
            </h3>
            <p className="text-sm text-blue-200/50">
              Ready to start your project or need a tech tutor? Direct message
              us for more information
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Button
              asChild
              className="h-11 border-0 bg-linear-to-r from-blue-600 to-indigo-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:brightness-110"
            >
              <a href="#contact" className="gap-2">
                Contact Us
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 bg-white/8  px-6 font-semibold text-blue-200/70 hover:border-white/15 hover:text-white"
            >
              <a href="#faq">Read FAQ</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-white/6 bg-white/2 p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/15 hover:bg-blue-500/3"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-600/20 to-indigo-600/20 ring-1 ring-blue-500/10 transition-all duration-300 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 group-hover:ring-blue-500/20">
        <feature.icon
          size={20}
          className="text-blue-400 transition-colors group-hover:text-blue-300"
        />
      </div>
      <h3 className="mb-2.5 text-xl font-semibold text-white">
        {feature.title}
      </h3>
      <p className="text-base leading-relaxed text-blue-200/40">
        {feature.description}
      </p>
    </motion.div>
  );
}
