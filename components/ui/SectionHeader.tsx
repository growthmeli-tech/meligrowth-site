import SectionLabel from "@/components/ui/SectionLabel";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  centered?: boolean;
  maxWidth?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  centered,
  maxWidth,
  className,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "section-header-center" : "section-header"} ${className ?? ""}`}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="headline" style={maxWidth ? { maxWidth } : undefined}>
        {title}
      </h2>
    </div>
  );
}
