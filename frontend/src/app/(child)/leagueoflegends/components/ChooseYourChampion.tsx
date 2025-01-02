"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../SwiperCustom.css";
import { useEffect, useState } from "react";
import { useGetChooseYourChampionQuery } from "@/store/api/leagueoflegendsApi/chooseyourchampionApi";
import { IChooseYourChampion } from "../types/interface";

export default function ChooseYourChampion() {
  const {
    data: ChooseYourChampion,
    error,
    isLoading,
    isSuccess,
  } = useGetChooseYourChampionQuery(undefined);

  const [selectedRole, setSelectedRole] = useState<IChooseYourChampion | null>(
    null,
  );

  useEffect(() => {
    if (isSuccess && ChooseYourChampion.length > 0) {
      setSelectedRole(ChooseYourChampion[0]);
    }
  }, [isSuccess, ChooseYourChampion]);

  const handleSelectRole = (role: IChooseYourChampion) => {
    setSelectedRole(role);
    console.log("selectedRole", role);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div
        className="flex h-auto flex-col items-center justify-center gap-4 bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]"
        style={{
          backgroundImage: `url(${selectedRole?.background})`,
        }}
      >
        <div className="w-full lg:w-1/2">
          <div className="flex w-full flex-col items-center text-[#0a1428]">
            <p className="mb-2 text-base font-medium uppercase md:text-lg lg:text-[22px]">
              Choose Your
            </p>
            <h2 className="mb-4 text-5xl font-bold uppercase italic lg:text-[64px]">
              Champion
            </h2>
            <p className="mb-4 text-center text-xs md:text-sm lg:text-base">
              Whether you like to dive straight into the fray, support your
              teammates, or something in between, there’s a spot for you on the
              Rift.
            </p>
            <div className="my-6 flex w-full flex-col justify-center gap-4 sm:flex-row lg:my-12">
              <Link
                href="#"
                className="w-full bg-[#c8aa6e] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#d3bb8b] sm:max-w-[300px] md:text-sm"
              >
                Discover More Champions
              </Link>
              <Link
                href="#"
                className="w-full bg-[#59c1de] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#7acde4] sm:max-w-[145px] md:text-sm"
              >
                Play Now
              </Link>
            </div>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
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
          >
            {isSuccess &&
              ChooseYourChampion.map(
                (items: IChooseYourChampion, index: number) => (
                  <SwiperSlide key={index}>
                    <div
                      className="flex cursor-pointer flex-col items-center justify-center duration-300 ease-in-out hover:scale-110"
                      onClick={() => handleSelectRole(items)}
                    >
                      <img
                        src={items.icon}
                        alt={items.role}
                        className={`h-12 w-12 object-cover lg:h-16 lg:w-16 ${selectedRole?.role === items.role ? "brightness-100" : "brightness-50"} duration-300 ease-in-out`}
                      />
                      <p className="mt-2 text-[10px] font-semibold uppercase text-[#0a1428] md:mt-4 md:text-xs lg:mt-6 lg:text-sm">
                        {items.role}
                      </p>
                    </div>
                  </SwiperSlide>
                ),
              )}
          </Swiper>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="">
            <img
              src={selectedRole?.imgChampion}
              alt={selectedRole?.champion}
              className="h-full w-full object-cover"
            />

            <div className="flex flex-col items-center">
              <p className="mb-4 text-xl font-bold uppercase italic text-[#0a1428] lg:text-2xl">
                {selectedRole?.champion}
              </p>
              <p className="mb-1 text-xs font-semibold text-[#6c727e] md:text-sm lg:text-base">
                {selectedRole?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
