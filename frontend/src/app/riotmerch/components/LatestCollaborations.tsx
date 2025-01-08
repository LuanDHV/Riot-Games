"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ILatestCollaborations } from "../types/interface";
import { useGetLatestCollaborationsQuery } from "@/store/api/riotmerchApi/latestcollaborationsApi";

export default function LatestCollaborations() {
  const {
    data: LatestCollaborations,
    error,
    isLoading,
    isSuccess,
  } = useGetLatestCollaborationsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
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
            {isSuccess &&
              LatestCollaborations.map((news: ILatestCollaborations) => (
                <SwiperSlide key={news.id}>
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
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
