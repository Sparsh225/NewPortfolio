"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

//     name: "Blog App",
//     description: "A blog application built with the MERN stack. It allows users to create, edit, and delete blog posts, and features user authentication and comments.",
//     tech: ["MERN Stack", "Node.js", "Express", "MongoDB", "React"],
//     link: "https://github.com/your-username/blog-app",  // Replace with the actual link
//     img: "https://via.placeholder.com/300x200?text=Blog+App",  // Replace with the actual image URL
//   },
//   {
//     name: "Note App",
//     description: "A note-taking application using the MERN stack. Users can create, update, and delete notes with a user-friendly interface.",
//     tech: ["MERN Stack", "Node.js", "Express", "MongoDB", "React"],
//     link: "https://github.com/your-username/note-app",  // Replace with the actual link
//     img: "https://via.placeholder.com/300x200?text=Note+App",  // Replace with the actual image URL
//   },
//   {
//     name: "Quote App",
//     description: "A quote management app built with GraphQL. It allows users to view, create, and manage quotes.",
//     tech: ["GraphQL", "Apollo Client", "Node.js", "Express", "React"],
//     link: "https://github.com/your-username/quote-app",  // Replace with the actual link
//     img: "https://via.placeholder.com/300x200?text=Quote+App",  // Replace with the actual image URL
//   },
//   {
//     name: "Pizza App",
//     description: "A pizza ordering app with payment integration built with JavaScript. Users can choose from various pizzas, add them to the cart, and make payments.",
//     tech: ["JavaScript", "Payment Integration", "HTML", "CSS"],
//     link: "https://github.com/your-username/pizza-app",  // Replace with the actual link
//     img: "https://via.placeholder.com/300x200?text=Pizza+App",  // Replace with the actual image URL
//   },
//   {
//     name: "Street Fighter Game",
//     description: "A classic Street Fighter game built using Java Swing. The game features basic fighting mechanics and characters.",
//     tech: ["Java", "Swing"],
//     link: "https://github.com/your-username/street-fighter-game",  // Replace with the actual link
//     img: "https://via.placeholder.com/300x200?text=Street+Fighter+Game",  // Replace with the actual image URL
//   },
//   {
//     name: "iSangeet",
//     description: "A music player app created with Android Studio. It allows users to play and manage their music library.",
//     tech: ["Android Studio", "Java", "XML"],
//     link: "https://github.com/your-username/isangeet",  // Replace with the actual link
//     img: "https://via.placeholder.com/300x200?text=iSangeet",  // Replace with the actual image URL
//   },
//   {
//     name: "Quiz App",
//     description: "A quiz application developed using Android Studio. It features multiple-choice questions and tracks users' scores.",
//     tech: ["Android Studio", "Java", "XML"],
//     link: "https://github.com/your-username/quiz-app",  // Replace with the actual link
//     img: "https://via.placeholder.com/300x200?text=Quiz+App",  // Replace with the actual image URL
//   },
// ];

export const InfiniteMovingCardsDemo = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center  w-full relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};
