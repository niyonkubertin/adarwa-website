"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import { siteContent } from "@/lib/content";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = siteContent.navigation;
  const contact = siteContent.contact;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="bg-[#8B5A2B] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 hover:text-[#D4A25A] transition-colors"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 hover:text-[#D4A25A] transition-colors"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">{contact.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-2">
              <MapPin size={14} />
              <span>{contact.address}</span>
            </span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-[#D4A25A] transition-colors" aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href="#" className="hover:text-[#D4A25A] transition-colors" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="#" className="hover:text-[#D4A25A] transition-colors" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold font-serif text-[#8B5A2B]">
              ADARWA
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, -1).map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-[#8B5A2B]"
                      : "text-gray-700 hover:text-[#8B5A2B]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#D4A25A] transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={navItems[navItems.length - 1].href}
              className="bg-[#8B5A2B] text-white px-6 py-3 rounded font-semibold hover:bg-[#6d4822] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-xl"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block transition-colors font-medium py-2 ${
                    isActive(item.href)
                      ? "text-[#8B5A2B]"
                      : "text-gray-700 hover:text-[#8B5A2B]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block bg-[#8B5A2B] text-white px-6 py-3 rounded text-center font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}