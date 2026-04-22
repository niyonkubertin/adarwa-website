"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  background?: "primary" | "dark";
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  background = "primary",
}: CTASectionProps) {
  return (
    <section className={`py-20 ${background === "primary" ? "bg-[#8B5A2B]" : "bg-[#1F1F1F]"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 md:p-16 text-center border border-white/10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-serif text-white mb-4"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-200 text-lg mb-8"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href={buttonHref}
              className="inline-flex items-center gap-2 bg-[#D4A25A] text-[#1F1F1F] px-8 py-4 rounded font-semibold hover:bg-[#c4924a] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {buttonText}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}