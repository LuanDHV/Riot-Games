"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollToChangeBgColor = () =>
      setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScrollToChangeBgColor);
    return () =>
      window.removeEventListener("scroll", handleScrollToChangeBgColor);
  }, []);

  return (
    <div
      className={`fixed z-50 h-20 w-full px-5 transition-colors duration-300 ease-in-out md:px-10 ${
        isScrolled ? "bg-[#111]" : "bg-transparent"
      }`}
    >
      <p className="text-white">Riot Games Header</p>
    </div>
  );
}
