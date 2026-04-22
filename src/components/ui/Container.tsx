"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  background?: "cream" | "white" | "primary" | "dark" | "gradient";
}

export function Section({ children, className = "", size = "lg", background = "white" }: SectionProps) {
  const sizeClasses = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-24",
    xl: "py-24 md:py-32",
  };

  const bgClasses = {
    cream: "bg-[#F8F4EE]",
    white: "bg-white",
    primary: "bg-[#8B5A2B]",
    dark: "bg-[#1F1F1F]",
    gradient: "bg-gradient-to-r from-[#8B5A2B] to-[#6d4822]",
  };

  return (
    <section className={`${sizeClasses[size]} ${bgClasses[background]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}