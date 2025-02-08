import React, { forwardRef } from "react";
import { cn } from "@utils";
import { VariantProps, cva } from "class-variance-authority";

const tagVariants = cva(`rounded-md px-2 py-1 body-sm-bold`, {
  variants: {
    variant: {
      default: "bg-surfaceVariant text-text",
      bright: "bg-textOnImage text-textOnImageInverse",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  ref?: React.Ref<HTMLDivElement>;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          tagVariants({
            variant,
            className,
          })
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
