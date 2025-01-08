"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { IBanner } from "../types/interface";
import { useGetBannerQuery } from "@/store/api/riotmerchApi/bannerApi";

export default function Banner() {
  const {
    data: Banner,
    error,
    isLoading,
    isSuccess,
  } = useGetBannerQuery(undefined);

  const [selectedBanner, setSelectedBanner] = useState<IBanner | null>(null);

  useEffect(() => {
    if (isSuccess && Banner.length > 0) {
      setSelectedBanner(Banner[0]);
    }
  }, [isSuccess, Banner]);

  // Automatically switch Banners every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedBanner((prev) => {
        if (!prev) return Banner[0];
        let currentIndex = Banner.findIndex(
          (banner: { name: string }) => banner.name === prev.name,
        );

        // Find the next logo, skip the 6th logo
        let nextIndex = (currentIndex + 1) % Banner.length;
        while (Banner[nextIndex].name === "Shop All") {
          nextIndex = (nextIndex + 1) % Banner.length;
        }

        return Banner[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [Banner]);

  const handleSelectBanner = (banner: IBanner) => {
    setSelectedBanner(banner);
    console.log("selectedBanner", banner);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="h-auto w-full pt-20 text-black">
      <div className="relative">
        <div className="lg:clip-banner-slant-desktop clip-banner-slant-mobile absolute inset-0 bg-[url('/imgs/riotmerch/banner/banner-background.png')] bg-cover bg-center"></div>

        <div className="relative px-6 pb-6 pt-8 lg:px-10 lg:pb-8 lg:pt-10">
          {selectedBanner?.name === "LOL Esport Banner" ? (
            <video
              src={selectedBanner?.bannerDesktop}
              className="max-h-[570px] min-h-[435px] w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          ) : (
            <>
              <img
                src={selectedBanner?.bannerDesktop}
                alt={selectedBanner?.name}
                className="hidden h-full w-full object-cover md:block"
              />
              <img
                src={selectedBanner?.bannerMobile}
                alt={selectedBanner?.name}
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
              {isSuccess &&
                Banner.map((logo: IBanner) => (
                  <SwiperSlide key={logo.id}>
                    <div className="flex h-auto cursor-pointer flex-col">
                      <div
                        className={`clip-logo-slant flex h-16 w-[145px] items-center justify-center lg:w-[170px] ${
                          logo.name === "Shop All"
                            ? "opacity-100"
                            : selectedBanner?.name === logo.name
                              ? "opacity-100"
                              : "opacity-50"
                        }`}
                        style={{ backgroundColor: logo.color }}
                        onClick={() => handleSelectBanner(logo)}
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
                      selectedBanner?.name === logo.name && (
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
