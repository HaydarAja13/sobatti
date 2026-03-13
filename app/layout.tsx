import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sobatti — The Future of Web3",
  description: "Empowering creators, developers, and communities with next-generation blockchain infrastructure.",
};

import { CursorBlobProvider } from "@/context/CursorBlobContext";
import CursorBlob from "@/components/CursorBlob";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorBlobProvider>
          <CursorBlob />
          {children}
        </CursorBlobProvider>
      </body>
    </html>
  );
}
