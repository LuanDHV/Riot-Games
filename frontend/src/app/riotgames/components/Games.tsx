import Link from "next/link";

export default function Games() {
  const games = [
    {
      launchImg: "/imgs/riotgames/lol-launch.png",
      logotype: "/imgs/riotgames/lol-logotype.png",
      platforms: [
        "/imgs/riotgames/platforms-window.png",
        "/imgs/riotgames/platforms-macos.png",
      ],
      link: "/leagueoflegends",
    },
    {
      launchImg: "/imgs/riotgames/valorant-launch.png",
      logotype: "/imgs/riotgames/valorant-logotype.png",
      platforms: [
        "/imgs/riotgames/platforms-window.png",
        "/imgs/riotgames/platforms-playstation.png",
        "/imgs/riotgames/platforms-xbox.png",
      ],
      link: "/valorant",
    },
    {
      launchImg: "/imgs/riotgames/tft-launch.png",
      logotype: "/imgs/riotgames/tft-logotype.png",
      platforms: [
        "/imgs/riotgames/platforms-window.png",
        "/imgs/riotgames/platforms-macos.png",
        "/imgs/riotgames/platforms-phone.png",
      ],
      link: "/teamfighttactics",
    },
    {
      launchImg: "/imgs/riotgames/wildrift-launch.png",
      logotype: "/imgs/riotgames/wildrift-logotype.png",
      platforms: ["/imgs/riotgames/platforms-phone.png"],
      link: "/wildrift",
    },
    {
      launchImg: "/imgs/riotgames/runeterra-launch.png",
      logotype: "/imgs/riotgames/runeterra-logotype.png",
      platforms: [
        "/imgs/riotgames/platforms-window.png",
        "/imgs/riotgames/platforms-phone.png",
      ],
      link: "/runeterra",
    },
  ];

  return (
    <div className="h-auto w-full bg-[#1F1F1F] px-5 py-20 lg:px-20 lg:py-[100px]">
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
    </div>
  );
}
