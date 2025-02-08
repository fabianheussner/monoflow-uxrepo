import React from "react";
import { Icon } from "@components";
import { icons } from "lucide-react";
import { cn } from "@/app/utils";
import { VariantProps, cva } from "class-variance-authority";

const thumbnailIconVariants = cva(
  `rounded-lg flex items-center justify-center`,
  {
    variants: {
      size: {
        small: "w-6 h-6 rounded-md",
        medium: "w-8 h-8",
        large: "w-10 h-10",
      },
      theme: {
        default: "bg-backgroundInverse",
        inverted: "bg-background",
      },
    },
    defaultVariants: {
      theme: "default",
      size: "medium",
    },
  }
);

export interface ThumbnailIconProps
  extends VariantProps<typeof thumbnailIconVariants> {
  icon: keyof typeof icons;
  className?: string;
}

export const ThumbnailIcon = ({
  icon,
  theme,
  size = "medium",
  className,
}: ThumbnailIconProps) => {
  return (
    <div className={cn(thumbnailIconVariants({ size, theme, className }))}>
      <Icon
        name={icon}
        size={size === "large" ? 24 : size === "small" ? 16 : 20}
        className={theme === "inverted" ? "text-text" : "text-textInverse"}
      />
    </div>
  );
};
