"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../../SwiperCustom.css";
import { useState } from "react";
import { IEpisodeStills } from "../types/interface";

export default function EpisodeStills() {
  const EpisodeStills: IEpisodeStills[] = [
    { img: "/imgs/arcane/episodestills/es1.png" },
    { img: "/imgs/arcane/episodestills/es2.png" },
    { img: "/imgs/arcane/episodestills/es3.png" },
    { img: "/imgs/arcane/episodestills/es4.png" },
    { img: "/imgs/arcane/episodestills/es5.png" },
    { img: "/imgs/arcane/episodestills/es6.png" },
    { img: "/imgs/arcane/episodestills/es7.png" },
    { img: "/imgs/arcane/episodestills/es8.png" },
    { img: "/imgs/arcane/episodestills/es9.png" },
    { img: "/imgs/arcane/episodestills/es10.png" },
    { img: "/imgs/arcane/episodestills/es11.png" },
    { img: "/imgs/arcane/episodestills/es12.png" },
    { img: "/imgs/arcane/episodestills/es13.png" },
    { img: "/imgs/arcane/episodestills/es14.png" },
  ];

  const [selectedImage, setSelectedImage] = useState<IEpisodeStills>(
    EpisodeStills[0],
  );

  const handleSelectedImage = (img: IEpisodeStills) => {
    setSelectedImage(img);
  };

  return (
    <>
      <div className="h-auto bg-black p-6 md:p-8 lg:p-12 xl:px-[200px]">
        <h2 className="flex w-full justify-start py-5 text-2xl font-bold uppercase italic text-[#f5f5f5] md:py-8 md:text-[32px]">
          Episode Stills
        </h2>

        <div className="mb-5 w-full lg:mb-10">
          <img
            src={selectedImage.img}
            alt="Episode Stills"
            className="h-full w-full object-cover"
          />
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, type: "bullets" }}
          spaceBetween={20}
          slidesPerView={4}
          className="custom-swiper-pagination"
        >
          {EpisodeStills.map((img: IEpisodeStills, index: number) => (
            <SwiperSlide key={index}>
              <div
                className="mb-[50px] flex h-auto cursor-pointer flex-col"
                onClick={() => handleSelectedImage(img)}
              >
                <div className="h-auto w-full overflow-hidden">
                  <img
                    src={img.img}
                    alt="Episode Stills"
                    className="h-full w-full cursor-pointer object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
