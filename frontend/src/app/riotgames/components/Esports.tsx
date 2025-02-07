"use client";
import Link from "next/link";
import { useGetEsportsQuery } from "@/store/api/riotgamesApi/esportsApi";
import { IEsports } from "../types/interface";

export default function Esports() {
  const {
    data: esports,
    error,
    isLoading,
    isSuccess,
  } = useGetEsportsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <>
      <h2 className="my-[30px] text-center text-3xl font-bold text-[#F9F9F9] md:my-[60px] md:text-start md:text-5xl">
        Esports
      </h2>
      <div className="grid items-center justify-center gap-5 md:grid-cols-2 md:pb-5">
        {isSuccess &&
          esports.map((esport: IEsports) => (
            <Link key={esport.id} href={esport.link}>
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
