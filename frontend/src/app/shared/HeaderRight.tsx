"use client";
import { useState } from "react";
import Link from "next/link";
import {
  IHeaderData,
  IHeaderRightProps,
  ISubHeaderData,
} from "./types/interface";
import { usePathname } from "next/navigation";

const riotgamesHeader: IHeaderData[] = [
  {
    icon: "/imgs/header/riotgames-header-icon.png",
    color: "#d13639",
    title: "Who We Are",
    subHeader: [
      { title: "About Riot", href: "#" },
      { title: "Diversity & Inclusion", href: "#" },
      { title: "Social Impact", href: "#" },
    ],
  },
  {
    title: "Work with us",
    subHeader: [
      { title: "Jobs", href: "#" },
      { title: "Benefits", href: "#" },
      { title: "Life at Riot", href: "#" },
    ],
  },
  { title: "News", href: "#" },
];

const lolHeader: IHeaderData[] = [
  {
    icon: "/imgs/header/lol-header-icon.png",
    color: "#59c1de",
    title: "Games",
  },
  {
    title: "Champions",
    href: "#",
  },
  {
    title: "News",
    subHeader: [
      { title: "All", href: "#" },
      { title: "Game Updates", href: "#" },
      { title: "Esports", href: "#" },
      { title: "Dev", href: "#" },
      { title: "Lore", href: "#" },
      { title: "Media", href: "#" },
      { title: "Merch", href: "#" },
      { title: "Community", href: "#" },
      { title: "Riot Games", href: "#" },
    ],
  },
  {
    title: "Path Notes",
    href: "#",
  },
  {
    title: "Discover",
    subHeader: [
      { title: "Community", href: "#" },
      { title: "Hall of Legends", href: "#" },
      { title: "League Displays", href: "#" },
      { title: "Riot Mobile", href: "#" },
    ],
  },
  {
    title: "Esports",
    href: "#",
  },
  {
    title: "Universe",
    href: "#",
  },
  {
    title: "Shop",
    href: "#",
  },
  {
    title: "Support",
    href: "#",
  },
  {
    title: "PBE",
    href: "#",
  },
];

const valorantHeader: IHeaderData[] = [
  {
    icon: "/imgs/header/valorant-header-icon.png",
    color: "#ff4655",
    title: "Game Infor",
    subHeader: [
      { title: "Agents", href: "#" },
      { title: "Maps", href: "#" },
      { title: "Arsenal", href: "#" },
      { title: "Premier", href: "#" },
    ],
  },
  {
    title: "Media",
    href: "#",
  },
  {
    title: "News",
    href: "#",
  },
  {
    title: "LeaderBoards",
    href: "#",
  },
  {
    title: "Support",
    subHeader: [
      { title: "Specs", href: "#" },
      { title: "Support", href: "#" },
      { title: "Community Code", href: "#" },
    ],
  },
  {
    title: "Our Socials",
    subHeader: [
      { title: "X", href: "#" },
      { title: "Youtube", href: "#" },
      { title: "Instagram", href: "#" },
      { title: "TikTok", href: "#" },
      { title: "Facebook", href: "#" },
      { title: "Discord", href: "#" },
    ],
  },
  {
    title: "Esports",
    href: "#",
  },
  {
    title: "PBE SignUp",
    href: "#",
  },
];

const tftHeader: IHeaderData[] = [
  {
    icon: "/imgs/header/tft-header-icon.png",
    color: "#ff6807",
    title: "News",
    href: "#",
  },
  {
    title: "Set Overview",
    href: "#",
  },
  {
    title: "Labs",
    subHeader: [
      { title: "Double Up", href: "#" },
      { title: "Hyper Roll", href: "#" },
    ],
  },
];

const wildriftHeader: IHeaderData[] = [
  {
    icon: "/imgs/header/wildrift-header-icon.png",
    color: "#32c8ff",
    title: "Game Overview",
    href: "#",
  },
  {
    title: "News",
    href: "#",
  },
  {
    title: "Champions",
    href: "#",
  },
  {
    title: "Find Your Champion",
    href: "#",
  },
  {
    title: "Support",
    href: "#",
  },
  {
    title: "Socials",
    subHeader: [
      { title: "Facebook", href: "#" },
      { title: "Instagram", href: "#" },
      { title: "X", href: "#" },
      { title: "Youtube", href: "#" },
    ],
  },
];

const arcaneHeader: IHeaderData[] = [
  {
    icon: "/imgs/header/arcane-header-icon.svg",
    color: "#ede0ce",
    title: "News",
    href: "#",
  },
  {
    title: "Avatar Creator",
    href: "#",
  },
];

