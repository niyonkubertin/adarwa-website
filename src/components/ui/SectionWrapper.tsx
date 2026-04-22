"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: "cream" | "white" | "primary" | "dark";
}

export default function SectionWrapper({
  children,
  className = "",
  background = "cream",
}: SectionWrapperProps) {
  const bgStyles = {
    cream: "bg-[#F8F4EE]",
    white: "bg-white",
    primary: "bg-[#8B5A2B]",
    dark: "bg-[#1F1F1F]",
  };

  return (
    <section className={`relative ${bgStyles[background]} ${className}`}>
      {children}
    </section>
  );
}