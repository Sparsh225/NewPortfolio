import React from "react";
import { HeroHighlightDemo } from "../components/HeroHighlightDemo";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";
import WorkExp from "../components/WorkExp";
import { Skills } from "../components/Skills";
import { LampDemo } from "../components/LampDemo";
export const Home = () => {
  return (
    <div className="home">
      <HeroHighlightDemo />
      <InfiniteMovingCards />
      <LampDemo />
      <WorkExp />
      <Skills />
    </div>
  );
};
