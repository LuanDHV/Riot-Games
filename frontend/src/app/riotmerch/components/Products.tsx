"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { IProducts, TypeTags } from "../types/interface";

export default function Products() {
  const Products: IProducts[] = [
    {
      name: "Arcane Champion Jinx 1/7 Scale Statue",
      price: 199.99,
      logo: "/imgs/riotmerch/products/arcane-logo.svg",
      tags: ["Special Edition", "Preorder"],
      imgs: [
        "/imgs/riotmerch/products/arcane/Arcane-Champion-Jinx-Scale-Statue-1.png",
        "/imgs/riotmerch/products/arcane/Arcane-Champion-Jinx-Scale-Statue-2.png",
        "/imgs/riotmerch/products/arcane/Arcane-Champion-Jinx-Scale-Statue-3.png",
        "/imgs/riotmerch/products/arcane/Arcane-Champion-Jinx-Scale-Statue-4.png",
        "/imgs/riotmerch/products/arcane/Arcane-Champion-Jinx-Scale-Statue-5.png",
        "/imgs/riotmerch/products/arcane/Arcane-Champion-Jinx-Scale-Statue-6.png",
      ],
    },
    {
      name: "Arcane Warwick 1/7 Scale Statue",
      price: 199.99,
      logo: "/imgs/riotmerch/products/arcane-logo.svg",
      tags: ["Limited Edition", "Preorder"],
      imgs: [
        "/imgs/riotmerch/products/arcane/Arcane-Warwick-Scale-Statue-1.png",
        "/imgs/riotmerch/products/arcane/Arcane-Warwick-Scale-Statue-2.png",
        "/imgs/riotmerch/products/arcane/Arcane-Warwick-Scale-Statue-3.png",
        "/imgs/riotmerch/products/arcane/Arcane-Warwick-Scale-Statue-4.png",
        "/imgs/riotmerch/products/arcane/Arcane-Warwick-Scale-Statue-5.png",
        "/imgs/riotmerch/products/arcane/Arcane-Warwick-Scale-Statue-6.png",
      ],
    },
  ];

  const getTagStyles = (tags: TypeTags) => {
    const styles = {
      "Special Edition": {
        bg: "bg-[#4500d5]",
        text: "text-white",
      },
      Preorder: {
        bg: "bg-[#666666]",
        text: "text-white",
      },
      "Limited Edition": {
        bg: "bg-yellow-400",
        text: "text-black",
      },
      Retired: {
        bg: "bg-black",
        text: "text-white",
      },
      "Riot Exclusive": {
        bg: "bg-[#6495ed]",
        text: "text-white",
      },
    };
    return styles[tags];
  };

  return (
    <>
      <div className="grid h-auto grid-flow-row lg:grid-cols-4">
        {Products.slice(0, 2).map((product, index) => (
          <div key={index} className="col-span-1">
            {/* Logo and Tags */}
            <div className="flex items-center justify-between px-4 pt-5">
              {/* Logo */}
              <img
                src={product.logo}
                alt=""
                className="h-[30px] w-[70px] object-contain opacity-50"
              />
              {/* Tags */}
              <div className="flex space-x-2">
                {product.tags.map((tags, index) => {
                  const { bg, text } = getTagStyles(tags);
                  return (
                    <span
                      key={index}
                      className={`rounded-sm px-2 py-1 text-sm ${bg} ${text}`}
                    >
                      {tags}
                    </span>
                  );
                })}
                {/* Love Icon */}
                <img
                  src="/imgs/riotmerch/products/love-icon.svg"
                  alt=""
                  className="h-6 w-6 cursor-pointer object-cover"
                />
              </div>
            </div>

            {/* Img */}
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={1}
            >
              {product.imgs.map((img, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <img
                    src={img}
                    alt={`${product.name} Image ${imgIndex + 1}`}
                    className="h-[250px] w-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Product Information */}
            <div className="flex w-full items-center justify-between px-5">
              <div className="flex flex-col py-4">
                {/* Name */}
                <Link href="#">
                  <h3 className="text-base font-bold hover:underline">
                    {product.name}
                  </h3>
                </Link>
                {/* Price */}
                <p className="mt-1 text-base">${product.price}</p>
              </div>
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm border duration-300 ease-in-out hover:bg-[#d0d0d0]">
                <img
                  src="/imgs/riotmerch/products/cart-icon.svg"
                  alt=""
                  className="h-6 w-6 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="w-full lg:col-span-2">
          <video
            src="/imgs/riotmerch/products/products-video-1.mp4"
            className="max-h-[380px] w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </>
  );
}
