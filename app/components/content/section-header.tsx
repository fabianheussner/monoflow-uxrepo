import React from "react";
import { cn } from "@/app/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Text, Button } from "@components";

const SectionHeaderVariants = cva(`flex items-center justify-between`, {
  variants: {
    level: {
      Main: "px-5 pb-4 pt-6",
      Child: "",
    },
  },
  defaultVariants: {
    level: "Main",
  },
});

export interface SectionHeaderProps
  extends VariantProps<typeof SectionHeaderVariants> {
  title: string;
  hasTrailing?: boolean;
  className?: string;
}

export const SectionHeader = ({
  title,
  level,
  hasTrailing,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn(SectionHeaderVariants({ level }), className)}>
      <Text size={level === "Child" ? "BodyLg" : "HeadlineSm"}>{title}</Text>
      {hasTrailing && (
        <Button variant="text" size="small">
          Show all
        </Button>
      )}
    </div>
  );
};
