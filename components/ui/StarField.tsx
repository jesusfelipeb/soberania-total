"use client";

import { useEffect, useRef } from "react";

export default function StarField({ count = 20 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationName = "twinkle";
      star.style.animationDuration = `${Math.random() * 4 + 3}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationTimingFunction = "ease-in-out";
      star.style.animationIterationCount = "infinite";
      container.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach((s) => s.remove());
    };
  }, [count]);

  return <div ref={containerRef} className="star-field" />;
}
