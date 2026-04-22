"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButton {
  text: string;
  href: string;
}

interface FinalCTASectionProps {
  label?: string;
  title: string;
  subtitle?: string;
  button?: CTAButton;
  background?: "cream" | "white";
}

export default function FinalCTASection({
  label,
  title,
  subtitle,
  button,
  background = "cream",
}: FinalCTASectionProps) {
  const bgClasses = {
    cream: "bg-[#F8F4EE]",
    white: "bg-white",
  };

  return (
    <section className={`py-16 md:py-24 ${bgClasses[background]}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Floating CTA Card */}
          <div className="relative bg-gradient-to-br from-[#5B3A1A] via-[#6d4822] to-[#8B5A2B] rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden">
            {/* Subtle overlay texture */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A25A' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[2rem] md:rounded-[2.5rem]" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {label && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-block text-[#D4A25A] font-semibold text-sm tracking-widest uppercase mb-4"
                >
                  {label}
                </motion.span>
              )}

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-5 leading-tight"
              >
                {title}
              </motion.h2>

              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
                >
                  {subtitle}
                </motion.p>
              )}

              {button && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  <Link
                    href={button.href}
                    className="group inline-flex items-center gap-3 bg-[#D4A25A] hover:bg-[#c4924a] text-[#1F1F1F] px-8 py-4 md:px-10 md:py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    {button.text}
                    <ArrowRight 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                      size={22} 
                    />
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Decorative accent line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#D4A25A]/40 rounded-full mb-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}