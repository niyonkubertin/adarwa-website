interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {label && (
        <span className="inline-block text-[#8B5A2B] font-semibold text-sm tracking-wider uppercase mb-2">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1F1F1F] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}