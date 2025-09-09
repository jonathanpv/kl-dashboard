"use client";

import React from "react";
import { motion, Transition, Variants } from "motion/react";

// Paths are re-ordered for a sequential fill animation (bottom-left to bottom-right)
const orderedPaths = [
  // 1. Bottom-left
  "M6.34331 90.5954C2.84274 90.555 0.0131911 87.6788 0.361921 84.195C1.6516 71.3109 6.34955 58.9441 14.0156 48.2621C15.9932 45.5065 19.8558 45.1076 22.5402 47.1735L32.9219 55.1631C35.7833 57.3652 36.1872 61.4965 34.2287 64.5355C30.3057 70.6229 27.7551 77.4268 26.7421 84.5089C26.2463 87.9751 23.4137 90.7923 19.9131 90.7519L6.34331 90.5954Z",
  // 2. Top-left
  "M26.0674 39.4525C23.3493 37.0719 23.1591 32.8804 25.8782 30.4935C33.7701 23.5658 43.0416 18.2191 53.141 14.7739C56.3985 13.6627 59.8183 15.6357 60.7601 18.9432L64.173 30.9287C65.148 34.3528 63.0915 37.8786 59.7705 39.1704C54.334 41.2849 49.2949 44.2348 44.8546 47.9029C42.2415 50.0616 38.4117 50.2639 35.8655 48.0339L26.0674 39.4525Z",
  // 3. Top-right
  "M67.2207 18.441C66.5715 14.9587 68.9038 11.5917 72.4328 11.2681C82.2758 10.3656 92.2278 11.2097 101.781 13.7766C111.238 16.3176 120.105 20.4933 127.949 26.0782C130.892 28.1736 131.128 32.3616 128.666 35.0126L119.894 44.4592C117.588 46.9433 113.757 47.1417 110.942 45.2607C106 41.9578 100.499 39.4637 94.6628 37.8957C88.8528 36.3346 82.8234 35.7214 76.8274 36.0682C73.3743 36.2678 70.13 34.0462 69.4963 30.6472L67.2207 18.441Z",
  // 4. Bottom-right
  "M132.949 42.7873C135.428 40.4775 139.306 40.5047 141.534 43.0518C146.928 49.2194 151.279 56.1707 154.414 63.6545C157.494 71.0084 159.353 78.7628 159.936 86.6382C160.195 90.129 157.292 92.939 153.791 92.8986L140.221 92.7421C136.721 92.7017 133.962 89.8201 133.556 86.3436C133.021 81.7621 131.841 77.2606 130.041 72.9627C128.262 68.7164 125.901 64.7252 123.028 61.0905C120.786 58.2557 120.805 54.0994 123.453 51.6327L132.949 42.7873Z",
];

interface PaceArcProps extends React.SVGProps<SVGSVGElement> {
  /** The rating value, from 0 to 4. */
  rating: number;
  /** Framer Motion transition configuration for the spring animation. */
  transition?: Transition;
}

// Variants for the container to orchestrate staggered animation of children
const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // Delay between each blob animation
    },
  },
};

// Variants for each blob to animate from an unfilled to a filled state
const itemVariants: Variants = {
  initial: { opacity: 0.25 },
  animate: (isFilled: boolean) => ({
    opacity: isFilled ? 1 : 0.25,
  }),
};

/**
 * An animated SVG gauge that fills sequentially on mount based on the rating.
 * @example
 * <PaceArc rating={3} className="text-green-500" />
 */
const PaceArc: React.FC<PaceArcProps> = ({
  rating,
  className,
  transition = { type: "spring", stiffness: 300, damping: 20 },
  ...props
}) => {
  return (
    // @ts-expect-error - Suppressing a type error caused by incompatibility between
    // React.SVGProps and motion/react's SVGMotionProps.
    <motion.svg
      width="160"
      height="100"
      viewBox="0 0 160 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      variants={containerVariants}
      initial="initial"
      animate="animate" // Triggers the animation sequence on mount
      {...props}
    >
      {orderedPaths.map((path, index) => {
        const isFilled = index < rating;
        return (
          <motion.path
            key={index}
            d={path}
            fill="currentColor"
            custom={isFilled} // Pass isFilled to the item variant
            variants={itemVariants}
            transition={transition} // Use the provided spring transition
          />
        );
      })}
    </motion.svg>
  );
};

export default PaceArc;