const riotmerchHeader: IHeaderData[] = [
  {
    title: "Shop All",
    href: "/riotmerch",
    icon: "/imgs/header/riotgames-header-icon.png",
    color: "#d13639",
  },
  {
    title: "Categories",
    subHeader: [
      { title: "League of Legends", href: "#" },
      { title: "Valorant", href: "#" },
      { title: "Teamfight Tactics", href: "#" },
      { title: "Arcane", href: "#" },
    ],
  },
  {
    title: "Featured",
    subHeader: [
      { title: "Arcane", href: "#" },
      { title: "Worlds 2024", href: "#" },
      { title: "Valorant Buddies", href: "#" },
      { title: "VCT24 Champs Seoul", href: "#" },
    ],
  },
  { title: "Sale", href: "#" },
];

export default function HeaderRight({
  isScrolled,
  isHeaderRightOpen,
  handleHeaderRightToggle,
  handleHeaderLeftToggle,
}: IHeaderRightProps) {
  const [openSubHeaderRight, setOpenSubHeaderRight] = useState<number | null>(
    null,
  );

  const handleSubHeaderRightToggle = (index: number) => {
    setOpenSubHeaderRight(openSubHeaderRight === index ? null : index);
  };

  const pathname = usePathname();

  const CurrentHeader = pathname.startsWith("/riotgames")
    ? riotgamesHeader
    : pathname.startsWith("/leagueoflegends")
      ? lolHeader
      : pathname.startsWith("/valorant")
        ? valorantHeader
        : pathname.startsWith("/teamfighttactics")
          ? tftHeader
          : pathname.startsWith("/wildrift")
            ? wildriftHeader
            : pathname.startsWith("/arcane")
              ? arcaneHeader
              : pathname.startsWith("/riotmerch")
                ? riotmerchHeader
                : null;

  const currentIcon = CurrentHeader?.[0]?.icon || null;
  const currentColor = CurrentHeader?.[0]?.color || "#f9f9f9";

  if (!CurrentHeader) {
    return <div>Data Not Available</div>;
  }

  const isRiotGamesPage = pathname.startsWith("/riotgames");

  return (
    <>
      {/* Header Right Desktop */}
      <div
        className={`fixed z-40 flex h-20 w-full items-center justify-between px-4 transition-colors duration-300 ease-in-out lg:px-8 ${
          isRiotGamesPage
            ? isScrolled
              ? "bg-[#111111]"
              : "bg-transparent"
            : "bg-[#111111]"
        }`}
      >
        <div className="flex">
          {/* Logo Riot Games & Arrow Down */}
          <div className="group relative flex cursor-pointer items-center">
            {/* Logo Riot Games */}
            <img
              src="/imgs/riotgames/header/riotgames-white.png"
              alt="Riot Games"
              className="h-10 w-24 object-contain duration-300"
            />
            <img
              src="/imgs/riotgames/header/riotgames-red.png"
              alt="Riot Games"
              className="absolute h-10 w-24 object-contain opacity-0 duration-300 ease-out group-hover:opacity-100"
              onClick={handleHeaderLeftToggle}
            />

            {/* Arrow Down */}
            <div className="relative ml-3">
              <img
                src="/imgs/riotgames/header/arrow-down-white.png"
                alt="Arrow Down"
                className="object-cover duration-300"
              />
              <img
                src="/imgs/riotgames/header/arrow-down-red.png"
                alt="Arrow Down"
                className="absolute top-0 object-cover opacity-0 duration-300 ease-out group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Icon  */}
          <Link href="#" className="ml-7 flex items-center">
            {currentIcon ? (
              <img
                src={currentIcon}
                alt="Current Icon"
                className="h-[30px] w-[30px] object-cover"
              />
            ) : null}
          </Link>

          {/* Icon  & Header */}
          <div className="ml-7 hidden xl:flex">
            {/* Header */}
            {CurrentHeader?.map((HeaderItems: IHeaderData, index: number) => (
              <div key={index} className="group relative flex items-center">
                <div className="flex h-20 cursor-pointer items-center">
                  <div
                    className="relative flex items-center rounded-lg px-4 py-2 text-[#f9f9f9] group-hover:bg-[#8080804d]"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        currentColor;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#f9f9f9";
                    }}
                  >
                    <a
                      href={HeaderItems.href}
                      className="text-sm font-bold uppercase duration-300 ease-in-out"
                    >
                      {HeaderItems.title}
                    </a>
                    {/* Show arrow if data sub Header is available */}
                    {HeaderItems.subHeader ? (
                      <img
                        src="/imgs/riotgames/header/arrow-down-white.png"
                        alt="Arrow"
                        className="ml-3 object-cover"
                      />
                    ) : null}
                    {/* Sub Header Underline */}
                    <div
                      className="absolute -bottom-[14px] left-0 right-0 hidden h-1 rounded-sm group-hover:block"
                      style={{ backgroundColor: currentColor }}
                    ></div>
                  </div>
                </div>

                {/* Dropdown Sub Header */}
                {HeaderItems.subHeader ? (
                  <div className="absolute top-[72px] hidden bg-[#292929] group-hover:block">
                    <ul className="mx-3 my-4 flex min-w-[200px] flex-col rounded-bl-[2px] rounded-br-[2px] bg-[#292929]">
                      {HeaderItems.subHeader.map(
                        (subHeaderItems: ISubHeaderData, subIndex: number) => (
                          <li
                            key={subIndex}
                            className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-[#c7c7c7] hover:bg-[#8080804d]"
                          >
                            <Link href={subHeaderItems.href}>
                              {subHeaderItems.title}
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
              src="/imgs/riotgames/header/search-icon.png"
              alt="Search Icon"
              className="ml-2 h-5 w-5"
            />
          </div>

          {/* Button Sign In */}
          <div className="mx-auto w-full">
            <Link
              href="/signin"
              className="flex justify-center rounded-2xl p-2 text-xs font-bold uppercase text-[#f1111] duration-300 ease-in-out"
              style={{ backgroundColor: currentColor }}
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Header Open Mobile */}
        <img
          src="/imgs/riotgames/header/header-open.png"
          alt="Header"
          className="cursor-pointer object-cover lg:hidden"
          onClick={handleHeaderRightToggle}
        />
      </div>

      {/* Header Right Mobile */}
      <div
        className={`${
          isHeaderRightOpen ? "block" : "hidden"
        } fixed right-0 z-50 h-screen w-full bg-[#1f1f1f] md:w-[55%] lg:hidden`}
      >
        {/* Header Header */}
        <div className="flex h-20 items-center justify-between px-5">
          <Link href="#">
            <img
              src="/imgs/riotgames/header/riotgames-icon.png"
              alt="Riot Games Icon"
              className="object-cover"
            />
          </Link>
          <img
            src="/imgs/riotgames/header/header-close-white.png"
            alt="Header Close"
            className="cursor-pointer object-cover lg:hidden"
            onClick={handleHeaderRightToggle}
          />
        </div>

        {/* Header  */}
        <div className="mx-auto flex h-auto flex-col pt-5">
          {CurrentHeader?.map((HeaderItems: IHeaderData, index: number) => (
            <div key={index}>
              <Link
                href="#"
                className="mx-4 my-2 flex items-center justify-between rounded-lg px-[18px] py-[12px] duration-300 ease-in-out hover:bg-[#80808033]"
                onClick={() => handleSubHeaderRightToggle(index)}
              >
                <p className="font-semibold uppercase text-[#f9f9f9]">
                  {HeaderItems.title}
                </p>
                {/* Show arrow if data sub Header is available*/}
                {HeaderItems.subHeader ? (
                  <img
                    src={`/imgs/riotgames/header/arrow-${
                      openSubHeaderRight === index ? "up" : "down"
                    }-white.png`}
                    alt="Arrow"
                    className="object-cover"
                  />
                ) : null}
              </Link>

              {/* Sub Header */}
              {openSubHeaderRight === index && HeaderItems.subHeader ? (
                <div className="flex flex-col">
                  {HeaderItems.subHeader.map(
                    (subHeaderItems: ISubHeaderData, index: number) => (
                      <Link
                        key={index}
                        href={subHeaderItems.href}
                        className="mx-4 my-2 rounded-lg px-[18px] duration-300 ease-in-out hover:bg-[#80808033]"
                      >
                        <p className="py-2 font-bold text-[#fcfcfc]">
                          {subHeaderItems.title}
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
            src="/imgs/riotgames/header/search-icon.png"
            alt="Search Icon"
            className="ml-2 h-5 w-5"
          />
        </div>

        {/* Button Sign In */}
        <div className="mx-auto mt-10 w-full px-5">
          <Link
            href="#"
            className="flex justify-center rounded-2xl p-2 text-xs font-bold uppercase text-[#f1111] duration-300 ease-in-out"
            style={{ backgroundColor: currentColor }}
          >
            Sign In
          </Link>
        </div>

        {/* Overlay */}
        {isHeaderRightOpen && (
          <div
            className="fixed left-0 top-0 z-40 hidden h-screen w-[45%] bg-black opacity-50 md:block"
            onClick={handleHeaderRightToggle}
          ></div>
        )}
      </div>
    </>
  );
}
