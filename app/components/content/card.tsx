import React from "react";
import { Text, ThumbnailIcon } from "@components";
import { cn } from "@/app/utils";
import { cva, VariantProps } from "class-variance-authority";
import { icons } from "lucide-react";

const cardVariants = cva(
  `min-h-72 w-full rounded-lg p-5 active:scale-95 transition-all flex flex-col justify-between cursor-pointer`,
  {
    variants: {
      variant: {
        default: "bg-background",
        dark: "bg-backgroundInverse",
        image: "", // Removed static image to allow dynamic background
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps extends VariantProps<typeof cardVariants> {
  title: string;
  description?: string;
  category?: string;
  date?: string;
  duration?: string;
  icon?: keyof typeof icons;
  className?: string;
  image?: string;
  onClick?: () => void;
}

export const Card = ({
  title,
  description,
  category,
  date,
  duration,
  icon,
  variant,
  className,
  image,
  onClick,
}: CardProps) => {
  return (
    <div
      className={cn(cardVariants({ variant, className }))}
      onClick={onClick}
      style={
        variant === "image" && image
          ? {
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {icon && (
        <ThumbnailIcon
          icon={icon}
          className="mb-4"
          theme={
            variant === "dark" || variant === "image" ? "inverted" : "default"
          }
        />
      )}
      <div>
        <Text
          size="HeadlineSm"
          className={
            variant === "dark" || variant === "image"
              ? "text-textInverse"
              : "text-text"
          }
        >
          {title}
        </Text>
        {(category && date && duration) || description ? (
          <div className="mt-2">
            <Text
              size="BodySm"
              className={
                variant === "dark"
                  ? "text-textVariantInverse"
                  : variant === "image"
                    ? "text-textOnImage/80"
                    : "text-textVariant"
              }
            >
              {category && (
                <span
                  className={
                    variant === "dark"
                      ? "text-textInverse pr-3"
                      : variant === "image"
                        ? "text-textOnImage pr-3"
                        : "text-text pr-3"
                  }
                >
                  {category}
                </span>
              )}
              {date && duration ? (
                <span>
                  {date && (
                    <time dateTime="2025-02-02T16:00" className="pr-3">
                      {date}
                    </time>
                  )}
                  {duration && <span>{duration}</span>}
                </span>
              ) : (
                <span>{description}</span>
              )}
            </Text>
          </div>
        ) : null}
      </div>
    </div>
  );
};
