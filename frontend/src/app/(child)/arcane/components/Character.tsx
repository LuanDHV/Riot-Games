"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css";
import { useEffect, useState } from "react";
import { ICharacter } from "../types/interface";
import { useGetCharacterQuery } from "@/store/api/arcaneApi/characterApi";

export default function Character() {
  const {
    data: Character,
    error,
    isLoading,
    isSuccess,
  } = useGetCharacterQuery(undefined);

  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | null>(
    null,
  );

  useEffect(() => {
    if (isSuccess && Character.length > 0) {
      setSelectedCharacter(Character[0]);
    }
  }, [isSuccess, Character]);

  const handleSelectCharacter = (character: ICharacter) => {
    setSelectedCharacter(character);
    console.log("selectedCharacter", character);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div className="flex h-auto flex-col items-center justify-center gap-4 bg-[url('/imgs/arcane/character/character-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full lg:w-1/2">
          <div className="mb-10 flex w-full flex-col items-center text-[#f5f5f5]">
            <p className="mb-2 text-base font-medium uppercase md:text-lg lg:text-[22px]">
              Arcane Season 2
            </p>
            <h2 className="mb-4 text-5xl font-bold uppercase italic lg:text-[64px]">
              Champion
            </h2>
          </div>
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
            slidesPerView={4}
            breakpoints={{
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            className="custom-swiper-pagination"
          >
            {isSuccess &&
              Character.map((items: ICharacter, index: number) => (
                <SwiperSlide key={index} className="mb-[50px]">
                  <div
                    className="flex cursor-pointer flex-col items-center justify-center duration-300 ease-in-out hover:scale-110"
                    onClick={() => handleSelectCharacter(items)}
                  >
                    <img
                      src={items.character}
                      alt={items.name}
                      className={`h-12 w-12 object-cover lg:h-16 lg:w-16 ${selectedCharacter?.character === items.character ? "brightness-100" : "brightness-50"} duration-300 ease-in-out`}
                    />
                    <p className="mt-2 text-[10px] font-semibold uppercase text-[#f5f5f5] md:mt-4 md:text-xs lg:mt-6 lg:text-sm">
                      {items.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="">
            <img
              src={selectedCharacter?.background}
              alt={selectedCharacter?.name}
              className="mb-10 h-full w-full object-cover"
            />

            <div className="flex flex-col items-center text-[#f5f5f5]">
              <p className="mb-4 text-xl font-semibold uppercase lg:text-2xl">
                {selectedCharacter?.name}
              </p>
              <p className="mb-1 text-xs md:text-sm lg:text-base">
                {selectedCharacter?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
