"use client";

import React from "react";
import { IconButton, Text, Shortcut } from "@components";

export interface NavigationBarProps {
  title?: string;
  scrolled?: boolean;
  className?: string;
  onClick: () => void;
}

export const NavigationBar = ({
  title,
  scrolled = false,
  onClick,
}: NavigationBarProps) => {
  return (
    <div className="flex justify-between items-center sticky top-0 bg-background z-10 px-3 py-3">
      <div className="w-8 h-8" />
      {scrolled && title && <Text size="BodyMdBold">{title}</Text>}
      <div className="flex gap-2 items-center">
        <Shortcut button="esc" />
        <IconButton icon="X" onClick={onClick} />
      </div>
    </div>
  );
};
