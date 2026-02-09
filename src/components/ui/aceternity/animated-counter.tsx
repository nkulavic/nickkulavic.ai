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

  // Check if value is non-numeric BEFORE parsing
  const isNonNumeric = typeof value === "string" && isNaN(Number(value));
  const numericValue = isNonNumeric ? 0 : (typeof value === "string" ? Number(value) : value);

  // ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS
  const motionValue = useMotionValue(direction === "down" ? numericValue : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView && !isNonNumeric) {
      motionValue.set(direction === "down" ? 0 : numericValue);
    }
  }, [motionValue, isInView, numericValue, direction, isNonNumeric]);

  useEffect(() => {
    if (isNonNumeric) return;

    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.round(latest)
        );
      }
    });
  }, [springValue, isNonNumeric]);

  // Handle non-numeric values AFTER all hooks
  if (isNonNumeric) {
    return <span className={className}>{value}</span>;
  }

  return <span className={className} ref={ref} />;
}
