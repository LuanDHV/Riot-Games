"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css"; //
import { IFeaturedNews } from "../types/leagueoflegends.interface";
import Link from "next/link";

export default function FeaturedNews() {
  const FeaturedNews: IFeaturedNews[] = [
    {
      img: "/imgs/leagueoflegends/featurednews/lol-news-1.png",
      type: "Media",
      date: "10/26/2024",
      title: "Blood Sweat & Tears",
      description:
        "Wounded and near death, Ambessa sees a vision of what awaits her as a follower of the Wolf.",
    },
    {
      img: "/imgs/leagueoflegends/featurednews/lol-news-2.png",
      type: "Esports",
      date: "11/1/2024",
      title: "Looking Ahead LoL Esports 2025",
      description:
        "First Stand Tournament, Fearless Draft, MSI & Worlds 2025, plus regional league updates.",
    },
    {
      img: "/imgs/leagueoflegends/featurednews/lol-news-3.png",
      type: "Game Updates",
      date: "11/7/2024",
      title: "Ambessa Champion Trailer",
      description: "You think yourself a wolf? Prove it.",
    },
  ];

  return (
    <>
      <div className="h-auto bg-[url('/imgs/leagueoflegends/featurednews/background.png')] bg-cover bg-center p-6 md:p-8 lg:p-12 xl:px-[200px]">
        <h2 className="flex w-full justify-start py-5 text-2xl font-bold uppercase italic text-[#0a1428] md:py-8 md:text-[32px]">
          Featured News
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
          {FeaturedNews.map((news, index) => (
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
                <div className="">
                  <p className="mb-2 mt-4 flex gap-1 text-[10px] md:text-xs lg:text-sm">
                    <span className="font-bold uppercase text-[#c8aa6e]">
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