"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./ui/SocialIcons";
import { siteContent } from "@/lib/content";

export default function Footer() {
  const { brand, footer, contact } = siteContent;

  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-serif mb-4 text-[#D4A25A]">
              {brand.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {footer.brandSummary}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#D4A25A] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#D4A25A] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#D4A25A] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A25A]">Quick Links</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#D4A25A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A25A]">Services</h4>
            <ul className="space-y-2">
              {footer.services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A25A]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="text-[#D4A25A]" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-[#D4A25A]" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="text-[#D4A25A] mt-0.5" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Clock size={16} className="text-[#D4A25A]" />
                <span>Mon–Fri: {contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm">
            © 2026 {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}