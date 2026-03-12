"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Teams", href: "#teams" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/300 px-5 py-3 shadow-xl shadow-black/20 backdrop-blur-2xl">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
              <Rocket size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              SOBAT.TI
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Button
                  variant="ghost"
                  asChild
                  className="text-blue-200/60 hover:text-white hover:bg-white/600 text-base"
                >
                  <a href={link.href}>{link.name}</a>
                </Button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:brightness-110 border-0"
            >
              <a href="#contact" className="gap-2">
                Teach Me!
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </Button>
          </div>

          {/* Mobile Sheet */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-200/60 hover:text-white hover:bg-white/600"
                >
                  <Menu size={22} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 border-white/6 bg-[#070a1f]/95 backdrop-blur-2xl"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-1 pt-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Button
                        variant="ghost"
                        asChild
                        className="justify-start text-blue-200/70 hover:text-white hover:bg-white/600"
                      >
                        <a href={link.href}>{link.name}</a>
                      </Button>
                    </SheetClose>
                  ))}
                  <Separator className="my-3 bg-white/600" />
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="bg-linear-to-r from-blue-600 to-indigo-600 text-white border-0"
                    >
                      <a href="#contact">Get Started</a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
