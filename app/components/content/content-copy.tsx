"use client";
import { useState } from "react";
import { Text } from "@components";
import { Check, Copy } from "lucide-react";

interface CopyProps extends React.HTMLAttributes<HTMLButtonElement> {
  content: string;
}

export const ContentCopy = ({ content, ...props }: CopyProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error("Failed to copy content:", err);
    }
  };

  return (
    <button
      className="bg-surfaceVariant font-mono text-text flex rounded-md items-center border border-border curosr-copy active:scale-95 ease-in-out transition-transform"
      onClick={handleCopy}
      {...props}
    >
      <span className="px-4 py-2">
        <Text size="BodySm">〜 {content}</Text>
      </span>
      <span className="px-[10] py-[10] border-l border-border">
        {copied ? (
          <Check size={16} className="text-emerald-500" />
        ) : (
          <Copy size={16} />
        )}
      </span>
    </button>
  );
};
