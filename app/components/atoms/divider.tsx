import React from "react";
import { cn } from "@/app/utils";

export const Divider = ({ className }: { className?: string }) => {
  return <hr className={cn("border-border", className)} />;
};
