import React from "react";
import { cn } from "@/app/utils";

export interface BackdropProps {
  className?: string;
}

export const Backdrop = ({ className, ...props }: BackdropProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ease-in-out",
        className
      )}
      {...props}
    />
  );
};
