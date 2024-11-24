"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css"; //

export default function TheWorldOfWildRift() {
  const TheWorldOfWildRift = [
    {
      image: "/imgs/wildrift/theworldofwildrift/the-world-of-wild-rift-1.png",
      description:
        "Explore the universe of League of Legends, the world of Runeterra, and a global community of incredible fans.",
    },
    {
      image: "/imgs/wildrift/theworldofwildrift/the-world-of-wild-rift-2.png",
      description:
        "Dive into massive events, top-tier League esports, and unforgettable in-game experiences.",
    },
    {
      image: "/imgs/wildrift/theworldofwildrift/the-world-of-wild-rift-3.png",
      description:
        "With our focus on player experience, you can count on us to support and improve the game for years to come.",
    },
  ];

  return (
    <>
      <div className="h-[45px] w-full bg-[url('/imgs/wildrift/theworldofwildrift/the-world-of-wild-rift-background-1.png')] bg-cover bg-center md:h-[72px] lg:h-[115px] xl:h-[175px]"></div>
      <div className="flex flex-col items-center justify-center gap-16 bg-[url('/imgs/wildrift/theworldofwildrift/the-world-of-wild-rift-background-2.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-center text-[#ffffff]">
          <p className="mb-12 text-5xl font-extrabold uppercase lg:text-7xl">
            The World of Wild Rift
          </p>
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
            {TheWorldOfWildRift.map((world, index) => (
              <SwiperSlide key={index}>
                <div className="mb-[50px] flex flex-col gap-5">
                  <img src={world.image} alt="World Of Wild Rift" />
                  <p className="text-xs md:text-sm lg:text-base">
                    {world.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
