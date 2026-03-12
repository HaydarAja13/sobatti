"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Sobatti and how does it work?",
    answer:
      "Sobatti is a next-generation blockchain platform designed for speed, security, and scalability. It provides developers and creators with the tools to build decentralized applications with sub-second finality and enterprise-grade infrastructure.",
  },
  {
    question: "Do I need prior experience to enroll in a course?",
    answer:
      "No! Our courses are designed for all skill levels. Whether you're a complete beginner or an experienced developer looking to expand your skills, our curriculum adapts to your pace with hands-on projects and mentorship.",
  },
  {
    question: "How long does each course take to complete?",
    answer:
      "Each course is self-paced and typically takes 8–12 weeks to complete. You get lifetime access to all materials, so you can learn at your own speed and revisit content whenever you need.",
  },
  {
    question: "Can I switch between pricing plans?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. Downgrades take effect at the start of your next billing period.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied with your experience, contact our support team within 30 days of purchase for a full refund — no questions asked.",
  },
  {
    question: "How can I contact the team for support?",
    answer:
      "You can reach our support team through the Contact section on our website, via email at support@sobatti.io, or through our Discord community where team members are active daily.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#020205] px-6 py-28 sm:py-36"
    >
      {/* Section transition gradients */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-[#050816] to-transparent" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />

      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle diagonal line pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.1) 20px,
            rgba(255,255,255,0.1) 21px
          )`,
        }}
      />

      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/4 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <Badge
              variant="outline"
              className="gap-2 border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm hover:bg-indigo-500/15"
            >
              FAQ
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-zinc-400"
          >
            Everything you need to know about Sobatti. Can&apos;t find what
            you&apos;re looking for? Reach out to our team.
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 backdrop-blur-sm transition-colors duration-200 data-[state=open]:border-indigo-500/15 data-[state=open]:bg-indigo-500/[0.03]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline [&[data-state=open]>svg]:text-indigo-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
