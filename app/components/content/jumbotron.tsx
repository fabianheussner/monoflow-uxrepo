import React from "react";
import { cn } from "@/app/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Text, Button } from "@components";
import { icons } from "lucide-react";

const JumbotronVariants = cva(
  `flex flex-col gap-8 items-center justify-center py-20 px-5 md:py-32 md:px-24 lg:py-40 lg:px-64`,
  {
    variants: {
      variant: {
        Default: "bg-surfaceVariant",
        Inverse: "bg-surfaceInverse",
      },
    },
    defaultVariants: {
      variant: "Default",
    },
  }
);

export interface JumbotronProps extends VariantProps<typeof JumbotronVariants> {
  title: string;
  action?: string;
  actionIcon?: keyof typeof icons;
  className?: string;
}

export const Jumbotron = ({
  title,
  action,
  actionIcon,
  variant,
  className,
}: JumbotronProps) => {
  return (
    <div className={cn(JumbotronVariants({ variant, className }))}>
      <Text size="HeadlineMd">{title}</Text>
      {action && <Button trailingIcon={actionIcon}>{action}</Button>}
    </div>
  );
};
