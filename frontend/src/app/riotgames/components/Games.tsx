import Link from "next/link";

export default function Games() {
  const games = [
    {
      launchImg: "/imgs/riotgames/games/lol-launch.png",
      logotype: "/imgs/riotgames/games/lol-logotype.png",
      platforms: [
        "/imgs/riotgames/games/platforms-window.png",
        "/imgs/riotgames/games/platforms-macos.png",
      ],
      link: "/leagueoflegends",
    },
    {
      launchImg: "/imgs/riotgames/games/valorant-launch.png",
      logotype: "/imgs/riotgames/games/valorant-logotype.png",
      platforms: [
        "/imgs/riotgames/games/platforms-window.png",
        "/imgs/riotgames/games/platforms-playstation.png",
        "/imgs/riotgames/games/platforms-xbox.png",
      ],
      link: "/valorant",
    },
    {
      launchImg: "/imgs/riotgames/games/tft-launch.png",
      logotype: "/imgs/riotgames/games/tft-logotype.png",
      platforms: [
        "/imgs/riotgames/games/platforms-window.png",
        "/imgs/riotgames/games/platforms-macos.png",
        "/imgs/riotgames/games/platforms-phone.png",
      ],
      link: "/teamfighttactics",
    },
    {
      launchImg: "/imgs/riotgames/games/wildrift-launch.png",
      logotype: "/imgs/riotgames/games/wildrift-logotype.png",
      platforms: ["/imgs/riotgames/games/platforms-phone.png"],
      link: "/wildrift",
    },
    {
      launchImg: "/imgs/riotgames/games/runeterra-launch.png",
      logotype: "/imgs/riotgames/games/runeterra-logotype.png",
      platforms: [
        "/imgs/riotgames/games/platforms-window.png",
        "/imgs/riotgames/games/platforms-phone.png",
      ],
      link: "/runeterra",
    },
  ];

  return (
    <>
      <h2 className="mb-[30px] text-center text-3xl font-bold text-[#F9F9F9] lg:mb-[60px] lg:text-start lg:text-5xl">
        Games
      </h2>
      <div className="grid items-center justify-center lg:grid-cols-2">
        {games.map((game, index) => (
          <Link key={index} href={game.link}>
            <div className="relative mb-6 h-auto w-full cursor-pointer rounded-lg lg:mb-[50px] lg:pl-5">
              <img
                src={game.launchImg}
                alt="game-launch"
                className="rounded-lg border border-transparent object-cover duration-300 ease-in-out hover:border-white"
              />
              <div className="pointer-events-none absolute top-0 flex h-full w-[168px] flex-col items-center justify-between py-3 pl-6 pr-8 lg:w-[325px] lg:px-[55px] lg:py-6">
                <img
                  src={game.logotype}
                  alt="game-logotype"
                  className="m-auto max-w-[112px] object-cover lg:max-w-[180px]"
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
