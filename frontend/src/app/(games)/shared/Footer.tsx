"use client";
import Link from "next/link";
import { IFooterGames } from "./footer.interface";
import { usePathname } from "next/navigation";

export default function Footer() {
  const lolFooter: IFooterGames[] = [
    {
      section1: [
        {
          title: "About League Of Legends",
          link: "#",
        },
        {
          title: "Help Us Improve",
          link: "#",
        },
        {
          title: "Server Status",
          link: "#",
        },
        {
          title: "Support",
          link: "#",
        },
        {
          title: "Esports Pro Site",
          link: "#",
        },
        {
          title: "Download Riot Mobile Companion App",
          link: "#",
        },
      ],
      socials: [
        {
          icon: "/imgs/footer/youtube-icon.png",
          alt: "YouTube",
          link: "#",
        },
        {
          icon: "/imgs/footer/x-icon.png",
          alt: "X",
          link: "#",
        },
        {
          icon: "/imgs/footer/facebook-icon.png",
          alt: "Facebook",
          link: "#",
        },
        {
          icon: "/imgs/footer/instagram-icon.png",
          alt: "Instagram",
          link: "#",
        },
        {
          icon: "/imgs/footer/reddit-icon.png",
          alt: "Reddit",
          link: "#",
        },
      ],
      icons: [
        {
          icon: "/imgs/footer/riotgames-icon.png",
          alt: "Riot Games",
          link: "#",
        },
      ],
      descriptions: [
        {
          text: "™ & © 2024 Riot Games, Inc.  League of Legends and all related logos, characters, names and distinctive likenesses thereof are exclusive property of Riot Games, Inc.  All Rights Reserved.",
        },
      ],
      section2: [
        {
          title: "Privacy Notice",
          link: "#",
        },
        {
          title: "Terms of Service",
          link: "#",
        },
        {
          title: "Cookie Preferences",
          link: "#",
        },
      ],
    },
  ];

  const valorantFooter: IFooterGames[] = [
    {
      section1: [
        { title: "Download Game Client", link: "#" },
        { title: "Download Riot Mobile Companion App", link: "#" },
      ],
      socials: [
        { icon: "/imgs/footer/x-icon.png", alt: "X", link: "#" },
        { icon: "/imgs/footer/youtube-icon.png", alt: "YouTube", link: "#" },
        {
          icon: "/imgs/footer/instagram-icon.png",
          alt: "Instagram",
          link: "#",
        },
        { icon: "/imgs/footer/tiktok-icon.png", alt: "Tiktok", link: "#" },

        { icon: "/imgs/footer/facebook-icon.png", alt: "Facebook", link: "#" },
        { icon: "/imgs/footer/discord-icon.png", alt: "Discord", link: "#" },
      ],
      icons: [
        {
          icon: "/imgs/footer/riotgames-icon.png",
          alt: "Riot Games",
          link: "#",
        },
        {
          icon: "/imgs/footer/valorant-icon.png",
          alt: "Valorant",
          link: "#",
        },
      ],
      descriptions: [
        {
          text: "© 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.",
        },
      ],
      section2: [
        { title: "Privacy Notice", link: "#" },
        { title: "Terms of Service", link: "#" },
        { title: "Cookie Preferences", link: "#" },
      ],
    },
  ];

  const tftFooter: IFooterGames[] = [
    {
      section1: [{ title: "Download Riot Mobile Companion App", link: "#" }],
      socials: [],
      icons: [
        {
          icon: "/imgs/footer/riotgames-icon.png",
          alt: "Riot Games",
          link: "#",
        },
      ],
      descriptions: [
        {
          text: "© 2024 Riot Games, Inc.",
        },
      ],
      section2: [
        { title: "Privacy Notice", link: "#" },
        { title: "Terms of Service", link: "#" },
        { title: "Cookie Preferences", link: "#" },
      ],
    },
  ];

  const wildriftFooter: IFooterGames[] = [
    {
      section1: [],
      socials: [
        { icon: "/imgs/footer/facebook-icon.png", alt: "Facebook", link: "#" },
        {
          icon: "/imgs/footer/instagram-icon.png",
          alt: "Instagram",
          link: "#",
        },
        { icon: "/imgs/footer/x-icon.png", alt: "X", link: "#" },
        { icon: "/imgs/footer/youtube-icon.png", alt: "YouTube", link: "#" },
      ],
      icons: [
        {
          icon: "/imgs/footer/riotgames-icon.png",
          alt: "Riot Games",
          link: "#",
        },
      ],
      descriptions: [
        {
          text: "© 2019-2024 Riot Games, Inc. RIOT GAMES, LEAGUE OF LEGENDS: WILD RIFT and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.",
        },
      ],
      section2: [
        { title: "Privacy Notice", link: "#" },
        { title: "Terms of Service", link: "#" },
        { title: "Cookie Preferences", link: "#" },
      ],
    },
  ];

  const runeterraFooter: IFooterGames[] = [
    {
      section1: [
        { title: "Support", link: "#" },
        { title: "For Developers", link: "#" },
        { title: "Media", link: "#" },
        { title: "Download Riot Mobile Companion App", link: "#" },
      ],
      socials: [
        { icon: "/imgs/footer/facebook-icon.png", alt: "Facebook", link: "#" },
        {
          icon: "/imgs/footer/instagram-icon.png",
          alt: "Instagram",
          link: "#",
        },
        { icon: "/imgs/footer/youtube-icon.png", alt: "YouTube", link: "#" },
        { icon: "/imgs/footer/x-icon.png", alt: "X", link: "#" },
        { icon: "/imgs/footer/discord-icon.png", alt: "Discord", link: "#" },
      ],
      icons: [
        {
          icon: "/imgs/footer/riotgames-icon.png",
          alt: "Riot Games",
          link: "#",
        },
      ],
      descriptions: [
        {
          text: "©2024 Riot Games, Inc.",
        },
      ],
      section2: [
        { title: "Privacy Notice", link: "#" },
        { title: "Terms of Service", link: "#" },
        { title: "Cookie Preferences", link: "#" },
      ],
    },
  ];

  const pathname = usePathname();

  const currentFooter = pathname.startsWith("/leagueoflegends")
    ? lolFooter
    : pathname.startsWith("/valorant")
      ? valorantFooter
      : pathname.startsWith("/teamfighttactics")
        ? tftFooter
        : pathname.startsWith("/wildrift")
          ? wildriftFooter
          : pathname.startsWith("/runeterra")
            ? runeterraFooter
            : null;

  if (!currentFooter) {
    return <div>Data Not Available</div>;
  }

  return (
    <>
      {currentFooter.map((items) => (
        <div className="h-auto">
          <div className="justify-center bg-[#292929] p-6 lg:flex">
            {items.section1.map((section1, index) => (
              <div key={index} className="flex justify-center">
                <Link
                  href={section1.link}
                  className="my-3 rounded-lg p-2 px-4 py-2 text-center text-[13px] font-bold uppercase text-white duration-300 ease-in-out hover:bg-[#8080804d] lg:my-0"
                >
                  {section1.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-[#111111] px-6 pb-12">
            <div className="flex justify-center py-5">
              {items.socials.map((socials, index) => (
                <Link
                  key={index}
                  href={socials.link}
                  className="m-[6px] flex h-12 w-12 items-center justify-center rounded-xl bg-[#80808033]"
                >
                  <img
                    src={socials.icon}
                    alt={socials.alt}
                    className="h-[16px] w-[16px] object-cover"
                  />
                </Link>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-5 py-6 lg:flex-row">
              {items.icons.map((icons, index) => (
                <Link
                  key={index}
                  href={icons.link}
                  className="flex items-end justify-center"
                >
                  <img
                    src={icons.icon}
                    alt={icons.alt}
                    className="max-w-[100px] object-contain brightness-50 duration-300 ease-in-out hover:brightness-100"
                  />
                </Link>
              ))}
            </div>

            <div className="flex justify-center">
              {items.descriptions.map((descriptions, index) => (
                <p
                  key={index}
                  className="text-center text-[13px] text-[#7E7E7E]"
                >
                  {descriptions.text}
                </p>
              ))}
            </div>

            <div className="justify-center py-6 lg:flex">
              {items.section2.map((section2, index) => (
                <div key={index} className="flex justify-center">
                  <Link
                    href={section2.link}
                    className="my-3 rounded-lg p-2 px-4 py-2 text-[13px] font-bold uppercase text-white duration-300 ease-in-out hover:bg-[#8080804d]"
                  >
                    {section2.title}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="flex rounded-xl bg-[#292929] px-3 py-2">
                <img
                  src="/imgs/footer/teen.png"
                  alt="Teen"
                  className="object-cover"
                />
                <div className="ml-3 text-[13px] font-semibold text-[#efefef]">
                  <p>Blood</p>
                  <p>Fantasy Violence</p>
                  <p>Mild Suggestive Themes</p>
                  <p>Use of Alcohol and Tobacco</p>
                  <p>Online Interactions Not Rated by the ESRB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
