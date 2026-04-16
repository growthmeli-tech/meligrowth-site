"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeader from "@/components/ui/SectionHeader";
import { problems } from "@/lib/data";

const problemIcons = [
  (
    <svg key="margin" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 16v-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 16V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M16 16v-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M19 6l-4.5 4.5-2.5-2.5-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="operation" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M19.2 13.4c.1-.45.1-.9.1-1.4s0-.95-.1-1.4l2-1.5-2-3.5-2.4 1a8.1 8.1 0 0 0-2.4-1.4L14 2.7h-4l-.4 2.5a8.1 8.1 0 0 0-2.4 1.4l-2.4-1-2 3.5 2 1.5c-.1.45-.1.9-.1 1.4s0 .95.1 1.4l-2 1.5 2 3.5 2.4-1a8.1 8.1 0 0 0 2.4 1.4l.4 2.5h4l.4-2.5a8.1 8.1 0 0 0 2.4-1.4l2.4 1 2-3.5-2-1.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="ads" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5v14h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 9l4 4 3-3 5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 11v4h-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".problem-header", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.from(".problem-card", {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".problem-grid", start: "top 80%" },
        delay: 0.15,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-padding bg-grid" id="problema">
      <div className="container">

        <SectionHeader
          label="[01] — El Problema"
          title={<>TU CUENTA VENDE,<br />PERO <span className="text-accent problem-title-nowrap">NO ESTÁ OPTIMIZADA</span></>}
          maxWidth="720px"
          className="problem-header"
        />

        <div className="problem-grid grid-3">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="problem-card card-base"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div className="problem-card-heading">
                <span className="problem-card-icon">{problemIcons[i]}</span>
                <h3 className="heading-h3-sm" style={{ marginBottom: 0 }}>
                  {p.title.toUpperCase()}
                </h3>
              </div>

              <p className="body-regular" style={{ flex: 1, position: "relative", zIndex: 1 }}>
                {p.detail}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
