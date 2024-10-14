import Link from "next/link";

export default function Entertainment() {
  const entertainments = [
    {
      img: "/imgs/riotgames/entertainment/arcane-card.png",
      logo: "/imgs/riotgames/entertainment/arcane-logo.png",
      link: "#",
    },
    {
      img: "/imgs/riotgames/entertainment/riot-music-card.png",
      logo: "/imgs/riotgames/entertainment/riot-music-logo.png",
      link: "#",
    },
  ];
  return (
    <>
      <h2 className="my-[30px] text-center text-3xl font-bold text-[#F9F9F9] md:my-[60px] md:text-start md:text-5xl">
        Entertainments
      </h2>
      <div className="grid items-center justify-center gap-5 md:grid-cols-2">
        {entertainments.map((entertainment, index) => (
          <Link key={index} href={entertainment.link}>
            <div className="relative h-auto w-full cursor-pointer">
              <img
                src={entertainment.img}
                alt="entertainment-launch"
                className="w-full rounded-lg border border-transparent object-cover duration-300 ease-in-out hover:border-white"
              />
              <div className="pointer-events-none absolute top-0 flex h-full w-[168px] flex-col items-center justify-between py-3 pl-6 pr-8 lg:w-[325px] lg:px-[55px] lg:py-6">
                <img
                  src={entertainment.logo}
                  alt="entertainment-logo"
                  className="m-auto max-w-[112px] object-cover lg:max-w-[180px]"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
