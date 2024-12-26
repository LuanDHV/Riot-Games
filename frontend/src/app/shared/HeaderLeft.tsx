"use client";
import Link from "next/link";
import { useState } from "react";
import {
  IHeaderData,
  IHeaderLeftProps,
  ISubHeaderData,
} from "./types/interface";

const HeaderData: IHeaderData[] = [
  {
    title: "Games",
    subHeader: [
      { title: "League of Legends", href: "/leagueoflegends" },
      { title: "Valorant", href: "/valorant" },
      { title: "TeamFight Tatic", href: "/teamfighttactics" },
      { title: "LoL: Wild Rift", href: "/wildrift" },
    ],
  },
  {
    title: "Forge",
    subHeader: [
      { title: "Conv/Rgence", href: "#" },
      { title: "Hextech Mayhem", href: "#" },
      { title: "The Mageseeker", href: "#" },
      { title: "Ruined King", href: "#" },
      { title: "Song Of Nunu", href: "#" },
      { title: "Riot Forge Games", href: "#" },
    ],
  },
  {
    title: "Esports",
    subHeader: [
      { title: "LoL Esposts", href: "#" },
      { title: "Valorant Esports", href: "#" },
    ],
  },
  {
    title: "Entertainment",
    subHeader: [
      { title: "Arcane", href: "/arcane" },
      { title: "Universe", href: "#" },
      { title: "Riot Games Music", href: "#" },
    ],
  },
  {
    title: "Business",
    subHeader: [
      { title: "Riot Games", href: "#" },
      { title: "Riot Merch", href: "#" },
      { title: "Riot Mobile", href: "#" },
      { title: "Riot Support", href: "#" },
    ],
  },
];

export default function HeaderLeft({
  isHeaderLeftOpen,
  handleHeaderLeftToggle,
}: IHeaderLeftProps) {
  const [openSubHeaderLeft, setOpenSubHeaderLeft] = useState<number | null>(
    null,
  );

  const handleSubHeaderLeftToggle = (index: number) => {
    setOpenSubHeaderLeft(openSubHeaderLeft === index ? null : index);
  };
  return (
    <>
      {/* Header Left Desktop */}
      <div
        className={`${
          isHeaderLeftOpen ? "lg:block" : "lg:hidden"
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
              onClick={handleHeaderLeftToggle}
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
            src="imgs/riotgames/header/header-close-black.png"
            alt="Header Close"
            className="hidden h-8 w-8 cursor-pointer object-contain lg:block"
            onClick={handleHeaderLeftToggle}
          />
        </div>

        <div className="flex h-auto w-full flex-row gap-4">
          {/* Data */}
          <div className="flex w-1/2 gap-4 uppercase">
            <div className="flex w-full flex-col">
              <div className="pb-4">
                <p className="rounded-lg bg-[#bababa1a] px-4 py-2 text-sm font-bold text-[#0a0a0a]">
                  {HeaderData[0].title}
                </p>
                {HeaderData[0].subHeader?.map((subItem, subIndex) => (
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
                  {HeaderData[1].title}
                </p>
                {HeaderData[1].subHeader?.map((subItem, subIndex) => (
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
                  {HeaderData[1].title}
                </p>
                {HeaderData[1].subHeader?.map((subItem, subIndex) => (
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
                  {HeaderData[2].title}
                </p>
                {HeaderData[2].subHeader?.map((subItem, subIndex) => (
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
                  {HeaderData[2].title}
                </p>
                {HeaderData[2].subHeader?.map((subItem, subIndex) => (
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
                  {HeaderData[3].title}
                </p>
                {HeaderData[3].subHeader?.map((subItem, subIndex) => (
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
                  {HeaderData[4].title}
                </p>
                {HeaderData[4].subHeader?.map((subItem, subIndex) => (
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
        {isHeaderLeftOpen && (
          <div
            className="fixed bottom-0 left-0 z-40 h-1/2 w-full bg-black opacity-50 lg:block lg:h-[35%] xl:h-[45%]"
            onClick={handleHeaderLeftToggle}
          ></div>
        )}
      </div>

      {/* Header Left Mobile */}
      <div
        className={`${
          isHeaderLeftOpen ? "block" : "hidden"
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
              onClick={handleHeaderLeftToggle}
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
            src="imgs/riotgames/header/header-close-black.png"
            alt="Header Close"
            className="cursor-pointer object-contain lg:hidden"
            onClick={handleHeaderLeftToggle}
          />
        </div>

        {/* Data */}
        <div className="mt-5 flex flex-col gap-3">
          {HeaderData.map((HeaderItems, index: number) => (
            <div
              key={index}
              className={`${
                openSubHeaderLeft === index
                  ? "bg-[#1f1f1f] text-[#fcfcfc]"
                  : "bg-[#bababa1a] text-[#0a0a0a]"
              } rounded-lg duration-300 ease-in-out`}
            >
              {/* Main Header item */}
              <div
                className="flex cursor-pointer justify-between rounded-lg p-3"
                onClick={() => handleSubHeaderLeftToggle(index)}
              >
                <p className="font-bold uppercase">{HeaderItems.title}</p>
                <img
                  src={`imgs/riotgames/header/arrow-${
                    openSubHeaderLeft === index ? "up" : "down"
                  }-grey.png`}
                  alt={`Arrow ${openSubHeaderLeft === index ? "UP" : "DOWN"}`}
                  className="object-contain"
                />
              </div>

              {/* Sub Header */}
              {openSubHeaderLeft === index && HeaderItems.subHeader ? (
                <div className="flex flex-col bg-white p-3">
                  {HeaderItems.subHeader.map(
                    (subHeaderItems: ISubHeaderData, index: number) => (
                      <Link
                        key={index}
                        href={subHeaderItems.href}
                        className="my-3 cursor-pointer rounded-lg px-4 py-2 uppercase text-[#4a4a4a] hover:bg-[#bababa4d]"
                      >
                        <span className=""> {subHeaderItems.title}</span>
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
        {isHeaderLeftOpen && (
          <div
            className="fixed right-0 top-0 z-40 hidden h-screen w-[45%] bg-black opacity-50 md:block"
            onClick={handleHeaderLeftToggle}
          ></div>
        )}
      </div>
    </>
  );
}
