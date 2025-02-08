"use client";

import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { Icon } from "@components";
import { icons } from "lucide-react";

const iconButtonVariants = cva(
  `rounded-lg bg-surfaceVariant hover:bg-surfaceVariant flex items-center justify-center active:scale-90 transition-transform`,
  {
    variants: {
      size: {
        small: "w-8 h-8",
        large: "w-12 h-12",
      },
    },
    defaultVariants: {
      size: "small",
    },
  }
);

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: keyof typeof icons;
  isClose?: boolean;
  className?: string;
  onClick: () => void;
}

export const IconButton = ({
  icon,
  size,
  isClose = false,
  className,
  onClick,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={cn(iconButtonVariants({ size, className }))}
      onClick={onClick}
      {...props}
    >
      <Icon name={icon} size={20} />
    </button>
  );
};
