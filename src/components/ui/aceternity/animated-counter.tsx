"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number | string;
  className?: string;
  direction?: "up" | "down";
}

export function AnimatedCounter({
  value,
  className = "",
  direction = "up",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  // Handle non-numeric values
  if (typeof value === "string" && isNaN(Number(value))) {
    return <span className={className}>{value}</span>;
  }

  const numericValue = typeof value === "string" ? Number(value) : value;
  const motionValue = useMotionValue(direction === "down" ? numericValue : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : numericValue);
    }
  }, [motionValue, isInView, numericValue, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Math.round(latest)
          );
        }
      }),
    [springValue]
  );

  return <span className={className} ref={ref} />;
}
