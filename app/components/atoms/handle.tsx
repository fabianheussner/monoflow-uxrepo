import React from "react";
import { cn } from "@utils";

export interface HandleProps {
  className?: string;
}

export const Handle = ({ className }: HandleProps) => {
  return (
    <div className={cn("w-8 h-1 rounded-full bg-background", className)} />
  );
};
