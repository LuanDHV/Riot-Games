"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css"; //
import Link from "next/link";
import { IPaP } from "../types/interface";

export default function PaP() {
  const PaP: IPaP[] = [
    {
      img: "/imgs/arcane/pap/pap-1.png",
      type: "Announcements",
      date: "19/5/2024",
      title: "The Art and Making of Arcane Artbook: Artifact Edition",
    },
    {
      img: "/imgs/arcane/pap/pap-2.png",
      type: "Announcements",
      date: "9/5/2024",
      title: "GKIDS Arcane: Season One 4K UHD Collector’s Edition Set",
    },
    {
      img: "/imgs/arcane/pap/pap-3.png",
      type: "Announcements",
      date: "11/11/2022",
      title: "Powder's Wind Up Monkey",
      description:
        "Bring a touch of Arcane chaos into your home with Powder's Wind Up Monkey!",
    },
    {
      img: "/imgs/arcane/pap/pap-4.png",
      type: "Announcements",
      date: "10/17/2024",
      title: "Tokidoki x Arcane Unicornos",
    },
    {
      img: "/imgs/arcane/pap/pap-5.png",
      type: "Announcements",
      date: "10/17/2024",
      title: "Youtooz x Arcane Drop",
    },
  ];
  return (
    <>
      <div className="h-auto bg-black p-6 md:p-8 lg:p-12 xl:px-[200px]">
        <h2 className="flex w-full justify-start py-5 text-2xl font-bold uppercase italic text-[#f5f5f5] md:py-8 md:text-[32px]">
          Arcane Products & Partners
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
          {PaP.map((news: IPaP, index: number) => (
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
