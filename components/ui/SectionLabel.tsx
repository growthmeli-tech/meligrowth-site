interface SectionLabelProps {
  variant?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}

export default function SectionLabel({
  variant = "light",
  className,
  children,
}: SectionLabelProps) {
  const base = variant === "light" ? "eyebrow-light" : "eyebrow-dark";
  const combined = [base, className].filter(Boolean).join(" ");
  return <div className={combined}>{children}</div>;
}
