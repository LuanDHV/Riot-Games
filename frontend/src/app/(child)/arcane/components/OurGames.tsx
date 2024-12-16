"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface IOurGames {
  background: string;
  logo: string;
  name: string;
  title: string;
  description: string;
  link: string;
}

export default function OurGames() {
  const OurGames: IOurGames[] = [
    {
      background: "/imgs/arcane/ourgames/lol-background.png",
      logo: "/imgs/arcane/ourgames/lol-logo.png",
      name: "League of Legends",
      title: "League of Legends",
      description:
        "League of Legends is a 5v5 team-based game with over 140 champions to make epic plays with. Battle it out on the rift and play free now!",
      link: "/leagueoflegends",
    },
    {
      background: "/imgs/arcane/ourgames/valorant-background.png",
      logo: "/imgs/arcane/ourgames/valorant-logo.png",
      name: "Valorant",
      title: "Valorant",
      description:
        "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.",
      link: "/valorant",
    },
    {
      background: "/imgs/arcane/ourgames/tft-background.png",
      logo: "/imgs/arcane/ourgames/tft-logo.png",
      name: "Teamfight Tactics",
      title: "Teamfight Tactics",
      description:
        "Teamfight Tactics is a round-based multiplayer auto battler with a revolving roster of League of Legends champions. Draft, deploy, and dominate your opponents.",
      link: "/teamfighttactics",
    },
    {
      background: "/imgs/arcane/ourgames/wildrift-background.png",
      logo: "/imgs/arcane/ourgames/wildrift-logo.png",
      name: "Wild Rift",
      title: "Wild Rift",
      description:
        "Team up with friends and test your skills in 5v5 MOBA combat. All the high-skill competition you crave, designed especially for mobile with revamped controls and streamlined matches.",
      link: "/wildrift",
    },
  ];

  const [selectedOurGames, setSelectedOurGames] = useState<IOurGames | null>(
    null,
  );

  useEffect(() => {
    setSelectedOurGames(OurGames[0]);
  }, []);

  const handleSelectOurGames = (game: IOurGames) => {
    setSelectedOurGames(game);
    console.log("selectedGame", game);
  };
  return (
    <>
      <div className="flex h-auto flex-col gap-4 bg-[url('/imgs/arcane/ourgames/our-games-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-12 xl:px-[200px]">
        <div className="w-full lg:order-2 lg:w-1/2">
          <div className="flex flex-col items-center text-center uppercase text-white">
            <p className="mb-4 text-lg md:text-xl">
              From The Markets Of Arcane
            </p>
            <p className="mb-12 text-5xl font-bold italic lg:text-[64px]">
              Play Our Games
            </p>
          </div>

          <div className="flex justify-center gap-2">
            {OurGames.map((game: IOurGames, index: number) => (
              <div
                key={index}
                className={`flex w-[100px] cursor-pointer flex-col items-center justify-center ${selectedOurGames?.logo === game.logo ? "brightness-100" : "brightness-50"} duration-300 ease-in-out md:w-[190px] lg:w-[110px]`}
                onClick={() => handleSelectOurGames(game)}
              >
                <img
                  src={game.logo}
                  alt={`${game.name} Logo`}
                  className="h-12 w-12 object-cover lg:h-16 lg:w-16"
                />
                <p className="mt-2 text-center text-[10px] uppercase text-white md:mt-4 md:text-xs lg:text-sm">
                  {game.name}
                </p>
              </div>
            ))}
          </div>
          <div className="my-6 flex w-full flex-col justify-center gap-4 sm:flex-row lg:my-12">
            <Link
              href={`${selectedOurGames?.link}`}
              className="flex justify-center p-6"
            >
              <p className="max-w-[220px] border-2 border-[#3d528f] bg-[#3d528f] bg-gradient-to-b from-[#0a0a0a66] to-[#3d528f00] px-8 py-5 font-bold uppercase text-[#f5f5f5] outline outline-2 outline-[#3d528f] duration-300 ease-in-out hover:bg-[#6374a5] lg:text-xl">
                Play Free Now
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full lg:order-1 lg:w-1/2">
          <div className="rounded-full border border-[#a7b6e3] p-2 md:p-4 lg:p-6">
            <img
              src={selectedOurGames?.background}
              alt={`${selectedOurGames?.name} Back Ground`}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="mt-8 flex flex-col items-center text-white md:mt-10 lg:mt-12">
            <p className="mb-4 text-xl font-bold uppercase italic">
              {selectedOurGames?.title}
            </p>
            <p className="text-center text-sm">
              {selectedOurGames?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
