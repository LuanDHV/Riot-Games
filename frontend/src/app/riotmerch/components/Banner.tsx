"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../SwiperCustom.css";
import { useEffect, useState } from "react";
import { IShop } from "../types/interface";

export default function Banner() {
  const Shop: IShop[] = [
    {
      bannerDesktop: "/imgs/riotmerch/banner/arcane-banner-desktop.png",
      bannerMobile: "/imgs/riotmerch/banner/arcane-banner-mobile.png",
      name: "Arcane",
      color: "#f2eade",
      logo: "/imgs/riotmerch/banner/arcane-logo.svg",
    },
    {
      bannerDesktop: "/imgs/riotmerch/banner/lol-banner-desktop.png",
      bannerMobile: "/imgs/riotmerch/banner/lol-banner-mobile.png",
      name: "League of Legends",
      color: "#05567c",
      logo: "/imgs/riotmerch/banner/lol-logo.svg",
    },
    {
      bannerDesktop: "/imgs/riotmerch/banner/lol-esport-banner.mp4",
      bannerMobile: "/imgs/riotmerch/banner/lol-esport-banner.mp4",
      name: "LOL Esport Banner",
      color: "#10e3f7",
      logo: "/imgs/riotmerch/banner/lol-esport-logo.svg",
    },
    {
      bannerDesktop: "/imgs/riotmerch/banner/valorant-banner-desktop.png",
      bannerMobile: "/imgs/riotmerch/banner/valorant-banner-mobile.png",
      name: "Valorant Banner",
      color: "#ff4654",
      logo: "/imgs/riotmerch/banner/valorant-logo.svg",
    },
    {
      bannerDesktop: "/imgs/riotmerch/banner/tft-banner-desktop.png",
      bannerMobile: "/imgs/riotmerch/banner/tft-banner-mobile.png",
      name: "TFT Banner",
      color: "#6a55c4",
      logo: "/imgs/riotmerch/banner/tft-logo.svg",
    },
    {
      color: "#ffffff",
      name: "Shop All",
    },
  ];

  const [selectedShop, setSelectedShop] = useState<IShop | null>(null);

  useEffect(() => {
    setSelectedShop(Shop[0]);
  }, []);

  // Automatically switch shops every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedShop((prev) => {
        if (!prev) return Shop[0];
        let currentIndex = Shop.findIndex((shop) => shop.name === prev.name);

        // Find the next logo, skip the 6th logo
        let nextIndex = (currentIndex + 1) % Shop.length;
        while (Shop[nextIndex].name === "Shop All") {
          nextIndex = (nextIndex + 1) % Shop.length;
        }

        return Shop[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [Shop]);

  const handleSelectShop = (shop: IShop) => {
    setSelectedShop(shop);
    console.log("selectedShop", shop);
  };

  return (
    <div className="h-auto w-full pt-20 text-black">
      <div className="relative">
        <div className="lg:clip-banner-slant-desktop clip-banner-slant-mobile absolute inset-0 bg-[url('/imgs/riotmerch/banner/banner-background.png')] bg-cover bg-center"></div>

        <div className="relative px-6 pb-6 pt-8 lg:px-10 lg:pb-8 lg:pt-10">
          {selectedShop?.name === "LOL Esport Banner" ? (
            <video
              src={selectedShop?.bannerDesktop}
              className="max-h-[570px] min-h-[435px] w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          ) : (
            <>
              <img
                src={selectedShop?.bannerDesktop}
                alt={selectedShop?.name}
                className="hidden h-full w-full object-cover md:block"
              />
              <img
                src={selectedShop?.bannerMobile}
                alt={selectedShop?.name}
                className="block h-full w-full object-cover md:hidden"
              />
            </>
          )}

          <div className="lg:clip-swiper-slant bottom-7 flex bg-white pb-2 pt-4 lg:absolute lg:w-3/5 lg:pr-14">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 4,
                },
                900: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 3,
                },
                1080: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 5,
                },
                1680: {
                  slidesPerView: 6,
                },
              }}
            >
              {Shop.map((logo: IShop, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex h-auto cursor-pointer flex-col">
                    <div
                      className={`clip-logo-slant flex h-16 w-[145px] items-center justify-center lg:w-[170px] ${
                        logo.name === "Shop All"
                          ? "opacity-100"
                          : selectedShop?.name === logo.name
                            ? "opacity-100"
                            : "opacity-50"
                      }`}
                      style={{ backgroundColor: logo.color }}
                      onClick={() => handleSelectShop(logo)}
                    >
                      {logo.name === "Shop All" ? (
                        <div className="flex w-[120px] items-center justify-center opacity-100">
                          <p className="text-sm font-bold text-black">
                            | Shop All
                          </p>
                          <img
                            src="/imgs/riotmerch/banner/link-logo.svg"
                            alt=""
                            className="h-6 w-6 object-cover"
                          />
                        </div>
                      ) : (
                        <img
                          src={logo.logo}
                          alt={logo.name}
                          className="h-[30px] w-[75px] object-contain"
                        />
                      )}
                    </div>
                  </div>
                  {logo.name !== "Shop All" &&
                    selectedShop?.name === logo.name && (
                      <div className="relative h-[2px] w-[130px] bg-gray-300 lg:w-[153px]">
                        <div className="animate-progress absolute left-0 top-0 h-1 bg-red-500"></div>
                      </div>
                    )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="clip-button-slant bottom-14 right-14 h-[50px] w-full bg-[#eb0029] text-base font-bold uppercase text-white duration-300 ease-in-out hover:brightness-75 lg:absolute lg:max-w-[240px]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
