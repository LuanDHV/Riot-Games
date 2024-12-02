"use client";
import Link from "next/link";
import { useState } from "react";
import { ISubMenusHeader } from "../riotgames/types/interface";

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

type MenuLeftProps = {
  isMenuLeftOpen: boolean;
  handleMenuLeftToggle: () => void;
};

export default function MenuLeft({
  isMenuLeftOpen,
  handleMenuLeftToggle,
}: MenuLeftProps) {
  const [openSubMenuLeft, setOpenSubMenuLeft] = useState<number | null>(null);

  const handleSubMenuLeftToggle = (index: number) => {
    setOpenSubMenuLeft(openSubMenuLeft === index ? null : index);
  };
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
    </>
  );
}
