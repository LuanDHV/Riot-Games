"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css";
import Link from "next/link";

import { useGetTheLatestQuery } from "@/store/api/valorantApi/thelatestApi";
import { ITheLatest } from "../types/interface";

export default function TheLatest() {
  const {
    data: TheLatest,
    error,
    isLoading,
    isSuccess,
  } = useGetTheLatestQuery(undefined);

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="h-auto bg-[url('/imgs/valorant/thelatest/background.png')] bg-cover bg-center p-6 md:p-8 lg:p-12 xl:px-[200px]">
        <h2 className="flex w-full justify-start py-5 text-2xl font-bold uppercase italic text-[#0a1428] md:py-8 md:text-[32px]">
          The Latest
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
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
            TheLatest.map((news: ITheLatest) => (
              <SwiperSlide key={news.id}>
                <Link href="#" className="flex h-auto cursor-pointer flex-col">
                  <div className="h-auto w-full overflow-hidden">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="w-full cursor-pointer object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="">
                    <p className="mb-2 mt-4 flex gap-1 text-[10px] md:text-xs lg:text-sm">
                      <span className="font-bold uppercase text-[#ff4655]">
                        {news.type}
                      </span>
                      <span>|</span>
                      <span>{news.date}</span>
                    </p>

                    <h3 className="mb-1 text-base font-bold md:text-lg lg:text-[22px]">
                      {news.title}
                    </h3>
                    <p className="text-xs font-medium text-[#0a1428]">
                      {news.description}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
