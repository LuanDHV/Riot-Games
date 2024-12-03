"use client";
import { useEffect, useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderLeftOpen, setIsHeaderLeftOpen] = useState(false);
  const [isHeaderRightOpen, setIsHeaderRightOpen] = useState(false);

  const handleHeaderLeftToggle = () => {
    setIsHeaderLeftOpen(!isHeaderLeftOpen);
  };

  const handleHeaderRightToggle = () => {
    setIsHeaderRightOpen(!isHeaderRightOpen);
    setIsHeaderLeftOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <HeaderLeft
        isHeaderLeftOpen={isHeaderLeftOpen}
        handleHeaderLeftToggle={handleHeaderLeftToggle}
      />
      <HeaderRight
        isScrolled={isScrolled}
        isHeaderRightOpen={isHeaderRightOpen}
        handleHeaderRightToggle={handleHeaderRightToggle}
        handleHeaderLeftToggle={handleHeaderLeftToggle}
      />
    </div>
  );
}
