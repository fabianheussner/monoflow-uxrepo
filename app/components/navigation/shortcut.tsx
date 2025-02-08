import React from "react";
import { cn } from "@/app/utils";
import { Text } from "@components";

export interface SectionHeaderProps {
  button: string;
  className?: string;
}

export const Shortcut = ({ button, className }: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "border-x border-t border-b-[3px] border-t-gray-100 border-b-gray-300 border-x-gray-200 rounded-lg px-2 py-1",
        className
      )}
    >
      <Text size="Caption">{button}</Text>
    </div>
  );
};
