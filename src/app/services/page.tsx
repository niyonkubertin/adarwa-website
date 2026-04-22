"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Armchair,
  DoorOpen,
  Briefcase,
  Hammer,
  Wrench,
  PaintBucket,
  Package,
  MessageCircle,
} from "lucide-react";
import { siteContent } from "@/lib/content";
import HeroSection from "@/components/ui/HeroSection";
import { StaggerGrid, StaggerItem, AnimatedCard, FinalCTASection, Section } from "@/components/ui";

const serviceIcons = [
  Armchair,
  DoorOpen,
  Briefcase,
  Hammer,
  Wrench,
  PaintBucket,
  Package,
  MessageCircle,
];

export default function Services() {
  const { servicesFull, images } = siteContent;

  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="We provide a broad range of wood and carpentry services designed for households, offices, institutions, hospitality spaces, and commercial projects."
        image={images.building}
      />

      <Section background="white" size="lg">
        <StaggerGrid cols={2} gap="lg">
          {servicesFull.map((service, index) => {
            const Icon = serviceIcons[index] || Armchair;
            return (
              <StaggerItem key={service.title}>
                <AnimatedCard>
                  <motion.div
                    className="bg-[#F8F4EE] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group"
                    whileHover={{ y: -8 }}
                  >
                    <div className="h-56 relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#8B5A2B] to-[#6d4822] rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-[#1F1F1F]">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                </AnimatedCard>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Section>

      <FinalCTASection
        title="Need a Woodwork Solution Tailored to Your Project?"
        subtitle="Talk to us about your home, office, or commercial needs."
        button={{ text: "Contact Our Team", href: "/contact" }}
        background="cream"
      />
    </>
  );
}