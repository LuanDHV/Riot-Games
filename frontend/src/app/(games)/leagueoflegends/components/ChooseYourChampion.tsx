"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css";
import { IChooseYourChampion } from "../types/leagueoflegends.interface";

export default function ChooseYourChampion() {
  const ChooseYourChampion: IChooseYourChampion[] = [
    {
      role: "Assassins",
      background:
        "/imgs/leagueoflegends/chooseyourchampion/assassins-background.png",
      icon: "/imgs/leagueoflegends/chooseyourchampion/assassins-icon.png",
      champion: "Akali",
      description: "The Rogue Assassin",
      imgChampion:
        "/imgs/leagueoflegends/chooseyourchampion/assassins-champion.png",
    },
    {
      role: "Fighters",
      background:
        "/imgs/leagueoflegends/chooseyourchampion/fighters-background.png",
      icon: "/imgs/leagueoflegends/chooseyourchampion/fighters-icon.png",
      champion: "Yasuo",
      description: "The Unforgiven",
      imgChampion:
        "/imgs/leagueoflegends/chooseyourchampion/fighters-champion.png",
    },
    {
      role: "Mages",
      background:
        "/imgs/leagueoflegends/chooseyourchampion/mages-background.png",
      icon: "/imgs/leagueoflegends/chooseyourchampion/mages-icon.png",
      champion: "Lux",
      description: "The Lady of Luminosity",
      imgChampion:
        "/imgs/leagueoflegends/chooseyourchampion/mages-champion.png",
    },
    {
      role: "Marksmen",
      background:
        "/imgs/leagueoflegends/chooseyourchampion/marksmen-background.png",
      icon: "/imgs/leagueoflegends/chooseyourchampion/marksmen-icon.png",
      champion: "Jinx",
      description: "The Loose Cannon",
      imgChampion:
        "/imgs/leagueoflegends/chooseyourchampion/marksmen-champion.png",
    },
    {
      role: "Supports",
      background:
        "/imgs/leagueoflegends/chooseyourchampion/supports-background.png",
      icon: "/imgs/leagueoflegends/chooseyourchampion/supports-icon.png",
      champion: "Thresh",
      description: "The Chain Warden",
      imgChampion:
        "/imgs/leagueoflegends/chooseyourchampion/supports-champion.png",
    },
    {
      role: "Tanks",
      background:
        "/imgs/leagueoflegends/chooseyourchampion/tanks-background.png",
      icon: "/imgs/leagueoflegends/chooseyourchampion/tanks-icon.png",
      champion: "Leona",
      description: "The Radiant Dawn",
      imgChampion:
        "/imgs/leagueoflegends/chooseyourchampion/tanks-champion.png",
    },
  ];

  return (
    <>
      <div className="flex h-auto flex-col items-center justify-center gap-4 bg-[url('/imgs/leagueoflegends/chooseyourchampion/assassins-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full lg:w-1/2">
          <div className="flex w-full flex-col items-center text-[#0a1428]">
            <p className="mb-2 text-base font-medium uppercase md:text-lg lg:text-[22px]">
              Choose Your
            </p>
            <h2 className="mb-4 text-5xl font-bold uppercase italic lg:text-[64px]">
              Champion
            </h2>
            <p className="mb-4 text-center text-xs md:text-sm lg:text-base">
              Whether you like to dive straight into the fray, support your
              teammates, or something in between, there’s a spot for you on the
              Rift.
            </p>
            <div className="my-6 flex w-full flex-col justify-center gap-4 sm:flex-row lg:my-12">
              <Link
                href="#"
                className="w-full bg-[#c8aa6e] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#d3bb8b] sm:max-w-[300px] md:text-sm"
              >
                Discover More Champions
              </Link>
              <Link
                href="#"
                className="w-full bg-[#59c1de] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#7acde4] sm:max-w-[145px] md:text-sm"
              >
                Play Now
              </Link>
            </div>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="custom-swiper-pagination"
          >
            {ChooseYourChampion.map((champion: IChooseYourChampion, index) => (
              <SwiperSlide key={index} className="mb-[50px]">
                <div className="flex cursor-pointer flex-col items-center justify-center duration-300 ease-in-out hover:scale-110">
                  <img
                    src={champion.icon}
                    alt={champion.role}
                    className="h-12 w-12 object-cover brightness-50 lg:h-16 lg:w-16"
                  />
                  <p className="mt-2 text-[10px] font-semibold uppercase text-[#0a1428] md:mt-4 md:text-xs lg:mt-6 lg:text-sm">
                    {champion.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full lg:w-1/2">
          {/* {ChooseYourChampion.map((champion: IChooseYourChampion, index) => (
            <div className="" key={index}>
              <img
                src="/imgs/leagueoflegends/chooseyourchampion/assassins-champion.png"
                alt={champion.champion}
                className="h-full w-full object-cover"
              />
            </div>
          ))} */}

          <div className="">
            <img
              src="/imgs/leagueoflegends/chooseyourchampion/assassins-champion.png"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="flex flex-col items-center">
              <p className="mb-4 text-xl font-bold uppercase italic text-[#0a1428] lg:text-2xl">
                Akali
              </p>
              <p className="mb-1 text-xs font-semibold text-[#6c727e] md:text-sm lg:text-base">
                The Rogue Assassin
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
