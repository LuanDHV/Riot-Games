"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css";
import { useState, useRef } from "react";

export default function SliderBanner() {
  const [activeVideo, setActiveVideo] = useState("");
  const videoRef = useRef<HTMLDivElement | null>(null);

  const SliderArcane = [
    {
      img: "imgs/arcane/banner/arcane-1.png",
      title: "The Line | Music video",
      link: "https://www.youtube.com/embed/E2Rj2gQAyPA",
    },
    {
      img: "imgs/arcane/banner/arcane-2.png",
      title: "Paint the Town Blue",
      link: "https://www.youtube.com/embed/pl2K9rvsS74",
    },
    {
      img: "imgs/arcane/banner/arcane-3.png",
      title: "Come Play",
      link: "https://www.youtube.com/embed/3jf6xOg6e7Y",
    },
    {
      img: "imgs/arcane/banner/arcane-4.png",
      title: "Arcane: Season 2 | Official Trailer",
      link: "https://www.youtube.com/embed/hsffPST-x1k",
    },
    {
      img: "imgs/arcane/banner/arcane-5.png",
      title: "Arcane: Come Play Series Trailer",
      link: "https://www.youtube.com/embed/Sl-xmZTH6GE",
    },
    {
      img: "imgs/arcane/banner/arcane-6.png",
      title: "Arcane In-Game Preview: Come Play",
      link: "https://www.youtube.com/embed/rR5vyzjGwmk",
    },
  ];

  const handleOutsideClick = (e: any) => {
    if (videoRef.current && !videoRef.current.contains(e.target)) {
      setActiveVideo("");
    }
  };

  return (
    <>
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex w-full items-center justify-center bg-black bg-opacity-70"
          onClick={handleOutsideClick}
        >
          <div
            ref={videoRef}
            className="relative aspect-[16/9] w-full lg:h-4/5 xl:w-4/5"
          >
            <iframe
              src={activeVideo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
              className="h-full w-full transition-all duration-500 ease-in-out"
            ></iframe>
            <button
              className="absolute -right-20 top-1 flex h-8 w-8 items-center justify-center bg-[#3d528f] p-3 text-xl font-bold text-[#f5f5f5]"
              onClick={() => setActiveVideo("")}
            >
              X
            </button>
          </div>
        </div>
      )}

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
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 5,
          },
        }}
        className="custom-swiper-pagination flex justify-center"
      >
        {SliderArcane.map((slider, index) => (
          <SwiperSlide key={index}>
            <div
              className="mb-[50px] flex h-auto cursor-pointer justify-center gap-2"
              onClick={() => setActiveVideo(slider.link)}
            >
              <div className="relative cursor-pointer duration-500 ease-in-out hover:scale-110">
                <img
                  src={slider.img}
                  alt="Arcane Slider"
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-0 w-full px-4 pb-4 text-sm uppercase text-white lg:text-base">
                  {slider.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}