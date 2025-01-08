"use client";
import Link from "next/link";
import { useGetEntertainmentsQuery } from "@/store/api/riotgamesApi/entertainmentsApi";
import { IEntertainments } from "../types/interface";

export default function Entertainment() {
  const {
    data: entertainments,
    error,
    isLoading,
    isSuccess,
  } = useGetEntertainmentsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <>
      <h2 className="my-[30px] text-center text-3xl font-bold text-[#F9F9F9] md:my-[60px] md:text-start md:text-5xl">
        Entertainments
      </h2>
      <div className="grid items-center justify-center gap-5 md:grid-cols-2">
        {isSuccess &&
          entertainments.map((entertainment: IEntertainments) => (
            <Link key={entertainment.id} href={entertainment.link}>
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
