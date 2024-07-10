"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn"; // Import utility for merging Tailwind classes

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  const items = [
    {
      quote:
        "A blog application built with the MERN stack. It allows users to create, edit, and delete blog posts, and features user authentication and comments.",
      name: "Blog Application",
      title: "[MERN ,Stack ,Node.js ,Express ,MongoDB ,React]",
    },
    {
      quote:
        "A note-taking application using the MERN stack. Users can create, update, and delete notes with a user-friendly interface.",
      name: "Note App",
      title: "[MERN ,Stack ,Node.js ,Express ,MongoDB ,React]",
    },
    {
      quote:
        "A quote management app built with GraphQL. It allows users to view, create, and manage quotes.",
      name: "Quote App",
      title: "[GraphQL , Apollo Client, Node.js, Express ,React]",
    },
    {
      quote:
        "A pizza ordering app with payment integration built with JavaScript. Users can choose from various pizzas, add them to the cart, and make payments.",
      name: "Pizza website",
      title: "[JavaScript ,Payment Integration ,HTML ,CSS]",
    },
    {
      quote:
        "A classic Street Fighter game built using Java Swing. The game features basic fighting mechanics and characters.",
      name: "Street Fighter game",
      title: "[Java , Swing]",
    },
    {
      quote:
        "A music player app created with Android Studio. It allows users to play and manage their music library.",
      name: "iSangeet",
      title: "[Android Studio ,Java ,XML]",
    },
    {
      name: "Quiz App",
      quote:
        "A quiz application developed using Android Studio. It features multiple-choice questions and tracks users' scores.",
      title: "[Android Studio ,Java ,XML]",
    },
  ];

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      // Duplicate items for infinite scrolling effect
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Set animation direction
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      // Set animation speed
      const speedMap = {
        fast: "20s",
        normal: "40s",
        slow: "60s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed]
      );

      setStart(true);
    }
  }, [direction, speed]);

  console.log(items);
  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          "relative overflow-hidden  bg-black dark:bg-black ",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-gray-300 px-8 py-6 shadow-lg md:w-[450px]"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              }}
            >
              <blockquote>
                <span className="text-sm leading-[1.6] text-gray-300">
                  {item.quote}
                </span>
                <div className="mt-6 flex flex-col">
                  <span className="text-sm leading-[1.6] text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400">
                    {item.title}
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
