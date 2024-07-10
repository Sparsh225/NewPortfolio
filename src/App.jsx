// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { FloatingNavbar } from "./components/FloatingNavbar";
import { InfiniteMovingCards } from "./components/ui/InfiniteMovingCards";
import WorkExp from "./components/WorkExp";
import "./index.css";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { LampDemo } from "./components/LampDemo";

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const HomeIcon = () => <span>🏠</span>;
const AboutIcon = () => <span>ℹ️</span>;
const navItems = [
  { name: "Home", link: "/", icon: <HomeIcon /> },
  { name: "About", link: "/about", icon: <AboutIcon /> },
  // Add more items as needed
];

function App() {
  return (
    <Router>
      <div className="w-full h-full bg-black">
        <FloatingNavbar navItems={navItems} />
        <HeroHighlightDemo />
        <InfiniteMovingCards />
        <LampDemo />
        <WorkExp />
        <Skills />
        <Routes>
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
