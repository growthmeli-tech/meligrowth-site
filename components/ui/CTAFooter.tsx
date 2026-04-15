import Button from "@/components/ui/Button";

interface CTAFooterProps {
  href?: string;
  buttonText?: string;
  disclaimer?: string;
}

export default function CTAFooter({
  href = "#contacto",
  buttonText = "Pedí tu diagnóstico gratis",
  disclaimer,
}: CTAFooterProps) {
  return (
    <div className="section-cta">
      <Button href={href}>{buttonText}</Button>
      {disclaimer && (
        <span className="body-regular" style={{ color: "var(--color-muted-light)" }}>
          {disclaimer}
        </span>
      )}
    </div>
  );
}
