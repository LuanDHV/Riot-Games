"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IMenusHeader, ISubMenusHeader } from "../riotgames/types/interface";

const menuLeft = [
  {
    title: "Games",
    subMenuLeft: [
      { title: "League of Legends", img: "", href: "#" },
      { title: "Valorant", img: "", href: "#" },
      { title: "TeamFight Tatic", img: "", href: "#" },
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
  const [openSubMenuLeft, setOpenSubMenuLeft] = useState<number | null>(null);
  const [openSubMenuRight, setOpenSubMenuRight] = useState<number | null>(null);

  const handleMenuLeftToggle = () => {
    setIsMenuLeftOpen(!isMenuLeftOpen);
    console.log("menu change");
  };

  const handleMenuRightToggle = () => {
    setIsMenuRightOpen(!isMenuRightOpen);
    setIsMenuLeftOpen(false);
  };

  const handleSubMenuLeftToggle = (index: number) => {
    setOpenSubMenuLeft(openSubMenuLeft === index ? null : index);
  };

  const handleSubMenuRightToggle = (index: number) => {
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
      <div
        className={`${
          isMenuLeftOpen ? "lg:block" : "lg:hidden"
        } fixed left-0 z-50 hidden w-full bg-white px-8 lg:block lg:h-[65%] xl:h-[55%]`}
      >
        {/* Logo Riot Games & Arrow Up */}
        <div className="flex items-center justify-between">
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
            className="hidden h-8 w-8 cursor-pointer object-contain lg:block"
            onClick={handleMenuLeftToggle}
          />
        </div>

        <div className="flex h-auto w-full flex-row gap-4">
          {/* Data */}
          <div className="flex w-1/2 gap-4 uppercase">
            <div className="flex w-full flex-col">
              <div className="pb-4">
                <p className="rounded-lg bg-[#bababa1a] px-4 py-2 text-sm font-bold text-[#0a0a0a]">
                  {menuLeft[0].title}
                </p>
                {menuLeft[0].subMenuLeft.map((subItem, subIndex) => (
                  <Link
                    href={subItem.href}
                    key={subIndex}
                    className="my-1 block cursor-pointer rounded-lg px-4 py-2 text-sm font-light text-[#4a4a4a] duration-300 ease-in-out hover:bg-[#bababa4d]"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>

              <div className="lg:block xl:hidden">
                <p className="rounded-lg bg-[#bababa1a] px-4 py-2 text-sm font-bold text-[#0a0a0a]">
                  {menuLeft[1].title}
                </p>
                {menuLeft[1].subMenuLeft.map((subItem, subIndex) => (
                  <Link
                    href={subItem.href}
                    key={subIndex}
                    className="my-1 block cursor-pointer rounded-lg px-4 py-2 text-sm font-light text-[#4a4a4a] duration-300 ease-in-out hover:bg-[#bababa4d]"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col lg:hidden xl:block">
              <div className="pb-4">
                <p className="rounded-lg bg-[#bababa1a] px-4 py-2 text-sm font-bold text-[#0a0a0a]">
                  {menuLeft[1].title}
                </p>
                {menuLeft[1].subMenuLeft.map((subItem, subIndex) => (
                  <Link
                    href={subItem.href}
                    key={subIndex}
                    className="my-1 block cursor-pointer rounded-lg px-4 py-2 text-sm font-light text-[#4a4a4a] duration-300 ease-in-out hover:bg-[#bababa4d]"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>

              <div className="">
                <p className="rounded-lg bg-[#bababa1a] px-4 py-2 text-sm font-bold text-[#0a0a0a]">
                  {menuLeft[2].title}
                </p>
                {menuLeft[2].subMenuLeft.map((subItem, subIndex) => (
                  <Link
                    href={subItem.href}
                    key={subIndex}
                    className="my-1 block cursor-pointer rounded-lg px-4 py-2 text-sm font-light text-[#4a4a4a] duration-300 ease-in-out hover:bg-[#bababa4d]"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col">
              <div className="pb-4 xl:hidden">
                <p className="rounded-lg bg-[#bababa1a] px-4 py-2 text-sm font-bold text-[#0a0a0a]">
                  {menuLeft[2].title}
                </p>
                {menuLeft[2].subMenuLeft.map((subItem, subIndex) => (
                  <Link
                    href={subItem.href}
                    key={subIndex}
                    className="my-1 block cursor-pointer rounded-lg px-4 py-2 text-sm font-light text-[#4a4a4a] duration-300 ease-in-out hover:bg-[#bababa4d]"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>

              <div className="pb-4">
                <p className="rounded-lg bg-[#bababa1a] px-4 py-2 text-sm font-bold text-[#0a0a0a]">
                  {menuLeft[3].title}
                </p>
                {menuLeft[3].subMenuLeft.map((subItem, subIndex) => (
                  <Link
                    href={subItem.href}
                    key={subIndex}
                    className="my-1 block cursor-pointer rounded-lg px-4 py-2 text-sm font-light text-[#4a4a4a] duration-300 ease-in-out hover:bg-[#bababa4d]"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>

              <div>
                <p className="rounded-lg bg-[#bababa1a] px-4 py-2 text-sm font-bold text-[#0a0a0a]">
                  {menuLeft[4].title}
                </p>
                {menuLeft[4].subMenuLeft.map((subItem, subIndex) => (
                  <Link
                    href={subItem.href}
                    key={subIndex}
                    className="my-1 block cursor-pointer rounded-lg px-4 py-2 text-sm font-light text-[#4a4a4a] duration-300 ease-in-out hover:bg-[#bababa4d]"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Default Thumb */}
          <div className="flex w-1/2 flex-row gap-4">
            <Link href="#" className="cursor-pointer">
              <img
                src="/imgs/riotgames/header/tft-thumb.png"
                alt=""
                className="rounded-lg object-cover"
              />
              <p className="mt-4 text-sm font-light text-[#0a0a0a]">
                Conjure up some chaos and master your magic in TFT’s latest set.
              </p>
            </Link>
            <Link href="#" className="cursor-pointer">
              <img
                src="/imgs/riotgames/header/vlr-thumb.png"
                alt=""
                className="rounded-lg object-cover"
              />
              <p className="mt-4 text-sm font-light text-[#0a0a0a]">
                Defy your limits with VALORANT // Live on Xbox Series X|S,
                PS5®, and PC.
              </p>
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMenuLeftOpen && (
          <div
            className="fixed bottom-0 left-0 z-40 h-1/2 w-full bg-black opacity-50 lg:block lg:h-[35%] xl:h-[45%]"
            onClick={handleMenuLeftToggle}
          ></div>
        )}
      </div>

      {/* Menu Left Mobile */}
      <div
        className={`${
          isMenuLeftOpen ? "block" : "hidden"
        } fixed left-0 z-50 h-screen w-full overflow-y-auto bg-white px-4 md:w-[55%] lg:hidden`}
      >
        {/* Logo Riot Games & Arrow Up */}
        <div className="flex items-center justify-between">
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

        {/* Data */}
        <div className="mt-5 flex flex-col gap-3">
          {menuLeft.map((menuItems, index: number) => (
            <div
              key={index}
              className={`${
                openSubMenuLeft === index
                  ? "bg-[#1f1f1f] text-[#fcfcfc]"
                  : "bg-[#bababa1a] text-[#0a0a0a]"
              } rounded-lg duration-300 ease-in-out`}
            >
              {/* Main menu item */}
              <div
                className="flex cursor-pointer justify-between rounded-lg p-3"
                onClick={() => handleSubMenuLeftToggle(index)}
              >
                <p className="font-bold uppercase">{menuItems.title}</p>
                <img
                  src={`imgs/riotgames/header/arrow-${
                    openSubMenuLeft === index ? "up" : "down"
                  }-grey.png`}
                  alt={`Arrow ${openSubMenuLeft === index ? "UP" : "DOWN"}`}
                  className="object-contain"
                />
              </div>

              {/* Sub Menu */}
              {openSubMenuLeft === index && menuItems.subMenuLeft ? (
                <div className="flex flex-col bg-white p-3">
                  {menuItems.subMenuLeft.map(
                    (subMenuItems: ISubMenusHeader, index: number) => (
                      <Link
                        key={index}
                        href={subMenuItems.href}
                        className="my-3 cursor-pointer rounded-lg px-4 py-2 uppercase text-[#4a4a4a] hover:bg-[#bababa4d]"
                      >
                        <span className=""> {subMenuItems.title}</span>
                      </Link>
                    ),
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Default Thumb */}
        <div className="mb-5 mt-10 flex flex-col gap-4">
          <Link href="#" className="cursor-pointer">
            <img
              src="/imgs/riotgames/header/tft-thumb.png"
              alt=""
              className="h-full w-full rounded-lg object-cover"
            />
            <p className="mt-4 text-sm font-light text-[#0a0a0a]">
              Conjure up some chaos and master your magic in TFT’s latest set.
            </p>
          </Link>
          <Link href="#" className="cursor-pointer">
            <img
              src="/imgs/riotgames/header/vlr-thumb.png"
              alt=""
              className="h-full w-full rounded-lg object-cover"
            />
            <p className="mt-4 text-sm font-light text-[#0a0a0a]">
              Defy your limits with VALORANT // Live on Xbox Series X|S, PS5®,
              and PC.
            </p>
          </Link>
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
            {menuRight.map((menuItems: IMenusHeader, index: number) => (
              <div key={index} className="group relative flex items-center">
                <div className="flex h-20 cursor-pointer items-center">
                  <div className="relative flex items-center rounded-lg px-4 py-2 hover:bg-[#8080804d]">
                    <a
                      href={menuItems.href}
                      className="text-sm font-bold uppercase text-[#f9f9f9]"
                    >
                      {menuItems.title}
                    </a>
                    {/* Show arrow if data sub menu is available */}
                    {menuItems.subMenuRight ? (
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
                {menuItems.subMenuRight ? (
                  <div className="absolute top-[72px] hidden bg-[#292929] group-hover:block">
                    <ul className="mx-3 my-4 flex min-w-[200px] flex-col rounded-bl-[2px] rounded-br-[2px] bg-[#292929]">
                      {menuItems.subMenuRight.map(
                        (subMenuItems: ISubMenusHeader, subIndex: number) => (
                          <li
                            key={subIndex}
                            className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-[#c7c7c7] hover:bg-[#8080804d]"
                          >
                            <Link href={subMenuItems.href}>
                              {subMenuItems.title}
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
          {menuRight.map((menuItems: IMenusHeader, index: number) => (
            <div key={index}>
              <Link
                href="#"
                className="mx-4 my-2 flex items-center justify-between rounded-lg px-[18px] py-[12px] duration-300 ease-in-out hover:bg-[#80808033]"
                onClick={() => handleSubMenuRightToggle(index)}
              >
                <p className="font-semibold uppercase text-[#f9f9f9]">
                  {menuItems.title}
                </p>
                {/* Show arrow if data sub menu is available*/}
                {menuItems.subMenuRight ? (
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
              {openSubMenuRight === index && menuItems.subMenuRight ? (
                <div className="flex flex-col">
                  {menuItems.subMenuRight.map(
                    (subMenuItems: ISubMenusHeader, index: number) => (
                      <Link
                        key={index}
                        href={subMenuItems.href}
                        className="mx-4 my-2 rounded-lg px-[18px] duration-300 ease-in-out hover:bg-[#80808033]"
                      >
                        <p className="py-2 font-bold text-[#fcfcfc]">
                          {subMenuItems.title}
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
