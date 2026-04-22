"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Award, Heart, Users, CheckCircle } from "lucide-react";
import { siteContent } from "@/lib/content";
import { AnimatedSection, AnimatedCard, FinalCTASection, HeroSection, StaggerGrid, StaggerItem, Section } from "@/components/ui";

const valueIcons = [Award, Heart, Users, CheckCircle, Target, Heart];

export default function About() {
  const { about, brand, images } = siteContent;

  return (
    <>
      <HeroSection
        title={`About ${brand.name}`}
        subtitle={`${brand.name} is a collective of skilled artisans and woodworkers based in Gisozi, Kigali. We are committed to producing high-quality wood products and delivering craftsmanship that serves homes, businesses, and institutions with pride.`}
        image={images.workshop}
      />

      <Section background="white" size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <span className="inline-block text-[#8B5A2B] font-semibold text-sm tracking-wider uppercase mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1F1F1F] mb-6">
                A Legacy of Craftsmanship
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{about.story}</p>
            </div>
          </AnimatedSection>
          <motion.div
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={images.workshop}
              alt="ADARWA Workshop"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </Section>

      <Section background="cream" size="lg">
        <StaggerGrid cols={2} gap="lg">
          <StaggerItem>
            <AnimatedCard>
              <motion.div
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full group"
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B5A2B] to-[#6d4822] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#1F1F1F] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-lg">{about.mission}</p>
              </motion.div>
            </AnimatedCard>
          </StaggerItem>
          <StaggerItem>
            <AnimatedCard>
              <motion.div
                className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full group"
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4A25A] to-[#c4924a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#1F1F1F] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-lg">{about.vision}</p>
              </motion.div>
            </AnimatedCard>
          </StaggerItem>
        </StaggerGrid>
      </Section>

      <Section background="white" size="lg">
        <div className="text-center mb-12">
          <span className="inline-block text-[#8B5A2B] font-semibold text-sm tracking-wider uppercase mb-3">
            What We Stand For
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1F1F1F]">
            Our Values
          </h2>
        </div>

        <StaggerGrid cols={3} gap="lg">
          {about.values.map((value, index) => {
            const Icon = valueIcons[index] || Award;
            return (
              <StaggerItem key={value.title}>
                <AnimatedCard>
                  <motion.div
                    className="bg-[#F8F4EE] p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 h-full group"
                    whileHover={{ y: -8 }}
                  >
                    <div className="w-14 h-14 bg-[#D4A25A] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-[#1F1F1F] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                </AnimatedCard>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Section>

      <Section background="cream" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[#8B5A2B] font-semibold text-sm tracking-wider uppercase mb-4">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1F1F1F] mb-6">
              Creating Value for Our Community
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">{about.impact}</p>
          </div>
          <motion.div
            className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={images.building}
              alt="ADARWA Building"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Section>

      <FinalCTASection
        title="Let's Build Something Valuable Together"
        button={{ text: "Contact Us", href: "/contact" }}
        background="cream"
      />
    </>
  );
}