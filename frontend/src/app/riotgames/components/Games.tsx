"use client";
import Link from "next/link";
import { useGetGamesQuery } from "@/store/api/riotgamesApi/gamesApi";
import { IGames } from "../types/interface";

export default function Games() {
  const {
    data: games,
    error,
    isLoading,
    isSuccess,
  } = useGetGamesQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <>
      <h2 className="mb-[30px] text-center text-3xl font-bold text-[#F9F9F9] md:mb-[60px] md:text-start md:text-5xl">
        Games
      </h2>
      <div className="grid items-center justify-center gap-5 md:grid-cols-2 md:pb-5">
        {isSuccess &&
          games.map((game: IGames) => (
            <Link key={game.id} href={game.link}>
              <div className="relative h-auto w-full cursor-pointer">
                <img
                  src={game.launchImg}
                  alt="game-launch"
                  className="w-full rounded-lg border border-transparent object-cover duration-300 ease-in-out hover:border-white"
                />
                <div className="pointer-events-none absolute top-0 flex h-full w-[168px] flex-col items-center justify-between py-3 pl-6 pr-8 lg:w-[325px] lg:px-[55px] lg:py-6">
                  <img
                    src={game.logotype}
                    alt="game-logotype"
                    className="max-w-[112px] object-cover lg:max-w-[180px]"
                  />
                  <div className="flex h-6 items-center justify-center rounded-full bg-[#8a888733] px-1 py-[2px]">
                    <span className="flex items-center justify-center">
                      {game.platforms.map((platform, idx) => (
                        <img
                          key={idx}
                          src={platform}
                          alt="platform"
                          className="object-cover"
                        />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
