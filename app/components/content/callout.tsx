import React from "react";
import { cn } from "@utils";
import { cva } from "class-variance-authority";
import { Text } from "@components";

const CalloutVariants = cva(`px-4 py-4 rounded-xl`, {
  variants: {
    variant: {
      neutral: "bg-surfaceVariant text-text",
      warning:
        "bg-surfaceWarning text-onSurfaceWarning dark:bg-surfaceWarning/20 dark:text-onSurfaceWarning",
      info: "bg-blue-100 text-blue-950",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  description: string;
  title?: string;
  emoji?: string;
  variant?: "neutral" | "warning" | "info";
}

export const Callout = ({
  description,
  variant = "neutral",
  emoji,
  title,
  className,
  children,
  ...props
}: CalloutProps) => {
  return (
    <div className={cn(CalloutVariants({ variant, className }))} {...props}>
      {title && (
        <div className="flex items-center gap-2 mb-2">
          {emoji && <Text size="HeadlineMd">{emoji}</Text>}
          <Text size="BodyLgBold">{title}</Text>
        </div>
      )}
      <Text size="BodyMd">{description}</Text>
    </div>
  );
};
