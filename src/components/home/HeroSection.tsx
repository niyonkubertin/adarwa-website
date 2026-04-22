"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export default function HeroSection({
  eyebrow,
  headline,
  subheadline,
}: HeroSectionProps) {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5A2B] via-[#6d4822] to-[#8B5A2B]">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A25A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <motion.div
        style={{ y: imageY, opacity }}
        className="absolute right-0 top-0 w-1/2 h-full hidden lg:block"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent z-10" />
        <div className="w-full h-full bg-[#6d4822] flex items-center justify-center">
          <div className="text-center p-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-64 h-64 mx-auto rounded-full border-4 border-[#D4A25A]/30 flex items-center justify-center"
            >
              <div className="text-center text-white/60">
                <div className="text-6xl font-serif font-bold text-[#D4A25A]">A</div>
                <div className="text-sm tracking-widest">ADARWA</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#D4A25A] font-semibold text-sm tracking-[0.3em] uppercase mb-6"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
          >
            {subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="group bg-[#D4A25A] text-[#1F1F1F] px-8 py-4 rounded font-semibold hover:bg-[#c4924a] transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              Our Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="/portfolio"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ height: "120px" }}
        >
          <path
            d="M0,120 L0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 Z"
            fill="#F8F4EE"
          />
        </svg>
      </div>
    </section>
  );
}