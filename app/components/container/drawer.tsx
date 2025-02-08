"use client";

import { useState, useEffect, useRef } from "react";
import {
  Handle,
  NavigationBar,
  Text,
  ThumbnailIcon,
  ListItem,
  Backdrop,
  SectionHeader,
  Rating,
} from "@components";

export const Drawer = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const [isDismissing, setIsDismissing] = useState(false);
  const [isOpening, setIsOpening] = useState(true); // State to handle opening animation
  const [scrolled, setScrolled] = useState(false);
  const [startY, setStartY] = useState<number | null>(null);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const title = "Drawer Title";

  const handleDismiss = () => {
    setIsDismissing(true); // Trigger dismissal animation
    setTimeout(() => closeDrawer(), 300); // Call parent closeDrawer function after animation
  };

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        setScrolled(contentRef.current.scrollTop > 120);
      }
    };

    const contentEl = contentRef.current;
    if (contentEl) {
      contentEl.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentEl) {
        contentEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const startPosition = "touches" in e ? e.touches[0].clientY : e.clientY;
    setStartY(startPosition);
  };

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || startY === null) return;

    const currentPosition = "touches" in e ? e.touches[0].clientY : e.clientY;
    const deltaY = currentPosition - startY;

    // Only allow dragging downward
    if (deltaY > 0) {
      setTranslateY(deltaY);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);

    // Dismiss if dragged beyond threshold
    if (translateY > 150) {
      handleDismiss();
    } else {
      // Reset position if below threshold
      setTranslateY(0);
    }
  };

  useEffect(() => {
    // Simulate opening animation on mount
    setIsOpening(true);
    const timeout = setTimeout(() => setIsOpening(false)); // Opening animation duration
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div
        style={{
          opacity: isDismissing || isOpening ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <Backdrop />
      </div>
      <div
        className="fixed inset-x-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center"
        style={{
          transform: isDismissing
            ? "translateY(100%)" // Slide out of screen downward
            : isOpening
              ? "translateY(100%)" // Start off-screen
              : `translateY(${translateY}px)`,
          transition: isDragging ? "none" : "transform 0.3s ease, opacity 0.3s",
          opacity: isDismissing || isOpening ? 0 : 1, // Fade out when dismissing or opening
        }}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseMove={(e) => isDragging && handleMove(e)}
        onMouseUp={handleEnd}
        onMouseLeave={isDragging ? handleEnd : undefined} // Handle edge case where mouse leaves the drawer
      >
        <Handle className="mb-1.5" />
        <div
          ref={contentRef}
          className="bg-background h-[98dvh] w-full rounded-t-2xl overflow-y-scroll"
        >
          <NavigationBar
            onClick={handleDismiss}
            title={title}
            scrolled={scrolled}
          />
          <div className="p-6">
            <ThumbnailIcon icon="Book" className="mb-4" />
            <Text size="HeadlineLg">{title}</Text>
            <Text size="BodyLg">...</Text>
            <ListItem title="List Item" description="..." />
            {/* <SectionHeader title="Section Header" /> */}
            <Rating question="Was that article helpful?" />
          </div>
        </div>
      </div>
    </>
  );
};
