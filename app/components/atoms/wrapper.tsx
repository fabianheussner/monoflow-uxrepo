import React from "react";
import { cn } from "@utils";
import { VariantProps, cva } from "class-variance-authority";

const WrapperVariants = cva(`border-border mx-6 box-border`, {
  variants: {
    indent: {
      None: "px-0",
      Default: "px-4",
      Narrow: "px-8 md:px-12 lg:px-16",
    },
    border: {
      Side: "border-x",
      SideTop: "border-x border-t",
      SideBottom: "border-x border-b",
      Full: "border",
      None: "",
    },
  },
  defaultVariants: {
    indent: "None",
    border: "Side",
  },
});

export interface WrapperProps extends VariantProps<typeof WrapperVariants> {
  className?: string;
  children: React.ReactNode;
}

export const Wrapper = ({
  className,
  indent,
  border,
  children,
  ...props
}: WrapperProps) => {
  return (
    <section
      className={cn(WrapperVariants({ className, indent, border }))}
      {...props}
    >
      {children}
    </section>
  );
};
