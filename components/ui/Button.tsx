import React from "react";

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface ButtonProps {
  variant?: "primary" | "ghost";
  href?: string;
  type?: "button" | "submit";
  full?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  wave?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  type = "button",
  full,
  disabled,
  children,
  style,
  className,
  wave = true,
}: ButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-ghost";
  const combinedClass = [baseClass, className].filter(Boolean).join(" ");
  const fullStyle: React.CSSProperties | undefined = full
    ? { width: "100%", justifyContent: "center", ...style }
    : style;
  const waveAttr = wave ? { "data-wave": "" } : {};

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={combinedClass}
        style={fullStyle}
        {...waveAttr}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
        {variant === "primary" && <ArrowIcon />}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} style={fullStyle} disabled={disabled} {...waveAttr}>
      {children}
      {variant === "primary" && <ArrowIcon />}
    </button>
  );
}
