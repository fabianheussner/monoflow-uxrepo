import React from "react";
import { cn } from "@utils";

export interface SearchProps {
  className?: string;
  placeholder?: string;
  value?: string;
  //   onChange: (value: string) => void;
}

export const Search = ({
  className,
  placeholder,
  value,
  //   onChange,
}: SearchProps) => {
  return (
    <input
      className={cn(
        "px-4 py-3 rounded-lg border border-border box-border outline-none focus:outline-none focus:shadow-md w-60 focus:w-96 transition-all ease-in-out duration-300 body-lg",
        className
      )}
      type="search"
      placeholder={placeholder}
      value={value}
      //   onChange={(e) => onChange(e.target.value)}
    />
  );
};
