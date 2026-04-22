"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Armchair,
  DoorOpen,
  Briefcase,
  Hammer,
  Wrench,
  PaintBucket,
  ArrowRight,
} from "lucide-react";
import {
  AnimatedSection,
  AnimatedCard,
  FinalCTASection,
  HeroSection,
  StaggerGrid,
  StaggerItem,
  Section,
  PartnersSection,
} from "@/components/ui";
import { siteContent } from "@/lib/content";

const serviceIcons = [Armchair, DoorOpen, Briefcase, Hammer, Wrench, PaintBucket];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const { hero, services, portfolio, about, stats, images } = siteContent;

  return (
    <>
      <HeroSection
        title={hero.headline}
        subtitle={hero.subheadline}
        eyebrow={hero.eyebrow}
        ctaPrimary={{ text: "Our Services", href: "/services" }}
        ctaSecondary={{ text: "View Our Work", href: "/portfolio" }}
        image={images.workshop}
      />

      <PartnersSection
        title="Trusted By"
        subtitle="We are proud to work with outstanding partners and clients across Rwanda"
      />

      <Section background="white" size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <span className="inline-block text-[#8B5A2B] font-semibold text-sm tracking-wider uppercase mb-3">
                ABOUT ADARWA
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1F1F1F] mb-6">
                Building More Than Furniture
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {about.story}
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[#8B5A2B] font-semibold text-lg hover:gap-4 transition-all"
              >
                Learn More About Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
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

      <Section background="cream" size="xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-[#8B5A2B] font-semibold text-sm tracking-wider uppercase mb-3">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1F1F1F] mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer a wide range of carpentry and wood services crafted with precision, passion, and attention to detail.
            </p>
          </div>
        </AnimatedSection>

        <StaggerGrid cols={3} gap="lg">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Armchair;
            return (
              <StaggerItem key={service.title}>
                <AnimatedCard>
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full group overflow-hidden"
                    whileHover={{ y: -8 }}
                  >
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#8B5A2B] to-[#6d4822] rounded-xl flex items-center justify-center mb-4 -mt-14 relative z-10 border-4 border-white">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold font-serif text-[#1F1F1F] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                </AnimatedCard>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-[#8B5A2B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#6d4822] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </Section>

      <Section background="white" size="xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-[#8B5A2B] font-semibold text-sm tracking-wider uppercase mb-3">
              OUR PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1F1F1F] mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore some of our completed work that reflects our dedication to quality, beauty, and durability.
            </p>
          </div>
        </AnimatedSection>

        <StaggerGrid cols={3} gap="lg">
          {portfolio.slice(0, 6).map((project) => (
            <StaggerItem key={project.title}>
              <AnimatedCard>
                <motion.div
                  className="bg-[#F8F4EE] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ y: -8 }}
                >
                  <div className="h-64 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white font-semibold border-2 border-white px-4 py-2 rounded-lg">
                        View Project
                      </span>
                    </div>
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

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 bg-[#8B5A2B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#6d4822] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </Section>

      <Section background="gradient" size="xl">
        <div className="text-center mb-12">
          <span className="inline-block text-[#D4A25A] font-semibold text-sm tracking-wider uppercase mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Why Customers Choose ADARWA
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: stats.artisans, label: "Skilled Artisans" },
            { value: stats.experience, label: "Years Experience" },
            { value: stats.projects, label: "Projects Completed" },
            { value: stats.satisfaction, label: "Customer Satisfaction" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#D4A25A] mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <FinalCTASection
        title="Have a Project in Mind?"
        subtitle="Let's bring your ideas to life with quality wood craftsmanship."
        button={{ text: "Contact Us Today", href: "/contact" }}
        background="cream"
      />
    </>
  );
}