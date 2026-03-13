"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactSection() {
  const [formFocused, setFormFocused] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030308] px-6 py-28 sm:py-36"
    >
      {/* Section transition */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-40 bg-linear-to-b from-[#050816] to-transparent" />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-/20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />


      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <Badge
              variant="outline"
              className="gap-2 border-indigo-500/20 bg-indigo-500/10 px-4 py-4 text-base font-medium text-indigo-300 backdrop-blur-sm hover:bg-indigo-500/15"
            >
              Get in Touch
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Let&apos;s Connect{" "}
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              with our Team
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-zinc-400"
          >
            Ready to start your learning journey? Drop us a message and our team will get
            back to you within 24 hours.
          </motion.p>
        </div>

        {/* Main content grid */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left — Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "hello@sobatti.io",
                href: "mailto:hello@sobatti.io",
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "+1 (555) 123-4567",
                href: "tel:+15551234567",
              },
              {
                icon: MapPin,
                label: "Visit Us",
                value: "Politeknik Negeri Semarang, Indonesia",
                href: "#",
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="group flex items-center gap-5 rounded-2xl border border-white/6 bg-white/200 p-5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/20 hover:bg-indigo-500/400"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600/20 to-violet-600/20 ring-1 ring-indigo-500/10 transition-all duration-300 group-hover:from-indigo-600/30 group-hover:to-violet-600/30">
                  <item.icon size={22} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    {item.label}
                  </p>
                  <p className="text-base font-semibold text-white">
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto text-zinc-600 transition-all group-hover:text-indigo-400"
                />
              </motion.a>
            ))}

            {/* Social proof strip */}
            <div className="mt-2 rounded-2xl border border-white/6 bg-linear-to-br from-indigo-600/600 to-violet-600/600 p-5 backdrop-blur-sm">
              <p className="mb-1 text-base font-semibold text-white">
                Join with all students in our courses!
              </p>
              <p className="text-sm text-zinc-500">
                Be part of the fastest-growing Web3 community. Average response
                time: under 2 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className={`rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 ${
                formFocused
                  ? "border-indigo-500/20 bg-indigo-500/300 shadow-xl shadow-indigo-600/5"
                  : "border-white/6 bg-white/200"
              }`}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-500">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    onFocus={() => setFormFocused(true)}
                    onBlur={() => setFormFocused(false)}
                    className="h-11 w-full rounded-xl border border-white/6 bg-white/200 px-4 text-base text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/30 focus:bg-indigo-500/300"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-500">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    onFocus={() => setFormFocused(true)}
                    onBlur={() => setFormFocused(false)}
                    className="h-11 w-full rounded-xl border border-white/6 bg-white/200 px-4 text-base text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/30 focus:bg-indigo-500/300"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-zinc-500">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  onFocus={() => setFormFocused(true)}
                  onBlur={() => setFormFocused(false)}
                  className="h-11 w-full rounded-xl border border-white/6 bg-white/200 px-4 text-base text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/30 focus:bg-indigo-500/300"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-zinc-500">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  onFocus={() => setFormFocused(true)}
                  onBlur={() => setFormFocused(false)}
                  className="h-11 w-full rounded-xl border border-white/6 bg-white/200 px-4 text-base text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/30 focus:bg-indigo-500/300"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-zinc-500">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project…"
                  onFocus={() => setFormFocused(true)}
                  onBlur={() => setFormFocused(false)}
                  className="w-full resize-none rounded-xl border border-white/6 bg-white/200 px-4 py-3 text-base text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/30 focus:bg-indigo-500/300"
                />
              </div>

              <Button
                type="submit"
                className="mt-6 h-12 w-full border-0 bg-linear-to-r from-indigo-600 to-violet-600 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600/35 hover:brightness-110"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
