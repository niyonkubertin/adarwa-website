"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Hammer,
  PenTool,
  MapPin,
  CheckCircle,
  Heart,
  Globe,
  ArrowRight,
} from "lucide-react";
import { siteContent } from "@/lib/content";
import HeroSection from "@/components/ui/HeroSection";
import { StaggerGrid, StaggerItem, AnimatedCard, FinalCTASection, Section } from "@/components/ui";

const reasonIcons = [
  Hammer,
  Award,
  PenTool,
  MapPin,
  CheckCircle,
  Heart,
  Globe,
  ArrowRight,
];

export default function WhyChooseUs() {
  const { whyChooseUs, stats, images } = siteContent;

  return (
    <>
      <HeroSection
        title="Why Choose ADARWA"
        subtitle="Customers choose ADARWA because we combine craftsmanship, practical experience, and community-rooted professionalism to deliver quality wood solutions."
        image={images.workshop}
      />

      <Section background="white" size="lg">
        <StaggerGrid cols={3} gap="lg">
          {whyChooseUs.map((reason, index) => {
            const Icon = reasonIcons[index] || Award;
            return (
              <StaggerItem key={reason.title}>
                <AnimatedCard>
                  <motion.div
                    className="bg-[#F8F4EE] p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 h-full group"
                    whileHover={{ y: -8 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8B5A2B] to-[#6d4822] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-[#1F1F1F] mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </motion.div>
                </AnimatedCard>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Section>

      <Section background="gradient" size="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: stats.artisans, label: "Skilled Artisans" },
            { value: stats.experience, label: "Years Experience" },
            { value: stats.projects, label: "Projects Completed" },
            { value: stats.satisfaction, label: "Customer Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#D4A25A] mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <FinalCTASection
        title="Work With a Team That Values Quality and Trust"
        subtitle="Ready to start your project? Let's build something exceptional together."
        button={{ text: "Get in Touch", href: "/contact" }}
        background="cream"
      />
    </>
  );
}