"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import HeroSection from "@/components/ui/HeroSection";
import { StaggerGrid, StaggerItem, AnimatedCard, FinalCTASection, Section } from "@/components/ui";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { portfolio, portfolioCategories, images } = siteContent;

  const categories = ["All", ...portfolioCategories];

  const filteredProjects =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === activeCategory);

  return (
    <>
      <HeroSection
        title="Our Portfolio"
        subtitle="Our portfolio showcases selected work completed by ADARWA artisans across residential, office, and project-based environments."
        image={images.furniture}
      />

      <Section background="cream" size="md">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#8B5A2B] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-[#8B5A2B] hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </Section>

      <Section background="white" size="lg">
        <StaggerGrid cols={3} gap="lg">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.title}>
              <AnimatedCard>
                <motion.div
                  className="bg-[#F8F4EE] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  <div className="h-72 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center" />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-[#8B5A2B] font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-[#1F1F1F] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </motion.div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Section>

      <FinalCTASection
        title="Interested in Similar Work?"
        subtitle="Get in touch with us to discuss your project needs."
        button={{ text: "Contact Us", href: "/contact" }}
        background="cream"
      />
    </>
  );
}