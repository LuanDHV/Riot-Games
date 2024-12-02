"use client";
import { useEffect, useState } from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuLeftOpen, setIsMenuLeftOpen] = useState(false);
  const [isMenuRightOpen, setIsMenuRightOpen] = useState(false);

  const handleMenuLeftToggle = () => {
    setIsMenuLeftOpen(!isMenuLeftOpen);
  };

  const handleMenuRightToggle = () => {
    setIsMenuRightOpen(!isMenuRightOpen);
    setIsMenuLeftOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <MenuLeft
        isMenuLeftOpen={isMenuLeftOpen}
        handleMenuLeftToggle={handleMenuLeftToggle}
      />
      <MenuRight
        isScrolled={isScrolled}
        isMenuRightOpen={isMenuRightOpen}
        handleMenuRightToggle={handleMenuRightToggle}
        handleMenuLeftToggle={handleMenuLeftToggle}
      />
    </div>
  );
}
