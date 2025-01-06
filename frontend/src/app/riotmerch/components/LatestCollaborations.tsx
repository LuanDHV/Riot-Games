"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LatestCollaborations() {
  interface ILatestCollaborations {
    numb: string;
    title: string;
    description: string;
    img: string;
  }

  const LatestCollaborations: ILatestCollaborations[] = [
    {
      numb: "01",
      title: "Limited Edition Gloves",
      description:
        "Hayabusa x Arcane Boxing Gloves — Built for performance. Perfect for collectors. Numbered box sets are available now!",
      img: "/imgs/riotmerch/latestcollaborations/latest-collaborations-1.png",
    },
    {
      numb: "02",
      title: "[NEW] Secretlab x Arcane",
      description:
        "Play with the combined power of Piltover and Zaun at your back with the official Secretlab Arcane Collection.",
      img: "/imgs/riotmerch/latestcollaborations/latest-collaborations-2.png",
    },
    {
      numb: "03",
      title: "FENTY BEAUTY X ARCANE",
      description:
        "Bring your beauty persona to life with a lineup of Fenty Beauty must-haves inspired by the powerhouse women of Arcane ",
      img: "/imgs/riotmerch/latestcollaborations/latest-collaborations-3.png",
    },
    {
      numb: "04",
      title: "Secretlab x VALORANT",
      description: "Explore the Secretlab x VALORANT collection!",
      img: "/imgs/riotmerch/latestcollaborations/latest-collaborations-4.png",
    },
  ];
  return (
    <>
      <div className="py-20">
        <h2 className="pb-8 text-lg font-semibold uppercase">
          ____ Latest Collaborations
        </h2>
        <div className="px-5">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {LatestCollaborations.map(
              (news: ILatestCollaborations, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
                    <div className="flex flex-col justify-center gap-5 lg:order-2">
                      <p className="block text-base text-[#666666] lg:hidden">
                        {news.numb}
                      </p>
                      <img
                        src={news.img}
                        alt="Latest Collaborations Images"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-5 lg:order-1 lg:gap-10">
                      <p className="hidden text-base text-[#666666] lg:block">
                        {news.numb}
                      </p>
                      <p className="text-5xl font-semibold">{news.title}</p>
                      <p className="text-base text-[#666666]">
                        {news.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
}
