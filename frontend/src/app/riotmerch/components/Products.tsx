"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { IProducts, TypeTags } from "../types/interface";
import ProductsCard from "./ProductsCard";

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
    {
      name: "Nendoroid Jinx (Arcane version)",
      price: 199.99,
      logo: "/imgs/riotmerch/products/arcane-logo.svg",
      tags: ["Limited Edition", "Preorder"],
      imgs: [
        "/imgs/riotmerch/products/arcane/Nendoroid-Jinx-(Arcane version)-1.png",
        "/imgs/riotmerch/products/arcane/Nendoroid-Jinx-(Arcane version)-2.png",
        "/imgs/riotmerch/products/arcane/Nendoroid-Jinx-(Arcane version)-3.png",
        "/imgs/riotmerch/products/arcane/Nendoroid-Jinx-(Arcane version)-4.png",
        "/imgs/riotmerch/products/arcane/Nendoroid-Jinx-(Arcane version)-5.png",
      ],
    },
    {
      name: "Valorant Jett Statue",
      price: 179.99,
      logo: "/imgs/riotmerch/products/lol-logo.svg",
      tags: ["Riot Exclusive", "Retired"],
      imgs: [
        "/imgs/riotmerch/products/valorant/Valorant-Jett-Statue-1.png",
        "/imgs/riotmerch/products/valorant/Valorant-Jett-Statue-2.png",
        "/imgs/riotmerch/products/valorant/Valorant-Jett-Statue-3.png",
        "/imgs/riotmerch/products/valorant/Valorant-Jett-Statue-4.png",
        "/imgs/riotmerch/products/valorant/Valorant-Jett-Statue-5.png",
        "/imgs/riotmerch/products/valorant/Valorant-Jett-Statue-6.png",
        "/imgs/riotmerch/products/valorant/Valorant-Jett-Statue-7.png",
        "/imgs/riotmerch/products/valorant/Valorant-Jett-Statue-8.png",
        "/imgs/riotmerch/products/valorant/Valorant-Jett-Statue-9.png",
      ],
    },
  ];

  return (
    <>
      <div className="grid h-auto w-full gap-5">
        <div className="grid h-auto w-full lg:grid-cols-4">
          {Products.slice(0, 2).map((product: IProducts, index: number) => (
            <ProductsCard key={index} product={product} index={index} />
          ))}
          <div className="row-span-1 w-full lg:col-span-2">
            <video
              src="/imgs/riotmerch/products/products-video-1.mp4"
              className="h-full w-full object-cover lg:max-h-[380px]"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          {Products.slice(2).map((product: IProducts, index: number) => (
            <ProductsCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
