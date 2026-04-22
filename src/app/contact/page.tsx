"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { siteContent } from "@/lib/content";
import HeroSection from "@/components/ui/HeroSection";
import { Section } from "@/components/ui";

export default function Contact() {
  const { contact, brand, images } = siteContent;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle={`We would love to hear from you. Reach out to ${brand.name} for inquiries, partnerships, and project discussions.`}
        image={images.building}
      />

      <Section background="white" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-serif text-[#1F1F1F] mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6 mb-10">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5A2B] to-[#6d4822] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#1F1F1F]">Address</p>
                  <p className="text-gray-600">{contact.address}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5A2B] to-[#6d4822] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#1F1F1F]">Phone</p>
                  <p className="text-gray-600">{contact.phone}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5A2B] to-[#6d4822] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#1F1F1F]">Email</p>
                  <p className="text-gray-600">{contact.email}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5A2B] to-[#6d4822] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#1F1F1F]">Hours</p>
                  <p className="text-gray-600">{contact.hours}</p>
                  <p className="text-gray-600">{contact.hoursSat}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="bg-[#F8F4EE] p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-bold text-[#1F1F1F] mb-3">
                Prefer WhatsApp?
              </h3>
              <p className="text-gray-600 mb-4">
                Chat with us directly for quicker communication.
              </p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#F8F4EE] p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold font-serif text-[#1F1F1F] mb-6">
                Send a Message
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="service">Service Request</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8B5A2B] focus:ring-2 focus:ring-[#8B5A2B]/20 outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8B5A2B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#6d4822] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </Section>

      <Section background="cream" size="md">
        <motion.div
          className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-2" />
            <p>Google Maps placeholder</p>
          </div>
        </motion.div>
      </Section>
    </>
  );
}