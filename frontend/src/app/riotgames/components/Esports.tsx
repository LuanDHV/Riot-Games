import Link from "next/link";
import { IEsports } from "../types/riotgames.interface";

const esports: IEsports[] = [
  {
    img: "/imgs/riotgames/esports/lol-esports-img.png",
    logo: "/imgs/riotgames/esports/lol-esports-logo.png",
    link: "#",
  },
  {
    img: "/imgs/riotgames/esports/vlr-esports-img.png",
    logo: "/imgs/riotgames/esports/vlr-esports-logo.png",
    link: "#",
  },
];

export default function Esports() {
  return (
    <>
      <h2 className="my-[30px] text-center text-3xl font-bold text-[#F9F9F9] md:my-[60px] md:text-start md:text-5xl">
        Esports
      </h2>
      <div className="grid items-center justify-center gap-5 md:grid-cols-2 md:pb-5">
        {esports.map((esport: IEsports, index: number) => (
          <Link key={index} href={esport.link}>
            <div className="relative h-auto w-full cursor-pointer">
              <img
                src={esport.img}
                alt="esport-launch"
                className="w-full rounded-lg border border-transparent object-cover duration-300 ease-in-out hover:border-white"
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
