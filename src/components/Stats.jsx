"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Stats() {
  return (
    <div className="h-full pt-8 pb-8 rounded-md flex flex-col antialiased bg-[#35144f] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "30,000+",
    name: "Active Members",
    title: "A Tale of Two Cities",
  },
  {
    quote: "25+",
    name: "Sports Available",
    title: "Hamlet",
  },
  {
    quote: "500+",
    name: "Tournaments conducted",
    title: "A Dream Within a Dream",
  },
  {
    quote: "110+",
    name: "Centres and Clubs",
    title: "Pride and Prejudice",
  },
  {
    quote: "30+",
    name: "Cities",
    title: "Moby-Dick",
  },
];
