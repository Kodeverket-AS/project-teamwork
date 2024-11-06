"use client";

import { useRef } from "react";

/**
 * ====================================================
 * CUSTOM HOOKS
 * ====================================================
 */

// HORIZONTAL SCROLL HOOK FOR BUTTON SCROLLING
export const useHorizontalScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollHorizontal = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return { scrollContainerRef, handleScrollHorizontal };
};
