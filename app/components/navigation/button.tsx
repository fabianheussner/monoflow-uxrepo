import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@utils";
import { VariantProps, cva } from "class-variance-authority";
import { Icon, Text } from "@components";
import { icons } from "lucide-react";

const buttonVariants = cva(
  `rounded-xl inline-flex items-center gap-3 active:scale-95 transition-all`,
  {
    variants: {
      variant: {
        filled: "bg-primary hover:bg-primaryHover text-onPrimary shadow-md",
        tonal: "bg-tonal text-onTonal hover:bg-tonal",
        text: "bg-transparent text-primary hover:text-textVariant",
        danger: "bg-red-500 hover:bg-red-300",
      },
      inverted: {
        true: "",
        false: "",
      },
      size: {
        small: "py-2 px-4",
        large: "py-3 px-5",
      },
    },
    compoundVariants: [
      // Inverted filled button
      {
        variant: "filled",
        inverted: true,
        className: "bg-white text-neutral-950 hover:bg-neutral-200 shadow-md",
      },
      // Inverted tonal button
      {
        variant: "tonal",
        inverted: true,
        className: "bg-neutral-950 text-white hover:bg-neutral-800",
      },
    ],
    defaultVariants: {
      size: "large",
      variant: "filled",
      inverted: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  trailingIcon?: keyof typeof icons;
  inverted?: boolean;
  onClick?: React.MouseEventHandler;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variant,
      className,
      children,
      trailingIcon,
      inverted = false,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          buttonVariants({
            size,
            variant,
            className,
            inverted,
          })
        )}
        {...props}
      >
        <Text
          size={size === "small" ? "BodySmBold" : "BodyLgBold"}
          className="text-inherit"
        >
          {children}
        </Text>
        {trailingIcon && (
          <Icon name={trailingIcon} size={size === "small" ? 16 : 20} />
        )}
      </button>
    );
  }
);
