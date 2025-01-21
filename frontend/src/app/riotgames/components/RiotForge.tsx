"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../SwiperCustom.css"; //
import Link from "next/link";
import { useGetForgeQuery } from "@/store/api/riotgamesApi/forgeApi";
import { IForge } from "../types/interface";

export default function RiotForge() {
  const {
    data: forge,
    isLoading,
    error,
    isSuccess,
  } = useGetForgeQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <>
      <h2 className="my-[30px] text-center text-3xl font-bold text-[#F9F9F9] md:my-[60px] md:text-start md:text-5xl">
        Riot Forge
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {isSuccess &&
          forge.map((forge: IForge) => (
            <SwiperSlide key={forge.id}>
              <Link href={forge.link}>
                <div className="relative h-auto w-full cursor-pointer">
                  <img
                    src={forge.card}
                    alt="forge-launch"
                    className="w-full rounded-lg border border-transparent object-cover duration-300 ease-in-out hover:border-white"
                  />
                  <div className="pointer-events-none absolute top-0 flex h-full w-[168px] flex-col items-center justify-evenly py-3 pl-6 pr-8 lg:w-[210px]">
                    <img
                      src={forge.logotype}
                      alt="forge-logotype"
                      className="max-w-[100px] object-cover lg:max-w-[155px]"
                    />
                    <div className="flex h-6 items-center justify-center rounded-full bg-[#8a888733] px-1 py-[2px]">
                      <span className="flex items-center justify-center">
                        {forge.platforms.map((platform, idx) => (
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
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
