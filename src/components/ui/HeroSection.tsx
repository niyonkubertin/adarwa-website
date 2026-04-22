"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  image?: string;
  background?: "primary" | "secondary" | "dark";
  height?: "full" | "medium";
  align?: "left" | "center";
}

const backgroundStyles = {
  primary: "from-[#8B5A2B] to-[#6d4822]",
  secondary: "from-[#1F1F1F] to-[#2d2d2d]",
  dark: "from-[#1F1F1F] to-[#8B5A2B]",
};

const heightStyles = {
  full: "min-h-[85vh]",
  medium: "min-h-[50vh]",
};

export default function HeroSection({
  title,
  subtitle,
  eyebrow,
  ctaPrimary,
  ctaSecondary,
  image,
  background = "primary",
  height = "full",
  align = "left",
}: HeroSectionProps) {
  return (
    <section className={`relative flex items-center overflow-hidden bg-gradient-to-r ${backgroundStyles[background]} ${heightStyles[height]}`}>
      {/* Full-width Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      )}

      {/* Background Pattern (when no image) */}
      {!image && (
        <div className="absolute inset-0 opacity-10 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A25A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 w-full">
        <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}>
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#D4A25A] font-semibold text-sm tracking-[0.3em] uppercase mb-6"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="group bg-[#D4A25A] text-[#1F1F1F] px-8 py-4 rounded-lg font-semibold hover:bg-[#c4924a] transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                >
                  {ctaPrimary.text}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  {ctaSecondary.text}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: "100px" }}>
          <path d="M0,120 L0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}