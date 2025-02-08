import React from "react";
import { cn } from "@utils";
import { VariantProps, cva } from "class-variance-authority";

const TextVariants = cva(`tracking-normal`, {
  variants: {
    size: {
      Display: "display",
      HeadlineXl: "headline-xl",
      HeadlineLg: "headline-lg",
      HeadlineMd: "headline-md",
      HeadlineSm: "headline-sm",
      BodyLg: "body-lg",
      BodyLgBold: "body-lg-bold",
      BodyMd: "body-md",
      BodyMdBold: "body-md-bold",
      BodySm: "body-sm",
      BodySmBold: "body-sm-bold",
      Caption: "caption",
    },
    color: {
      Default: "text-text",
      Subdued: "text-textVariant",
      Gradient:
        "bg-gradient-to-r from-textVariant to-text inline-block text-transparent bg-clip-text",
      Link: "underline decoration-textVariant hover:decoration-text transition-all ease-in-out",
    },
    tag: {
      h1: null,
      h2: null,
      h3: null,
      h4: null,
      h5: null,
      p: null,
      span: null,
    },
  },
  defaultVariants: {
    size: "BodyLg",
    color: "Default",
    tag: "span",
  },
});

interface TextProps extends Omit<VariantProps<typeof TextVariants>, "tag"> {
  className?: string;
  children: React.ReactNode;
  tag?: React.ElementType; // Broader definition for the component rendering
}

export const Text = ({
  className,
  size,
  color,
  tag: Component = "span",
  children,
  ...props
}: TextProps) => {
  return (
    <Component
      className={cn(TextVariants({ className, size, color }))}
      {...props}
    >
      {children}
    </Component>
  );
};
