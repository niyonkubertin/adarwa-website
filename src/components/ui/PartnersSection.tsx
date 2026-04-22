"use client";

import { motion } from "framer-motion";
import Container, { Section } from "./Container";

interface Partner {
  name: string;
  logo?: string;
}

interface PartnersSectionProps {
  title?: string;
  subtitle?: string;
  partners?: Partner[];
}

const defaultPartners: Partner[] = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
];

export default function PartnersSection({
  title = "Trusted By",
  subtitle = "We are proud to work with outstanding partners and clients",
  partners = defaultPartners,
}: PartnersSectionProps) {
  return (
    <Section background="white" size="lg">
      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold text-[#8B5A2B] uppercase tracking-wider mb-2">
          {title}
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-center p-6 bg-[#F8F4EE] rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-bold text-lg">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <p className="text-sm text-gray-500 font-medium">{partner.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}