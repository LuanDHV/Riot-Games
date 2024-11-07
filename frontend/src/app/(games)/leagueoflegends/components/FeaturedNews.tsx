"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css"; //

export default function FeaturedNews() {
  return (
    <>
      <div className="flex h-auto items-center justify-center">
        <img
          src="/imgs/leagueoflegends/featurednews/background.png"
          alt="background"
          className="min-h-[500px] w-full"
        />
        {/* <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true} // Thêm nút điều hướng
          modules={[Pagination, Navigation]} // Kích hoạt Pagination và Navigation
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex h-64 items-center justify-center bg-blue-500 text-white">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-64 items-center justify-center bg-green-500 text-white">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-64 items-center justify-center bg-red-500 text-white">
              Slide 3
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </>
  );
}
