"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../../SwiperCustom.css";
import { useEffect, useState } from "react";
import { IEpisodeStills } from "../types/interface";
import { useGetEpisodeStillsQuery } from "@/store/api/arcaneApi/episodestillsApi";

export default function EpisodeStills() {
  const {
    data: EpisodeStills,
    error,
    isLoading,
    isSuccess,
  } = useGetEpisodeStillsQuery(undefined);

  const [selectedImage, setSelectedImage] = useState<IEpisodeStills | null>(
    null,
  );

  useEffect(() => {
    if (isSuccess && EpisodeStills.length > 0) {
      setSelectedImage(EpisodeStills[0]);
    }
  }, [isSuccess, EpisodeStills]);

  const handleSelectedImage = (img: IEpisodeStills) => {
    setSelectedImage(img);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div className="h-auto bg-black p-6 md:p-8 lg:p-12 xl:px-[200px]">
        <h2 className="flex w-full justify-start py-5 text-2xl font-bold uppercase italic text-[#f5f5f5] md:py-8 md:text-[32px]">
          Episode Stills
        </h2>

        <div className="mb-5 w-full lg:mb-10">
          <img
            src={selectedImage?.img}
            alt="Episode Stills"
            className="h-full w-full object-cover"
          />
        </div>

        <Swiper modules={[Pagination]} spaceBetween={10} slidesPerView={4}>
          {isSuccess &&
            EpisodeStills.map((img: IEpisodeStills) => (
              <SwiperSlide key={img.id}>
                <div
                  className="flex h-auto cursor-pointer flex-col"
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
