"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IMenusHeader, ISubMenusHeader } from "../types/riotgames.interface";

const menuLeft = [
  {
    title: "Games",
    subMenuLeft: [
      { title: "League of Legends", img: "", href: "#" },
      { title: "Valorant", img: "", href: "#" },
      { title: "TeamFight Tatic", img: "", href: "#" },
      { title: "Legends Of Runeterra", img: "", href: "#" },
      { title: "LoL: Wild Rift", img: "", href: "#" },
    ],
  },
  {
    title: "Forge",
    subMenuLeft: [
      { title: "Conv/Rgence", img: "", href: "#" },
      { title: "Hextech Mayhem", img: "", href: "#" },
      { title: "The Mageseeker", img: "", href: "#" },
      { title: "Ruined King", img: "", href: "#" },
      { title: "Song Of Nunu", img: "", href: "#" },
      { title: "Riot Forge Games", img: "", href: "#" },
    ],
  },
  {
    title: "Esports",
    subMenuLeft: [
      { title: "LoL Esposts", img: "", href: "#" },
      { title: "Valorant Esports", img: "", href: "#" },
    ],
  },
  {
    title: "Entertainment",
    subMenuLeft: [
      { title: "Arcane", img: "", href: "#" },
      { title: "Universe", img: "", href: "#" },
      { title: "Riot Games Music", img: "", href: "#" },
    ],
  },
  {
    title: "Business",
    subMenuLeft: [
      { title: "Riot Games", img: "", href: "#" },
      { title: "Riot Merch", img: "", href: "#" },
      { title: "Riot Mobile", img: "", href: "#" },
      { title: "Riot Support", img: "", href: "#" },
    ],
  },
];

