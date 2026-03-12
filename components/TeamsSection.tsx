"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const team = [
  {
    name: "Arjun Patel",
    role: "Co-Founder & CEO",
    photo: "/team/ceo.png",
    bio: "Former fintech lead at Goldman Sachs. Passionate about making decentralized finance accessible to everyone.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Mei Lin Chen",
    role: "Chief Technology Officer",
    photo: "/team/cto.png",
    bio: "Ex-Google engineer with 8+ years in distributed systems. Architect of the Sobatti consensus protocol.",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Daniel Hartmann",
    role: "Lead Product Designer",
    photo: "/team/designer.png",
    bio: "Award-winning designer formerly at Figma. Crafting seamless Web3 experiences that feel native.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Marketing",
    photo: "/team/marketing.png",
    bio: "Growth strategist who scaled three crypto projects to 100K+ users. Community-first approach.",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Lucas Rivera",
    role: "Senior Blockchain Engineer",
    photo: "/team/engineer.png",
    bio: "Core contributor to Ethereum and Solana ecosystems. Smart contract security researcher.",
    socials: { twitter: "#", github: "#" },
  },
];

export default function TeamsSection() {
  return (
    <section
      id="teams"
      className="relative overflow-hidden bg-[#070b20] px-6 py-28 sm:py-36"
    >
      {/* Section transition gradients */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-[#050816] to-transparent" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-indigo-600/6 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-blue-600/5 blur-[120px]" />
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
              Our Team
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Meet the{" "}
            <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Builders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-blue-200/50"
          >
            A world-class team of engineers, designers, and strategists united
            by a shared vision of a decentralized future.
          </motion.p>
        </div>

        <Separator className="mx-auto my-16 max-w-xs bg-white/[6]" />

        {/* Team grid — top row 3, bottom row 2 centered */}
        <div className="flex flex-col items-center gap-5">
          {/* Top row */}
          <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
          {/* Bottom row — centered */}
          <div className="grid w-full gap-5 sm:grid-cols-2 lg:max-w-[66.666%]">
            {team.slice(3).map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/[2] backdrop-blur-sm transition-all duration-300 hover:border-blue-500/15 hover:bg-blue-500/[3]"
    >
      {/* Photo */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay on photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

        {/* Social icons — appear on hover */}
        <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white/70 backdrop-blur-sm transition-colors hover:bg-blue-600/40 hover:text-white"
            >
              <Twitter size={14} />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white/70 backdrop-blur-sm transition-colors hover:bg-blue-600/40 hover:text-white"
            >
              <Linkedin size={14} />
            </a>
          )}
          {member.socials.github && (
            <a
              href={member.socials.github}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white/70 backdrop-blur-sm transition-colors hover:bg-blue-600/40 hover:text-white"
            >
              <Github size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-6 pt-3">
        <h3 className="text-lg font-bold text-white">{member.name}</h3>
        <p className="mt-1 text-sm font-medium bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          {member.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-blue-200/40">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}
