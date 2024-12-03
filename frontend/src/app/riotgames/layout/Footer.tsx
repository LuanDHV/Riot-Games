"use client";
import Link from "next/link";
import useScrollToTop from "../../hooks/useScrollToTop";
import { IFooterData, ISocialIcons } from "../types/interface";

export default function Footer() {
  const FooterData: IFooterData[] = [
    { title: "Press", link: "#" },
    { title: "Security", link: "#" },
    { title: "Legal", link: "#" },
    { title: "Leadership", link: "#" },
    { title: "Candidate Privacy", link: "#" },
    { title: "Terms of Service", link: "#" },
    { title: "Privacy Notice", link: "#" },
    { title: "Player Support", link: "#" },
    { title: "E-Verify", link: "#" },
    { title: "Accessibility", link: "#" },
    { title: "Annual Reports", link: "#" },
  ];

  const socialIconsData: ISocialIcons[] = [
    {
      icon: "/imgs/footer/x-icon.png",
      alt: "X",
      link: "#",
    },
    {
      icon: "/imgs/footer/instagram-icon.png",
      alt: "Instagram",
      link: "#",
    },
    {
      icon: "/imgs/footer/tiktok-icon.png",
      alt: "TikTok",
      link: "#",
    },
    {
      icon: "/imgs/footer/linkedin-icon.png",
      alt: "LinkedIn",
      link: "#",
    },
    {
      icon: "/imgs/footer/facebook-icon.png",
      alt: "Facebook",
      link: "#",
    },
    {
      icon: "/imgs/footer/youtube-icon.png",
      alt: "YouTube",
      link: "#",
    },
  ];

  return (
    <div className="h-auto w-full bg-[#252423] px-5 pb-10 pt-[60px] lg:pb-5 lg:pt-0">
      <div className="mx-auto max-w-[1440px]">
        <div className="justify-between lg:flex lg:py-10">
          <div className="flex flex-col items-center lg:flex-row lg:gap-5">
            {/* Riot Games Icon */}
            <div className="group relative mx-auto h-auto w-10 cursor-pointer">
              <img
                src="/imgs/riotgames/footer/icon-riotgames-white.png"
                alt="Riot Games Icon"
                className="h-10 w-10 object-contain"
              />
              <img
                src="/imgs/riotgames/footer/icon-riotgames-red.png"
                alt="Riot Games Icon Red"
                className="absolute left-0 top-0 h-10 w-10 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            {/* Links */}
            <ul
              className="flex flex-col items-center justify-center pt-[30px] md:flex-row md:flex-wrap lg:justify-start lg:pt-0"
              style={{ width: "calc(100% - 40px)" }}
            >
              {FooterData.map((items: IFooterData, index: number) => (
                <li className="py-2" key={index}>
                  <Link
                    href={items.link}
                    className="mt-[5px] p-[10px] text-[11px] font-extrabold uppercase text-white hover:underline md:mt-0"
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Network Icons */}
          <div className="flex justify-center pb-[30px] pt-5 lg:pb-0 lg:pt-0">
            {socialIconsData.map((items: ISocialIcons, index: number) => (
              <Link
                href={items.link}
                key={index}
                className="relative flex h-10 w-10 items-center justify-center"
              >
                <img
                  src={items.icon}
                  alt={items.alt}
                  className="absolute h-4 w-4 object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Dividing line */}
        <div className="mx-auto h-[2px] max-w-[1440px] bg-[url('/imgs/riotgames/footer/hr-bg.svg')] bg-repeat-x"></div>

        <div className="justify-between lg:flex">
          {/* Additional Information */}
          <div className="flex flex-col items-center justify-center md:flex-row">
            <span className="cursor-pointer p-[30px] text-center text-xs text-white hover:underline md:px-0 md:py-20 lg:py-[30px]">
              Cookie Preferences
            </span>
            <img
              src="/imgs/riotgames/footer/wall.png"
              alt="wall"
              className="hidden h-5 object-cover px-2 md:block"
            />
            <span className="p-[30px] text-center text-xs text-white md:px-0 md:py-20 lg:py-[30px]">
              <span>© 2024 Riot Games, Inc. All Rights Reserved.</span>
            </span>
          </div>

          {/* Dividing line */}
          <div className="mx-auto h-[2px] max-w-[1440px] bg-[url('/imgs/riotgames/footer/hr-bg.svg')] bg-repeat-x lg:hidden"></div>

          {/* To the Surface */}
          <div
            className="mt-[30px] flex cursor-pointer items-center justify-center text-sm uppercase text-white"
            onClick={useScrollToTop}
          >
            To the Surface
            <div className="relative ml-2 h-2 w-7">
              <img
                src="/imgs/riotgames/footer/arrow-top.png"
                alt="Arrow to top"
                className="h-[7px] w-2 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
