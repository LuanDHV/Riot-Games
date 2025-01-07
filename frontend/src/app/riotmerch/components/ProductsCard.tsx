"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProductCardProps, TypeTags } from "../types/interface";

const getTagStyles = (tags: TypeTags) => {
  const styles = {
    "Special Edition": { bg: "bg-[#4500d5]", text: "text-white" },
    Preorder: { bg: "bg-[#666666]", text: "text-white" },
    "Limited Edition": { bg: "bg-yellow-400", text: "text-black" },
    Retired: { bg: "bg-black", text: "text-white" },
    "Riot Exclusive": { bg: "bg-[#6495ed]", text: "text-white" },
  };
  return styles[tags];
};

export default function ProductsCard({ product, index }: ProductCardProps) {
  return (
    <>
      <div className="group row-span-1 lg:col-span-1">
        {/* Logo and Tags */}
        <div className="flex items-center justify-between p-4">
          <img
            src={product.logo}
            alt=""
            className="h-[30px] w-[70px] object-contain opacity-50"
          />
          <div className="flex space-x-2">
            {product.tags.map((tag, i) => {
              const { bg, text } = getTagStyles(tag);
              return (
                <span
                  key={i}
                  className={`rounded-sm px-2 py-1 text-sm ${bg} ${text}`}
                >
                  {tag}
                </span>
              );
            })}
            <img
              src="/imgs/riotmerch/products/love-icon.svg"
              alt=""
              className="h-6 w-6 cursor-pointer object-cover"
            />
          </div>
        </div>

        {/* Swiper */}
        <div className="relative w-screen lg:w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: `.swiper-button-next-${index}`,
              prevEl: `.swiper-button-prev-${index}`,
            }}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
          >
            {product.imgs.map((img, imgIndex) => (
              <SwiperSlide key={imgIndex}>
                <img
                  src={img}
                  alt={`${product.name} Image ${imgIndex + 1}`}
                  className="h-[250px] w-full cursor-pointer object-contain duration-300 ease-in-out hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button
            className={`hidden group-hover:flex swiper-button-prev-${index} absolute left-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200`}
          >
            <img
              src="/imgs/riotmerch/products/arrow-icon.svg"
              alt=""
              className="h-6 w-6 rotate-180 object-cover"
            />
          </button>
          <button
            className={`hidden group-hover:flex swiper-button-next-${index} absolute right-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200`}
          >
            <img
              src="/imgs/riotmerch/products/arrow-icon.svg"
              alt=""
              className="h-6 w-6 object-cover"
            />
          </button>
        </div>

        {/* Product Information */}
        <div className="flex w-full items-center justify-between px-5">
          <div className="flex flex-col py-4">
            <h3 className="text-base font-bold hover:underline">
              {product.name}
            </h3>
            <p className="mt-1 text-base">${product.price}</p>
          </div>
          <div className="z-10 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-sm border duration-300 ease-in-out hover:bg-[#d0d0d0] group-hover:flex">
            <img
              src="/imgs/riotmerch/products/cart-icon.svg"
              alt=""
              className="h-6 w-6 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
