"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css"; //
import Link from "next/link";
import { ILatestNews } from "../types/teamfighttactics.interface";

export default function LatestNews() {
  const LatestNews: ILatestNews[] = [
    {
      img: "/imgs/teamfighttactics/latestnews/tft-news-1.png",
      type: "Game Updates",
      date: "11/6/2024",
      title: "Teamfight Tactics Patch 14.22 Notes",
      description:
        "14.22 brings HUGE updates to Team Planner, including Team Codes, Multi-team, and more. It’s also our last patch of the set so be sure to hit your Ranked goals and try out Choncc’s Treasure which returns this patch only!",
    },
    {
      img: "/imgs/teamfighttactics/latestnews/tft-news-2.png",
      type: "Game Updates",
      date: "11/5/2024",
      title: "High Noon Ashe Chibi Champion Showcase",
      description: "Yeehaw! Get ready to give ‘em heck, cowpoke!",
    },
    {
      img: "/imgs/teamfighttactics/latestnews/tft-news-3.png",
      type: "Game Updates",
      date: "11/3/2024",
      title: "TFT: Into the Arcane Set Teaser",
      description:
        "Something very strange is happening in the TFT Convergence… watch the video now!",
    },
  ];

  return (
    <>
      <div className="h-auto bg-[url('/imgs/teamfighttactics/latestnews/latest-news-background.png')] bg-cover bg-center p-6 md:p-8 lg:p-12 xl:px-[200px]">
        <h2 className="flex w-full justify-start py-5 text-2xl font-bold uppercase italic text-[#fffef9] md:py-8 md:text-[32px]">
          Latest News
        </h2>

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
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="valorant custom-swiper-pagination"
        >
          {LatestNews.map((news, index) => (
            <SwiperSlide key={index}>
              <Link
                href="#"
                className="mb-[50px] flex h-auto cursor-pointer flex-col text-[#fffef9]"
              >
                <div className="h-auto w-full overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full cursor-pointer object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="">
                  <p className="mb-2 mt-4 flex gap-1 text-[10px] md:text-xs lg:text-sm">
                    <span className="font-bold uppercase">{news.type}</span>
                    <span>|</span>
                    <span>{news.date}</span>
                  </p>

                  <h3 className="mb-1 text-base font-bold md:text-lg lg:text-[22px]">
                    {news.title}
                  </h3>
                  <p className="text-xs font-medium">{news.description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
