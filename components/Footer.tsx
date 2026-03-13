"use client";

import { motion } from "motion/react";
import { Rocket, Phone, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const socials = [
  { icon: Phone, href: "#", label: "Phone" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020205] px-6 pt-20 pb-8">
      {/* Top gradient border effect */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-100 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/4 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Top area — brand + newsletter */}
        <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-sm"
          >
            <a href="#home" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
                <Rocket size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                SOBAT.TI
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Helping skill development in Information Technology. We provide
              specialized service and mentorship for students and university
              students
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-lg border border-white/6 bg-white/200 text-zinc-500 transition-all duration-200 hover:border-indigo-500/20 hover:bg-indigo-500/10 hover:text-white"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md"
          >
            <h3 className="mb-2 text-base font-semibold text-white">
              Stay with us
            </h3>
            <p className="mb-4 text-sm text-zinc-500">
              Get the latest discounts, news and product announcements delivered
              straight to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 w-full rounded-lg border border-white/6 bg-white/200 px-4 text-base text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/30"
              />
              <Button
                type="submit"
                className="h-10 shrink-0 border-0 bg-linear-to-r from-indigo-600 to-violet-600 px-4 font-semibold text-white shadow-md shadow-indigo-600/20 hover:brightness-110"
              >
                <ArrowRight size={16} />
              </Button>
            </form>
          </motion.div>
        </div>

        <Separator className="mb-10 bg-white/400" />

        <Separator className="mb-6 bg-white/400" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Sobatti. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
