"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css"; //
import Link from "next/link";
import { useGetNewsQuery } from "@/store/api/wildriftApi/newsApi";
import { INews } from "../types/interface";

export default function News() {
  const {
    data: News,
    error,
    isLoading,
    isSuccess,
  } = useGetNewsQuery(undefined);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

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
          className="custom-swiper-pagination"
        >
          {isSuccess &&
            News.map((news: INews, index: number) => (
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
