"use client";
import { IProducts } from "../types/interface";
import ProductsCard from "./ProductsCard";

export default function Products() {
  const Products: IProducts[] = [
    //LOL-ESPORT
    {
      name: "Worlds-Unlocked-2024-Collector-Edition",
      price: 99.99,
      logo: "/imgs/riotmerch/products/lol-esport-logo.svg",
      tags: ["Retired", "Limited Edition"],
      imgs: [
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-1.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-2.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-3.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-4.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-5.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-6.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-7.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-8.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-9.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-10.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-11.png",
        "/imgs/riotmerch/products/lolesport/Worlds-Unlocked-2024-Collector-Edition-12.png",
      ],
    },
    {
      name: "Worlds Unlocked 2024 Collector Edition",
      price: 34.99,
      logo: "/imgs/riotmerch/products/lol-esport-logo.svg",
      tags: ["Limited Edition"],
      imgs: [
        "/imgs/riotmerch/products/lolesport/Worlds-2024-Tibbers-Plush-1.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-Tibbers-Plush-2.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-Tibbers-Plush-3.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-Tibbers-Plush-4.png",
      ],
    },
    {
      name: "Worlds 2024 Scarf",
      price: 26.99,
      logo: "/imgs/riotmerch/products/lol-esport-logo.svg",
      tags: ["Limited Edition"],
      imgs: [
        "/imgs/riotmerch/products/lolesport/Worlds-2024-Scarf-1.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-Scarf-2.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-Scarf-3.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-Scarf-4.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-Scarf-5.png",
      ],
    },
    {
      name: "Worlds 2024 XL Mousepad",
      price: 24.99,
      logo: "/imgs/riotmerch/products/lol-esport-logo.svg",
      tags: ["Limited Edition"],
      imgs: [
        "/imgs/riotmerch/products/lolesport/Worlds-2024-XL-Mousepad-1.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-XL-Mousepad-2.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-XL-Mousepad-3.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-XL-Mousepad-4.png",
        "/imgs/riotmerch/products/lolesport/Worlds-2024-XL-Mousepad-5.png",
      ],
    },

    //ARCANE
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
      name: "Arcane Family Reunion Holiday Tibbers",
      price: 34.99,
      logo: "/imgs/riotmerch/products/arcane-logo.svg",
      tags: ["Retired"],
      imgs: [
        "/imgs/riotmerch/products/arcane/Arcane-Family-Reunion-Holiday-Tibbers-1.png",
        "/imgs/riotmerch/products/arcane/Arcane-Family-Reunion-Holiday-Tibbers-2.png",
        "/imgs/riotmerch/products/arcane/Arcane-Family-Reunion-Holiday-Tibbers-3.png",
        "/imgs/riotmerch/products/arcane/Arcane-Family-Reunion-Holiday-Tibbers-4.png",
        "/imgs/riotmerch/products/arcane/Arcane-Family-Reunion-Holiday-Tibbers-5.png",
        "/imgs/riotmerch/products/arcane/Arcane-Family-Reunion-Holiday-Tibbers-6.png",
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

    //LOL
    {
      name: "Worlds 2024 Lux Scale Statue by Jimei Palace ",
      price: 499.99,
      logo: "/imgs/riotmerch/products/lol-logo.svg",
      tags: ["Retired", "Limited Edition"],
      imgs: [
        "/imgs/riotmerch/products/lol/Worlds-2024-Lux-Scale-Statue-by-Jimei-Palace-1.png",
        "/imgs/riotmerch/products/lol/Worlds-2024-Lux-Scale-Statue-by-Jimei-Palace-2.png",
        "/imgs/riotmerch/products/lol/Worlds-2024-Lux-Scale-Statue-by-Jimei-Palace-3.png",
        "/imgs/riotmerch/products/lol/Worlds-2024-Lux-Scale-Statue-by-Jimei-Palace-4.png",
        "/imgs/riotmerch/products/lol/Worlds-2024-Lux-Scale-Statue-by-Jimei-Palace-5.png",
        "/imgs/riotmerch/products/lol/Worlds-2024-Lux-Scale-Statue-by-Jimei-Palace-6.png",
        "/imgs/riotmerch/products/lol/Worlds-2024-Lux-Scale-Statue-by-Jimei-Palace-7.png",
        "/imgs/riotmerch/products/lol/Worlds-2024-Lux-Scale-Statue-by-Jimei-Palace-8.png",
        "/imgs/riotmerch/products/lol/Worlds-2024-Lux-Scale-Statue-by-Jimei-Palace-9.png",
      ],
    },
    {
      name: "Hall of Legends 2024 Immortalized Legend Ahri Statue",
      price: 299.99,
      logo: "/imgs/riotmerch/products/lol-logo.svg",
      tags: ["Retired", "Limited Edition"],
      imgs: [
        "/imgs/riotmerch/products/lol/Hall-of-Legends-2024-Immortalized-Legend-Ahri-Statue-1.png",
        "/imgs/riotmerch/products/lol/Hall-of-Legends-2024-Immortalized-Legend-Ahri-Statue-2.png",
        "/imgs/riotmerch/products/lol/Hall-of-Legends-2024-Immortalized-Legend-Ahri-Statue-3.png",
        "/imgs/riotmerch/products/lol/Hall-of-Legends-2024-Immortalized-Legend-Ahri-Statue-4.png",
      ],
    },
    {
      name: "Heartseeker Yuumi Pearl Chroma Figure",
      price: 34.99,
      logo: "/imgs/riotmerch/products/lol-logo.svg",
      tags: ["Retired", "Limited Edition"],
      imgs: [
        "/imgs/riotmerch/products/lol/Heartseeker-Yuumi-Pearl-Chroma-Figure-1.png",
        "/imgs/riotmerch/products/lol/Heartseeker-Yuumi-Pearl-Chroma-Figure-2.png",
        "/imgs/riotmerch/products/lol/Heartseeker-Yuumi-Pearl-Chroma-Figure-3.png",
        "/imgs/riotmerch/products/lol/Heartseeker-Yuumi-Pearl-Chroma-Figure-4.png",
        "/imgs/riotmerch/products/lol/Heartseeker-Yuumi-Pearl-Chroma-Figure-5.png",
      ],
    },
    {
      name: "Gwen Unlocked",
      price: 74.99,
      logo: "/imgs/riotmerch/products/lol-logo.svg",
      tags: [],
      imgs: [
        "/imgs/riotmerch/products/lol/Gwen-Unlocked-1.png",
        "/imgs/riotmerch/products/lol/Gwen-Unlocked-2.png",
        "/imgs/riotmerch/products/lol/Gwen-Unlocked-3.png",
        "/imgs/riotmerch/products/lol/Gwen-Unlocked-4.png",
        "/imgs/riotmerch/products/lol/Gwen-Unlocked-5.png",
        "/imgs/riotmerch/products/lol/Gwen-Unlocked-6.png",
      ],
    },

    //VALORANT
    {
      name: "Valorant Jett Statue",
      price: 179.99,
      logo: "/imgs/riotmerch/products/valorant-logo.svg",
      tags: ["Riot Exclusive", "Preorder"],
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
    {
      name: "VALORANT Reyna Statue",
      price: 184.99,
      logo: "/imgs/riotmerch/products/valorant-logo.svg",
      tags: [],
      imgs: [
        "/imgs/riotmerch/products/valorant/VALORANT-Reyna-Statue-1.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Reyna-Statue-2.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Reyna-Statue-3.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Reyna-Statue-4.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Reyna-Statue-5.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Reyna-Statue-6.png",
      ],
    },
    {
      name: "VALORANT Phoenix Statue",
      price: 179.99,
      logo: "/imgs/riotmerch/products/valorant-logo.svg",
      tags: [],
      imgs: [
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-1.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-2.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-3.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-4.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-5.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-6.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-7.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-8.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-9.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Phoenix-Statue-10.png",
      ],
    },
    {
      name: "VALORANT Luna Buddy Keychain",
      price: 14.99,
      logo: "/imgs/riotmerch/products/valorant-logo.svg",
      tags: [],
      imgs: [
        "/imgs/riotmerch/products/valorant/VALORANT-Luna-Buddy-Keychain-1.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Luna-Buddy-Keychain-2.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Luna-Buddy-Keychain-3.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Luna-Buddy-Keychain-4.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Luna-Buddy-Keychain-5.png",
        "/imgs/riotmerch/products/valorant/VALORANT-Luna-Buddy-Keychain-6.png",
      ],
    },

    //TFT
    {
      name: "Bun Bun Plush",
      price: 29.99,
      logo: "/imgs/riotmerch/products/tft-logo.svg",
      tags: [],
      imgs: [
        "/imgs/riotmerch/products/tft/Bun-Bun-Plush-1.png",
        "/imgs/riotmerch/products/tft/Bun-Bun-Plush-2.png",
        "/imgs/riotmerch/products/tft/Bun-Bun-Plush-3.png",
        "/imgs/riotmerch/products/tft/Bun-Bun-Plush-4.png",
        "/imgs/riotmerch/products/tft/Bun-Bun-Plush-5.png",
        "/imgs/riotmerch/products/tft/Bun-Bun-Plush-6.png",
      ],
    },
    {
      name: "Choncc Plush",
      price: 29.99,
      logo: "/imgs/riotmerch/products/tft-logo.svg",
      tags: [],
      imgs: [
        "/imgs/riotmerch/products/tft/Choncc-Plush-1.png",
        "/imgs/riotmerch/products/tft/Choncc-Plush-2.png",
        "/imgs/riotmerch/products/tft/Choncc-Plush-3.png",
        "/imgs/riotmerch/products/tft/Choncc-Plush-4.png",
        "/imgs/riotmerch/products/tft/Choncc-Plush-5.png",
        "/imgs/riotmerch/products/tft/Choncc-Plush-6.png",
        "/imgs/riotmerch/products/tft/Choncc-Plush-7.png",
        "/imgs/riotmerch/products/tft/Choncc-Plush-8.png",
      ],
    },
    {
      name: "Furyhorn Lazy Day Mug",
      price: 18,
      logo: "/imgs/riotmerch/products/tft-logo.svg",
      tags: [],
      imgs: [
        "/imgs/riotmerch/products/tft/Furyhorn-Lazy Day-Mug-1.png",
        "/imgs/riotmerch/products/tft/Furyhorn-Lazy Day-Mug-2.png",
        "/imgs/riotmerch/products/tft/Furyhorn-Lazy Day-Mug-3.png",
        "/imgs/riotmerch/products/tft/Furyhorn-Lazy Day-Mug-4.png",
        "/imgs/riotmerch/products/tft/Furyhorn-Lazy Day-Mug-5.png",
        "/imgs/riotmerch/products/tft/Furyhorn-Lazy Day-Mug-6.png",
        "/imgs/riotmerch/products/tft/Furyhorn-Lazy Day-Mug-7.png",
        "/imgs/riotmerch/products/tft/Furyhorn-Lazy Day-Mug-8.png",
        "/imgs/riotmerch/products/tft/Furyhorn-Lazy Day-Mug-9.png",
      ],
    },
    {
      name: "Little Legends Featherknight Mugs",
      price: 18,
      logo: "/imgs/riotmerch/products/tft-logo.svg",
      tags: [],
      imgs: [
        "/imgs/riotmerch/products/tft/Little-Legends-Featherknight-Mugs-1.png",
        "/imgs/riotmerch/products/tft/Little-Legends-Featherknight-Mugs-2.png",
        "/imgs/riotmerch/products/tft/Little-Legends-Featherknight-Mugs-3.png",
        "/imgs/riotmerch/products/tft/Little-Legends-Featherknight-Mugs-4.png",
        "/imgs/riotmerch/products/tft/Little-Legends-Featherknight-Mugs-5.png",
        "/imgs/riotmerch/products/tft/Little-Legends-Featherknight-Mugs-6.png",
        "/imgs/riotmerch/products/tft/Little-Legends-Featherknight-Mugs-7.png",
        "/imgs/riotmerch/products/tft/Little-Legends-Featherknight-Mugs-8.png",
        "/imgs/riotmerch/products/tft/Little-Legends-Featherknight-Mugs-9.png",
      ],
    },
  ];

  return (
    <>
      <div className="grid h-auto w-full gap-5 px-5 lg:px-10">
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
          {Products.slice(4, 8).map((product: IProducts, index: number) => (
            <ProductsCard key={index} product={product} index={index} />
          ))}
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          {Products.slice(8, 12).map((product: IProducts, index: number) => (
            <ProductsCard key={index} product={product} index={index} />
          ))}
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          <div className="row-span-1 w-full lg:col-span-2">
            <video
              src="/imgs/riotmerch/products/products-video-2.mp4"
              className="h-full w-full object-cover lg:max-h-[380px]"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          {Products.slice(2, 4).map((product: IProducts, index: number) => (
            <ProductsCard key={index} product={product} index={index} />
          ))}
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          {Products.slice(12, 16).map((product: IProducts, index: number) => (
            <ProductsCard key={index} product={product} index={index} />
          ))}
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          {Products.slice(16, 20).map((product: IProducts, index: number) => (
            <ProductsCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
