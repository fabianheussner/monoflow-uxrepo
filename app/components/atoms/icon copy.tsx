import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { cn } from "@utils";

// Define custom sizes
const sizeMap = {
  tiny: 16,
  small: 20,
  medium: 24,
  large: 32,
};

// Define IconProps interface
interface IconProps extends Omit<LucideProps, "size"> {
  name: string; // Accept a string for the icon name
  size?: keyof typeof sizeMap; // Accept "small", "medium", "large"
}

export const Icon = ({
  name,
  size = "medium",
  className,
  ...props
}: IconProps) => {
  // Dynamically import the specified Lucide icon
  const LucideIcon = dynamic(
    dynamicIconImports[name as keyof typeof dynamicIconImports]
    // { ssr: false }
  );

  // Map the custom size to a pixel value
  const resolvedSize = sizeMap[size];

  return (
    <LucideIcon
      size={resolvedSize} // Pass pixel size directly to Lucide
      className={cn(className)} // Additional custom className
      {...props}
    />
  );
};
