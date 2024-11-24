"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css"; //
import Link from "next/link";
import { ILatestNews } from "../types/wildrift.interface";

export default function LatestNews() {
  const LatestNews: ILatestNews[] = [
    {
      img: "/imgs/wildrift/latestnews/wild-rift-news-1.png",
      type: "Game Updates",
      date: "09/26/2024",
      title: "Patch 5.3 Preview",
      description:
        "Final patch of the season means final season of Arcane and final chance to celebrate! David, John, and some special guests take you along for the Ultimate Arc in patch 5.3! Coming to you on October 17th UTC.",
    },
    {
      img: "/imgs/wildrift/latestnews/wild-rift-news-2.png",
      type: "Game Updates",
      date: "10/10/2024",
      title: "Heimerdinger Champion Overview",
      description:
        "It might not be rocket science, but we think  it’s smart to cover all your bases before the professor's arrival on October 17th UTC!",
    },
    {
      img: "/imgs/wildrift/latestnews/wild-rift-news-3.png",
      type: "Game Updates",
      date: "10/17/2024",
      title: "Need to live",
      description:
        "You can take the Yordle out of Piltover, but you can’t take the progress out of the Yordle!",
    },
  ];

  return (
    <>
      <div className="h-auto p-6 md:p-8 lg:p-12 xl:px-[200px]">
        <h2 className="flex w-full justify-start py-5 text-2xl font-bold uppercase italic text-[#141e37] md:py-8 md:text-[32px]">
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
                className="mb-[50px] flex h-auto cursor-pointer flex-col text-[#141e37]"
              >
                <div className="h-full w-full">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full cursor-pointer object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="">
                  <p className="mb-2 mt-4 flex gap-1 text-[10px] md:text-xs lg:text-sm">
                    <span className="font-bold uppercase text-[#32c8ff]">
                      {news.type}
                    </span>
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
