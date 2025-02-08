import React from "react";
import { cn } from "@/app/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ContentCopy, Text, Search } from "@components";

const headerVariants = cva(
  `flex flex-col gap-8 items-center justify-center bg-background`,
  {
    variants: {
      variant: {
        Main: "py-20 px-5 md:py-32 md:px-24 lg:py-40 lg:px-64 text-center",
        Child: "",
      },
    },
    defaultVariants: {
      variant: "Main",
    },
  }
);

export interface HeaderProps extends VariantProps<typeof headerVariants> {
  title: string;
  subtitle?: string;
  copyContent?: string;
  className?: string;
}

export const Header = ({
  title,
  subtitle,
  variant,
  copyContent,
  className,
}: HeaderProps) => {
  return (
    <div className={cn(headerVariants({ variant, className }))}>
      <div className="flex flex-col gap-4">
        {subtitle && <Text size="BodyLg">{subtitle}</Text>}
        <Text size="HeadlineLg">{title}</Text>
      </div>
      {copyContent && <ContentCopy content={copyContent} />}
      <Search placeholder="I want to learn about…" />
    </div>
  );
};
