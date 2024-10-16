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
      {/* Menu Desktop */}
      <div
        className={`fixed z-50 flex h-20 w-full items-center justify-between px-5 transition-colors duration-300 ease-in-out md:px-10 ${
          isScrolled ? "bg-[#111111]" : "bg-transparent"
        }`}
      >
        <div className="flex">
          {/* Logo Riot Games & Arrow Down */}
          <div className="group relative flex cursor-pointer items-center">
            {/* Logo Riot Games */}
            <img
              src="imgs/riotgames/header/riotgames-white.png"
              alt="Riot Games White"
              className="h-10 w-24 object-contain duration-300"
            />
            <img
              src="imgs/riotgames/header/riotgames-red.png"
              alt="Riot Games Red"
              className="absolute left-0 h-10 w-24 object-contain opacity-0 duration-300 ease-out group-hover:opacity-100"
            />

            {/* Arrow Down */}
            <img
              src="imgs/riotgames/header/arrow-down-white.png"
              alt="Arrow Down White"
              className="ml-3 object-cover duration-300"
            />
            <img
              src="imgs/riotgames/header/arrow-down-red.png"
              alt="Arrow Down Red"
              className="absolute right-0 ml-3 object-cover opacity-0 duration-300 ease-out group-hover:opacity-100"
            />
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
            {menuData.map((menuItem: IMenusHeader, index: number) => (
              <div key={index} className="group relative flex items-center">
                <div className="flex h-20 cursor-pointer items-center">
                  <div className="relative flex items-center rounded-lg px-4 py-2 hover:bg-[#8080804d]">
                    <span className="text-sm font-bold uppercase text-[#f9f9f9]">
                      {menuItem.title}
                    </span>
                    {/* Show arrow if data sub menu is available*/}
                    {menuItem.subMenuData ? (
                      <img
                        src="imgs/riotgames/header/arrow-down-white.png"
                        alt="Arrow"
                        className="ml-3 object-cover"
                      />
                    ) : null}
                  </div>
                </div>

                {/* Dropdown Sub Menu */}
                {menuItem.subMenuData ? (
                  <div className="absolute left-0 top-16 hidden bg-[#292929] group-hover:block">
                    {/* Sub Menu Underline */}
                    <div className="hidden h-1 rounded-tl-[2px] rounded-tr-[2px] bg-[#d13639] group-hover:block"></div>
                    <ul className="mx-3 my-4 flex min-w-[200px] flex-col rounded-bl-[2px] rounded-br-[2px] bg-[#292929]">
                      {menuItem.subMenuData.map(
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
              className="flex justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-400 p-2 text-xs font-bold uppercase text-[#f9f9f9] duration-300 ease-in-out hover:brightness-125"
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
          onClick={handleMenuToggle}
        />
      </div>

      {/* Menu Mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
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
            src="imgs/riotgames/header/menu-close.png"
            alt="menu"
            className="cursor-pointer object-cover lg:hidden"
            onClick={handleMenuToggle}
          />
        </div>

        {/* Menu  */}
        <div className="mx-auto flex h-auto flex-col pt-5">
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
                {/* Show arrow if data sub menu is available*/}
                {menuItem.subMenuData ? (
                  <img
                    src={`imgs/riotgames/header/arrow-${
                      openSubMenu === index ? "up" : "down"
                    }-white.png`}
                    alt="Arrow"
                    className="object-cover"
                  />
                ) : null}
              </Link>

              {/* Sub Menu */}
              {openSubMenu === index && menuItem.subMenuData ? (
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
            className="flex justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-400 p-2 text-xs font-bold uppercase text-[#f9f9f9] duration-300 ease-in-out hover:brightness-125"
          >
            Sign In
          </Link>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed left-0 top-0 z-40 hidden h-screen w-[45%] bg-black opacity-50 md:block"
            onClick={handleMenuToggle}
          ></div>
        )}
      </div>
    </>
  );
}
