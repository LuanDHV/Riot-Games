"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGetMultipleWaysToPlayQuery } from "@/store/api/leagueoflegendsApi/multiplewaystoplayApi";
import { IMultipleWaysToPlay } from "../types/interface";

export default function MultipleWaysToPlay() {
  const {
    data: MultipleWaysToPlay,
    error,
    isLoading,
    isSuccess,
  } = useGetMultipleWaysToPlayQuery(undefined);

  const [selectedWay, setSelectedWay] = useState<IMultipleWaysToPlay | null>(
    null,
  );

  useEffect(() => {
    if (isSuccess && MultipleWaysToPlay.length > 0) {
      setSelectedWay(MultipleWaysToPlay[0]);
    }
  }, [isSuccess, MultipleWaysToPlay]);

  const handleSelecWay = (way: IMultipleWaysToPlay) => {
    setSelectedWay(way);
    console.log("selectedWay", way);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div
        className="flex h-auto flex-col gap-4 bg-cover bg-center p-6 md:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-12 xl:px-[200px]"
        style={{
          backgroundImage: `url(${selectedWay?.background})`,
        }}
      >
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center text-white">
            <p className="mb-4 text-base md:text-lg">Multiple Ways To</p>
            <p className="mb-4 text-5xl font-bold uppercase italic lg:text-[64px]">
              Play
            </p>
            <p className="text-center text-sm md:text-base lg:text-lg">
              Whether you like to dive straight into the fray, support your
              teammates, or something in between, there’s a spot for you on the
              Rift.
            </p>
          </div>
          <div className="my-6 flex w-full flex-col justify-center gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#c8aa6e] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#d3bb8b] sm:max-w-[145px] md:text-sm"
            >
              Play Now
            </Link>
          </div>
          <div className="flex justify-center gap-2">
            {isSuccess &&
              MultipleWaysToPlay.map((items: IMultipleWaysToPlay) => (
                <div
                  key={items.id}
                  className={`flex w-[100px] cursor-pointer flex-col items-center justify-center ${selectedWay?.way === items.way ? "brightness-100" : "brightness-50"} duration-300 ease-in-out md:w-[190px] lg:w-[110px]`}
                  onClick={() => handleSelecWay(items)}
                >
                  <img
                    src={items.icon}
                    alt={items.way}
                    className="h-12 w-12 object-cover lg:h-16 lg:w-16"
                  />
                  <p className="mt-2 text-center text-[10px] uppercase text-white md:mt-4 md:text-xs lg:text-sm">
                    {items.way}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="rounded-full border border-[#c8aa6e] p-2 md:p-4 lg:p-6">
            <video
              src={selectedWay?.video}
              className="h-full w-full rounded-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="mt-8 flex flex-col items-center text-white md:mt-10 lg:mt-12">
            <p className="mb-4 text-xl font-bold uppercase italic">
              {selectedWay?.title}
            </p>
            <p className="text-center text-sm">{selectedWay?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
