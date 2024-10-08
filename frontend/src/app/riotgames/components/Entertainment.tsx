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
      <h2 className="mb-[30px] text-center text-3xl font-bold text-[#F9F9F9] lg:mb-[60px] lg:text-start lg:text-5xl">
        Entertainments
      </h2>
      <div className="grid items-center justify-center lg:grid-cols-2">
        {entertainments.map((esport, index) => (
          <Link key={index} href={esport.link}>
            <div className="relative mb-6 h-auto w-full cursor-pointer rounded-lg lg:mb-[50px] lg:pl-5">
              <img
                src={esport.img}
                alt="esport-launch"
                className="rounded-lg border border-transparent object-cover duration-300 ease-in-out hover:border-white"
              />
              <div className="pointer-events-none absolute top-0 flex h-full w-[168px] flex-col items-center justify-between py-3 pl-6 pr-8 lg:w-[325px] lg:px-[55px] lg:py-6">
                <img
                  src={esport.logo}
                  alt="esport-logo"
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
