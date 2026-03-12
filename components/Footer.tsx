"use client";

import { motion } from "motion/react";
import { Rocket, Github, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#" },
    { name: "Changelog", href: "#" },
    { name: "Documentation", href: "#" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Team", href: "#teams" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press Kit", href: "#" },
  ],
  Resources: [
    { name: "FAQ", href: "#faq" },
    { name: "Community", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status Page", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020205] px-6 pt-20 pb-8">
      {/* Top gradient border effect */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/4 blur-[120px]" />
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
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
                <Rocket size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Sobatti
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Empowering the next generation of creators and developers with
              cutting-edge blockchain infrastructure and education.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-500 transition-all duration-200 hover:border-indigo-500/20 hover:bg-indigo-500/10 hover:text-white"
                >
                  <social.icon size={15} />
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
            <h3 className="mb-2 text-sm font-semibold text-white">
              Stay in the loop
            </h3>
            <p className="mb-4 text-sm text-zinc-500">
              Get the latest updates, news and product announcements delivered
              straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/30"
              />
              <Button
                type="submit"
                className="h-10 flex-shrink-0 border-0 bg-gradient-to-r from-indigo-600 to-violet-600 px-4 font-semibold text-white shadow-md shadow-indigo-600/20 hover:brightness-110"
              >
                <ArrowRight size={16} />
              </Button>
            </form>
          </motion.div>
        </div>

        <Separator className="mb-10 bg-white/[0.04]" />

        {/* Link columns */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors duration-200 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <Separator className="mb-6 bg-white/[0.04]" />

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
