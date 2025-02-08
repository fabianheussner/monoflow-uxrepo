import React from "react";
import { cn } from "@/app/utils";
import { cva, VariantProps } from "class-variance-authority";

const GridVariants = cva(`flex grid gap-4`, {
  variants: {
    // indent: {
    //   Default: "px-4 md:px-8 lg:px-12",
    //   Narrow: "px-8 md:px-12 lg:px-16",
    // },
    columns: {
      Default: "grid-cols-1",
      EqualTwo: "grid-cols-1 md:grid-cols-2",
      EqualThree: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      EqualFour: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      EqualSix: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
    },
  },
  defaultVariants: {
    // indent: "Default",
    columns: "Default",
  },
});

export interface GridProps extends VariantProps<typeof GridVariants> {
  className?: string;
  children: React.ReactNode;
}

export const Grid = ({ className, columns, children }: GridProps) => {
  return (
    <div className={cn(GridVariants({ columns }), className)}>{children}</div>
  );
};
