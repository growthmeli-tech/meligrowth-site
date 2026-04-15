"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const handleOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button");
      setHovering(!!el);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div style={{
        width: hovering ? "21px" : "42px",
        height: hovering ? "21px" : "42px",
        borderRadius: "50%",
        background: hovering ? "var(--color-accent)" : "transparent",
        border: hovering ? "none" : "2px solid var(--color-accent)",
        boxShadow: hovering
          ? "0 0 12px rgba(255,214,0,0.6)"
          : "0 0 18px rgba(255,214,0,0.5), inset 0 0 8px rgba(255,214,0,0.1)",
        transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
      }} />
    </div>
  );
}
