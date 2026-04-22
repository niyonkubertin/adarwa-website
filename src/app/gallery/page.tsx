"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import HeroSection from "@/components/ui/HeroSection";
import { StaggerGrid, StaggerItem, AnimatedCard, FinalCTASection, Section } from "@/components/ui";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { galleryCategories, gallery, images } = siteContent;

  const filteredImages =
    activeCategory === "All"
      ? gallery
      : gallery.filter((img) => img.category === activeCategory);

  return (
    <>
      <HeroSection
        title="Gallery"
        subtitle="Browse visual highlights of our finished products, workshop activity, materials, and craftsmanship process."
        image={images.detail}
      />

      <Section background="cream" size="md">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {galleryCategories.map((category) => (
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
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our gallery captures the quality, effort, and detail behind every product we create. From raw materials to completed installations, each image reflects our commitment to craftsmanship.
        </p>
      </Section>

      <Section background="white" size="lg">
        <StaggerGrid cols={3} gap="md">
          {filteredImages.map((image) => (
            <StaggerItem key={image.id}>
              <AnimatedCard>
                <motion.div
                  className="aspect-square relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Image
                    src={image.image}
                    alt={image.category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center" />
                </motion.div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Section>

      <FinalCTASection
        title="Want to See More of Our Work?"
        subtitle="Get in touch to discuss your project needs."
        button={{ text: "Contact Us", href: "/contact" }}
        background="cream"
      />
    </>
  );
}