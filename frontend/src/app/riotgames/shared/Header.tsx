"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IMenusHeader, ISubMenusHeader } from "../types/riotgames.interface";

const menuData: IMenusHeader[] = [
  {
    title: "Who We Are",
    subMenuData: [
      { title: "About Riot", href: "#" },
      { title: "Diversity & Inclusion", href: "#" },
      { title: "Social Impact", href: "#" },
    ],
  },
  {
    title: "Work with us",
    subMenuData: [
      { title: "Jobs", href: "#" },
      { title: "Benefits", href: "#" },
      { title: "Life at Riot", href: "#" },
    ],
  },
  { title: "News", href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 flex h-20 w-full items-center justify-between px-5 transition-colors duration-300 ease-in-out md:px-10 ${
          isScrolled ? "bg-[#111]" : "bg-transparent"
        }`}
      >
        <div className="flex h-auto items-center">
          <div className="group relative flex cursor-pointer items-center">
            {/* Logo Riot Games */}
            <img
              src="imgs/riotgames/header/riotgames-white.png"
              alt="Riot Games White"
              className={`${isMenuOpen ? "hidden" : ""} h-10 w-24 object-contain duration-300`}
            />
            <img
              src="imgs/riotgames/header/riotgames-red.png"
              alt="Riot Games Red"
              className="absolute left-0 top-0 h-10 w-24 object-contain opacity-0 duration-300 ease-out group-hover:opacity-100"
            />
            {/* Arrow Down */}
            <img
              src="imgs/riotgames/header/arrow-down-white.png"
              alt="Arrow Down White"
              className={`${isMenuOpen ? "hidden" : ""} ml-3 object-cover duration-300`}
            />
            <img
              src="imgs/riotgames/header/arrow-down-red.png"
              alt="Arrow Down Red"
              className="absolute right-0 ml-3 object-cover opacity-0 duration-300 ease-out group-hover:opacity-100"
            />
          </div>

          {/* Icon Riot Games */}
          <Link href="#">
            <img
              src="imgs/riotgames/header/riotgames-icon.png"
              alt="Riot Games Icon"
              className={`${isMenuOpen ? "" : "ml-7"} h-10 w-10 object-cover`}
            />
          </Link>
        </div>

        <img
          src={`imgs/riotgames/header/${isMenuOpen ? "close" : "menu"}.png`}
          alt="menu"
          className="cursor-pointer object-cover"
          onClick={handleMenuToggle}
        />
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } h-screen w-full bg-[#1f1f1f] md:w-1/2`}
      >
        {/* Menu */}
        <div className="mx-auto flex h-auto flex-col pt-20">
          {menuData.map((menuItem: IMenusHeader, index: number) => (
            <div key={index}>
              <Link
                href="#"
                className="mx-4 my-2 flex items-center justify-between rounded-lg px-[18px] py-[12px] duration-300 ease-in-out hover:bg-[#80808033]"
                onClick={() => handleSubMenuToggle(index)}
              >
                <p className="font-semibold uppercase text-[#f9f9f9]">
                  {menuItem.title}
                </p>
                {menuItem.subMenuData && (
                  <img
                    src={`imgs/riotgames/header/arrow-${
                      openSubMenu === index ? "up" : "down"
                    }-white.png`}
                    alt="Arrow"
                    className="object-cover"
                  />
                )}
              </Link>

              {/* Submenu */}
              {openSubMenu === index && menuItem.subMenuData && (
                <div className="flex flex-col">
                  {menuItem.subMenuData.map(
                    (subMenuItem: ISubMenusHeader, index: number) => (
                      <Link
                        key={index}
                        href={subMenuItem.href}
                        className="mx-4 my-2 rounded-lg px-[18px] duration-300 ease-in-out hover:bg-[#80808033]"
                      >
                        <p className="py-2 font-bold text-[#fcfcfc]">
                          {subMenuItem.title}
                        </p>
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mx-auto mt-5 flex h-9 max-w-[185px] items-center rounded-full border border-white px-5 py-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1f1f1f] text-xs font-bold uppercase text-white outline-none"
          />
          <img
            src="imgs/riotgames/header/glass.png"
            alt="Search Icon"
            className="ml-2 h-5 w-5"
          />
        </div>

        {/* Button Sign In */}
        <div className="mx-auto mt-10 max-w-[450px] rounded-2xl bg-[#d13639]">
          <Link
            href="#"
            className="flex justify-center p-2 text-xs font-bold uppercase"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