const menuRight: IMenusHeader[] = [
  {
    title: "Who We Are",
    subMenuRight: [
      { title: "About Riot", href: "#" },
      { title: "Diversity & Inclusion", href: "#" },
      { title: "Social Impact", href: "#" },
    ],
  },
  {
    title: "Work with us",
    subMenuRight: [
      { title: "Jobs", href: "#" },
      { title: "Benefits", href: "#" },
      { title: "Life at Riot", href: "#" },
    ],
  },
  { title: "News", href: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuLeftOpen, setIsMenuLeftOpen] = useState(false);
  const [isMenuRightOpen, setIsMenuRightOpen] = useState(false);
  const [openSubMenuRight, setOpenSubMenuRight] = useState<number | null>(null);

  const handleMenuLeftToggle = () => {
    setIsMenuLeftOpen(!isMenuLeftOpen);
  };

  const handleMenuRightToggle = () => {
    setIsMenuRightOpen(!isMenuRightOpen);
    setIsMenuLeftOpen(false);
  };

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenuRight(openSubMenuRight === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Menu Left Desktop */}

      {/* Menu Left Mobile */}
      <div
        className={`${
          isMenuLeftOpen ? "block" : "hidden"
        } fixed left-0 z-50 h-screen w-full bg-white md:w-[55%] lg:hidden`}
      >
        <div className="flex items-center justify-between px-4">
          {/* Logo Riot Games & Arrow Down */}
          <div className="group relative flex h-20 cursor-pointer items-center">
            {/* Logo Riot Games */}
            <img
              src="imgs/riotgames/header/riotgames-black.png"
              alt="Riot Games"
              className="h-10 w-24 object-contain duration-300"
            />
            <img
              src="imgs/riotgames/header/riotgames-red.png"
              alt="Riot Games"
              className="absolute h-10 w-24 object-contain opacity-0 duration-300 ease-out group-hover:opacity-100"
              onClick={handleMenuLeftToggle}
            />

            {/* Arrow Up */}
            <div className="relative ml-3">
              <img
                src="imgs/riotgames/header/arrow-up-black.png"
                alt="Arrow Up"
                className="object-cover duration-300"
              />
              <img
                src="imgs/riotgames/header/arrow-up-red.png"
                alt="Arrow Up"
                className="absolute top-0 object-cover opacity-0 duration-300 ease-out group-hover:opacity-100"
              />
            </div>
          </div>
          <img
            src="imgs/riotgames/header/menu-close-black.png"
            alt="menu-close"
            className="cursor-pointer object-contain lg:hidden"
            onClick={handleMenuLeftToggle}
          />
        </div>
        {/* Overlay */}
        {isMenuLeftOpen && (
          <div
            className="fixed right-0 top-0 z-40 hidden h-screen w-[45%] bg-black opacity-50 md:block"
            onClick={handleMenuLeftToggle}
          ></div>
        )}
      </div>

      {/* Menu Right Desktop */}
      <div
        className={`fixed z-40 flex h-20 w-full items-center justify-between px-4 transition-colors duration-300 ease-in-out lg:px-8 ${
          isScrolled ? "bg-[#111111]" : "bg-transparent"
        }`}
      >
        <div className="flex">
          {/* Logo Riot Games & Arrow Down */}
          <div className="group relative flex cursor-pointer items-center">
            {/* Logo Riot Games */}
            <img
              src="imgs/riotgames/header/riotgames-white.png"
              alt="Riot Games"
              className="h-10 w-24 object-contain duration-300"
            />
            <img
              src="imgs/riotgames/header/riotgames-red.png"
              alt="Riot Games"
              className="absolute h-10 w-24 object-contain opacity-0 duration-300 ease-out group-hover:opacity-100"
              onClick={handleMenuLeftToggle}
            />

            {/* Arrow Down */}
            <div className="relative ml-3">
              <img
                src="imgs/riotgames/header/arrow-down-white.png"
                alt="Arrow Down"
                className="object-cover duration-300"
              />
              <img
                src="imgs/riotgames/header/arrow-down-red.png"
                alt="Arrow Down"
                className="absolute top-0 object-cover opacity-0 duration-300 ease-out group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Icon Riot Games & Menu */}
          <div className="ml-7 hidden items-center justify-start gap-2 lg:flex">
            {/* Icon Riot Games */}
            <Link href="#">
              <img
                src="imgs/riotgames/header/riotgames-icon.png"
                alt="Riot Games Icon"
                className="object-cover"
              />
            </Link>

            {/* Menu */}
            {menuRight.map((menuItem: IMenusHeader, index: number) => (
              <div key={index} className="group relative flex items-center">
                <div className="flex h-20 cursor-pointer items-center">
                  <div className="relative flex items-center rounded-lg px-4 py-2 hover:bg-[#8080804d]">
                    <span className="text-sm font-bold uppercase text-[#f9f9f9]">
                      {menuItem.title}
                    </span>
                    {/* Show arrow if data sub menu is available */}
                    {menuItem.subMenuRight ? (
                      <img
                        src="imgs/riotgames/header/arrow-down-white.png"
                        alt="Arrow"
                        className="ml-3 object-cover"
                      />
                    ) : null}
                    {/* Sub Menu Underline */}
                    <div className="absolute -bottom-[14px] left-0 right-0 hidden h-1 rounded-sm bg-[#d13639] group-hover:block"></div>
                  </div>
                </div>

                {/* Dropdown Sub Menu */}
                {menuItem.subMenuRight ? (
                  <div className="absolute top-[72px] hidden bg-[#292929] group-hover:block">
                    <ul className="mx-3 my-4 flex min-w-[200px] flex-col rounded-bl-[2px] rounded-br-[2px] bg-[#292929]">
                      {menuItem.subMenuRight.map(
                        (subMenuItem: ISubMenusHeader, subIndex: number) => (
                          <li
                            key={subIndex}
                            className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-[#c7c7c7] hover:bg-[#8080804d]"
                          >
                            <Link href={subMenuItem.href}>
                              {subMenuItem.title}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar &  Button Sign In */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* Search Bar */}
          <div
            className={`${
              isScrolled ? "bg-[#2b2a29]" : "border border-white bg-[#1f1f1f]"
            } flex h-9 min-w-[185px] items-center rounded-full px-5 py-1`}
          >
            <input
              type="text"
              placeholder="Search"
              className={`${
                isScrolled ? "bg-[#2b2a29]" : "bg-[#1f1f1f]"
              } w-full text-xs font-bold uppercase text-white outline-none`}
            />
            <img
              src="imgs/riotgames/header/search-icon.png"
              alt="Search Icon"
              className="ml-2 h-5 w-5"
            />
          </div>

          {/* Button Sign In */}
          <div className="mx-auto w-full">
            <Link
              href="#"
              className="flex justify-center rounded-2xl bg-[#d13639] p-2 text-xs font-bold uppercase text-[#f1111] duration-300 ease-in-out"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Menu Open Mobile */}
        <img
          src="imgs/riotgames/header/menu-open.png"
          alt="menu"
          className="cursor-pointer object-cover lg:hidden"
          onClick={handleMenuRightToggle}
        />
      </div>

      {/* Menu Right Mobile */}
      <div
        className={`${
          isMenuRightOpen ? "block" : "hidden"
        } fixed right-0 z-50 h-screen w-full bg-[#1f1f1f] md:w-[55%] lg:hidden`}
      >
        {/* Header Menu */}
        <div className="flex h-20 items-center justify-between px-5">
          <Link href="#">
            <img
              src="imgs/riotgames/header/riotgames-icon.png"
              alt="Riot Games Icon"
              className="object-cover"
            />
          </Link>
          <img
            src="imgs/riotgames/header/menu-close-white.png"
            alt="menu-close"
            className="cursor-pointer object-cover lg:hidden"
            onClick={handleMenuRightToggle}
          />
        </div>

        {/* Menu  */}
        <div className="mx-auto flex h-auto flex-col pt-5">
          {menuRight.map((menuItem: IMenusHeader, index: number) => (
            <div key={index}>
              <Link
                href="#"
                className="mx-4 my-2 flex items-center justify-between rounded-lg px-[18px] py-[12px] duration-300 ease-in-out hover:bg-[#80808033]"
                onClick={() => handleSubMenuToggle(index)}
              >
                <p className="font-semibold uppercase text-[#f9f9f9]">
                  {menuItem.title}
                </p>
                {/* Show arrow if data sub menu is available*/}
                {menuItem.subMenuRight ? (
                  <img
                    src={`imgs/riotgames/header/arrow-${
                      openSubMenuRight === index ? "up" : "down"
                    }-white.png`}
                    alt="Arrow"
                    className="object-cover"
                  />
                ) : null}
              </Link>

              {/* Sub Menu */}
              {openSubMenuRight === index && menuItem.subMenuRight ? (
                <div className="flex flex-col">
                  {menuItem.subMenuRight.map(
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
              ) : null}
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div
          className={`${
            isScrolled ? "bg-[#2b2a29]" : "border border-white bg-[#1f1f1f]"
          } mx-auto mt-5 flex h-9 max-w-[185px] items-center rounded-full px-5 py-1`}
        >
          <input
            type="text"
            placeholder="Search"
            className={`${
              isScrolled ? "bg-[#2b2a29]" : "bg-[#1f1f1f]"
            } w-full text-xs font-bold uppercase text-white outline-none`}
          />
          <img
            src="imgs/riotgames/header/search-icon.png"
            alt="Search Icon"
            className="ml-2 h-5 w-5"
          />
        </div>

        {/* Button Sign In */}
        <div className="mx-auto mt-10 w-full px-5">
          <Link
            href="#"
            className="flex justify-center rounded-2xl bg-[#d13639] p-2 text-xs font-bold uppercase text-[#f1111] duration-300 ease-in-out"
          >
            Sign In
          </Link>
        </div>

        {/* Overlay */}
        {isMenuRightOpen && (
          <div
            className="fixed left-0 top-0 z-40 hidden h-screen w-[45%] bg-black opacity-50 md:block"
            onClick={handleMenuRightToggle}
          ></div>
        )}
      </div>
    </>
  );
}
