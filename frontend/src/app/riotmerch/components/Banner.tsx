"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../SwiperCustom.css";

export default function Banner() {
  const Banner = [
    {
      bannerDesktop: "/imgs/riotmerch/banner/arcane-banner-desktop.png",
      bannerMobile: "/imgs/riotmerch/banner/arcane-banner-mobile.png",
      name: "Arcane Banner",
    },
  ];

  const BannerLogo = [
    {
      color: "#f2eade",
      logo: "/imgs/riotmerch/banner/arcane-logo.svg",
      name: "Arcane Logo",
    },
    {
      color: "#05567c",
      logo: "/imgs/riotmerch/banner/lol-logo.svg",
      name: "LOL Logo",
    },
    {
      color: "#10e3f7",
      logo: "/imgs/riotmerch/banner/lol-esport-logo.svg",
      name: "#10e3f7",
    },
    {
      color: "#ff4654",
      logo: "/imgs/riotmerch/banner/valorant-logo.svg",
      name: "Valorant Logo",
    },
    {
      color: "#6a55c4",
      logo: "/imgs/riotmerch/banner/tft-logo.svg",
      name: "TFT Logo",
    },
    {
      color: "#ffffff",
      logo: "",
      name: "Shop All",
    },
  ];

  return (
    <>
      <div className="h-auto w-full pt-20 text-black">
        {Banner.map((banner, index) => (
          <div key={index} className="relative">
            <div className="lg:clip-banner-slant-desktop clip-banner-slant-mobile absolute inset-0 bg-[url('/imgs/riotmerch/banner/banner-background.png')] bg-cover bg-center"></div>

            <div className="relative px-6 pb-6 pt-8 lg:px-10 lg:pb-8 lg:pt-10">
              <img
                src={banner.bannerDesktop}
                alt={banner.name}
                className="hidden h-full w-full object-cover lg:block"
              />
              <img
                src={banner.bannerMobile}
                alt={banner.name}
                className="block h-full w-full object-cover lg:hidden"
              />
              <div className="lg:clip-swiper-slant bottom-7 flex bg-white pb-2 pt-4 lg:absolute lg:w-3/5 lg:pr-14">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={20}
                  breakpoints={{
                    320: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                    480: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                    1280: {
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {BannerLogo.map((items, index: number) => (
                    <SwiperSlide key={index}>
                      <div className="flex h-auto cursor-pointer flex-col">
                        <div
                          className={`clip-logo-slant flex h-16 w-[145px] items-center justify-center lg:w-[170px] ${items.name === "Shop All" ? "" : "opacity-50"}`}
                          style={{ backgroundColor: items.color }}
                        >
                          {items.name === "Shop All" ? (
                            <>
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
                            </>
                          ) : (
                            <img
                              src={items.logo}
                              alt={items.name}
                              className="h-[30px] w-[75px] object-contain"
                            />
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <button className="clip-button-slant bottom-14 right-14 h-[50px] w-full bg-[#eb0029] text-base font-bold uppercase text-white duration-300 ease-in-out hover:brightness-75 lg:absolute lg:max-w-[240px]">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
