"use-client";

import React from "react";
import { cn } from "@/app/utils";
import { Text, Button } from "@components";
import { on } from "events";

export interface RatingProps {
  question: string;
  className?: string;
}

export const Rating = ({ question, className }: RatingProps) => {
  // write me a click handler function that is called when the user clicks on either of the buttons.
  // The buttons should then disappear and a feedback message with a thank you appears.
  function handleFeedbackClick() {
    // Get the buttons
    const buttons = document.querySelectorAll("button");

    // Hide the buttons
    buttons.forEach((button) => {
      button.style.display = "none";
    });

    // Create a feedback message
    const feedbackMessage = document.createElement("div");
    feedbackMessage.innerText = "Thank you for your feedback";
    feedbackMessage.classList.add("text-center");
    document.body.appendChild(feedbackMessage);
  }

  return (
    <div className={cn("flex flex-col text-center", className)}>
      <Text size="HeadlineSm" className="mb-4">
        {question}
      </Text>
      <div className="flex gap-4 text-center justify-center">
        <Button
          variant="text"
          trailingIcon="ThumbsUp"
          onClick={handleFeedbackClick}
        >
          Yes
        </Button>
        <Button
          variant="text"
          trailingIcon="ThumbsDown"
          onClick={handleFeedbackClick}
        >
          Nope
        </Button>
        <Text className="hidden">Thank you for your feedback</Text>
      </div>
    </div>
  );
};
