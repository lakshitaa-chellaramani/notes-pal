"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  animationSpeed = 0.4, // pass custom speed from parent
  colors = [[0, 255, 255]], // customizable colors for the effect
  dotSize = 3, // size of the dots in the effect
  showGradient = true, // option to display the gradient overlay
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Update mouse movement logic
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);

  // Update hover states
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Motion div for spotlight effect */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={animationSpeed}  // Pass the speed for animation
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={colors}  // Customize colors for the effect
            dotSize={dotSize}  // Set dot size
            showGradient={showGradient}  // Toggle gradient
          />
        )}
      </motion.div>

      {/* Render children, which would be the actual content of the feature card */}
      {children}
    </div>
  );
};
