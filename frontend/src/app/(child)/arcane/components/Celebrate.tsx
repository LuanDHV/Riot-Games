"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css"; //
import Link from "next/link";
import { ICelebrate } from "../types/interface";

export default function Celebrate() {
  const Celebrate: ICelebrate[] = [
    {
      img: "/imgs/arcane/celebrate/celebrate-1.png",
      type: "Game Updates",
      date: "11/10/2024",
      title: "League of Legends x Arcane Season 2",
      description: "How we’re celebrating Arcane Season 2 in League.",
    },
    {
      img: "/imgs/arcane/celebrate/celebrate-2.png",
      type: "Game Updates",
      date: "11/11/2024",
      title: "TFT Goes Into the Arcane",
      description:
        "Check out how Teamfight Tactics lets you relive, rewrite, and replay the events of Arcane.",
    },
    {
      img: "/imgs/arcane/celebrate/celebrate-3.png",
      type: "Game Updates",
      date: "11/12/2024",
      title: "2XKO November 2024 Check-In",
      description:
        "Here’s what we learned from Alpha Lab, what we’re working on now, and when you can play 2XKO next.",
    },
    {
      img: "/imgs/arcane/celebrate/celebrate-4.png",
      type: "Game Updates",
      date: "11/27/2024",
      title: "VALORANT x Arcane: The Season 2 Arcane Collector’s Set is here",
      description:
        "Everything you need to know about the Limited Edition bundle.",
    },
  ];
  return (
    <>
      <div className="h-auto bg-black p-6 md:p-8 lg:p-12 xl:px-[200px]">
        <h2 className="flex w-full justify-start py-5 text-2xl font-bold uppercase italic text-[#f5f5f5] md:py-8 md:text-[32px]">
          Celebrate In Game
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
          className="custom-swiper-pagination"
        >
          {Celebrate.map((news: ICelebrate, index: number) => (
            <SwiperSlide key={index}>
              <Link
                href="#"
                className="mb-[50px] flex h-auto cursor-pointer flex-col"
              >
                <div className="h-auto w-full overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full cursor-pointer object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="text-[#f5f5f5]">
                  <p className="mb-2 mt-4 flex gap-1 text-[10px] md:text-xs lg:text-sm">
                    <span className="font-bold uppercase text-[#a7b6e3]">
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