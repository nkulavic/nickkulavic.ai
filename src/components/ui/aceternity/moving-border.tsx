"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => {
  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-lg bg-transparent p-[1px]",
        containerClassName
      )}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #0066FF, #3385FF, #0052CC, #0066FF)",
          backgroundSize: "200% 100%",
          animation: `moveGradient ${duration}ms linear infinite`,
        }}
      />
      <div
        className={cn(
          "relative z-10 rounded-lg bg-white px-8 py-3 dark:bg-gray-950",
          className
        )}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </Component>
  );
};
