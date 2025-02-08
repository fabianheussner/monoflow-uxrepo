"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/app/utils";
import { Button, Text, Wrapper } from "@components";

export interface BackdropProps {
  className?: string;
}

export const Navigation = ({ className }: BackdropProps) => {
  const [isVisible, setIsVisible] = useState(true); // Track visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const navigationContent = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 40) {
      // Scrolling down and passed threshold, hide navigation
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up, show navigation
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "flex items-center sticky top-0 z-10 bg-backgroundVariant transition-all duration-300 ease-in-out",
        isVisible ? "transform-none" : "transform -translate-y-full",
        lastScrollY < 20 ? "" : "border-b border-border",
        className
      )}
    >
      <Wrapper
        indent="Default"
        border="None"
        className="py-4 flex items-center justify-between w-full"
      >
        <Text size="BodyLgBold">monoflow</Text>
        <nav className="flex items-center absolute top 0 left-[50%] transform translate-x-[-50%]">
          <ul className="flex">
            {navigationContent.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="block px-6 py-4 [&>*]:text-textVariant [&>*]:hover:text-text"
                >
                  <Text size="BodySm">{item.name}</Text>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button size="small">Say hello</Button>
      </Wrapper>
    </div>
  );
};
