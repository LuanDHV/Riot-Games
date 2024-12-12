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

export default function Character() {
  const Character: ICharacter[] = [
    {
      character: "/imgs/arcane/character/jinx.png",
      name: "Jinx",
      background: "/imgs/arcane/character/jinx-background.png",
      description:
        "Jinx was torn between two identities: the strong, powerful, daughter Silco raised and the fearful, weak, little sister Vi protected. Now, accepting she’s the monster that Vi created, Jinx becomes a hollow shell—she is the cursed Jinx that ruins everything.",
    },
    {
      character: "/imgs/arcane/character/vi.png",
      name: "VI",
      background: "/imgs/arcane/character/vi-background.png",
      description:
        "Accepting Powder is gone, Vi comes to terms with what she must do—handle the monster she created: Jinx. Knowing how dangerous her sister is, Vi teams up with Caitlyn and gives in to her request to don the Enforcer badge.",
    },
    {
      character: "/imgs/arcane/character/caitlyn.png",
      name: "Caitlyn",
      background: "/imgs/arcane/character/caitlyn-background.png",
      description:
        "Caitlyn is an Enforcer from Piltover. She once used her investigative prowess to expose the source of corruption in Zaun and Piltover, but after Jinx’s attack on the council, she’s abandoned hope for peace.",
    },
    {
      character: "/imgs/arcane/character/ekko.png",
      name: "Ekko",
      background: "/imgs/arcane/character/ekko-background.png",
      description:
        "Ekko empowers the Firelights, a group of Zaunites who build a new home they all fight to protect. He found an unlikely friend in Heimerdinger, and together they strive to make Zaun better.",
    },
    {
      character: "/imgs/arcane/character/heimerdinger.png",
      name: "Heimerdinger",
      background: "/imgs/arcane/character/heimerdinger-background.png",
      description:
        "Heimerdinger warned the Piltover Council about the dangers of using magic without tangible solutions for safeguarding its use. Learning from his mistakes with Jayce, Heimerdinger inspires Ekko to keep looking for a solution and works with him to solve the problem, instead of just offering advice.",
    },
    {
      character: "/imgs/arcane/character/ambessa.png",
      name: "Ambessa",
      background: "/imgs/arcane/character/ambessa-background.png",
      description:
        "Ambessa, a Noxian warrior and Mel’s mother, swears to protect her family’s name…even if it means going against her daughter’s wishes.",
    },
    {
      character: "/imgs/arcane/character/jayce.png",
      name: "Jayce",
      background: "/imgs/arcane/character/jayce-background.png",
      description:
        "After a series of events, Jayce questions his vision of using Hextech to better the lives of Piltovans. Meanwhile, together with Heimerdinger and Ekko, Jayce discovers that the use of Hextech has been poisoning the undercity. And as they investigate, they come across something more.",
    },
    {
      character: "/imgs/arcane/character/mel.png",
      name: "Mel",
      background: "/imgs/arcane/character/mel-background.png",
      description:
        "Mel’s prudent investment in Hextech has transformed Piltover into one of the greatest trading hubs in Runeterra, and her into one of the most influential people in the city. Reeling from Jinx’s attack, Mel takes a stand against her mother and Councilman Salo to protect Jayce's dream.",
    },
    {
      character: "/imgs/arcane/character/sevika.png",
      name: "Sevika",
      background: "/imgs/arcane/character/sevika-background.png",
      description:
        "Sevika has lived her entire life in the shadows of Piltover. As chem-barons wage war against each other for the Zaun throne left vacant by Silco’s death, Sevika never loses sight of what the true enemy is - Topside.",
    },
    {
      character: "/imgs/arcane/character/viktor.png",
      name: "Viktor",
      background: "/imgs/arcane/character/viktor-background.png",
      description:
        "Viktor pushes the limits of Hextech despite warnings of its dangers. Driven by guilt, Viktor sets out to fulfill his dream of giving Hextech to the people.",
    },
    {
      character: "/imgs/arcane/character/warwick.png",
      name: "Warwick",
      background: "/imgs/arcane/character/warwick-background.png",
      description:
        "A beast of Singed's creation, Warwick’s primal rage clashes with the fragmented humanity that still lies within the creature—can Vander be saved beneath all the pain?",
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | null>(
    null,
  );

  useEffect(() => {
    setSelectedCharacter(Character[0]);
  }, []);

  const handleSelectCharacter = (character: ICharacter) => {
    setSelectedCharacter(character);
    console.log("selectedCharacter", character);
  };

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
                spaceBetween: 30,
              },
            }}
            className="custom-swiper-pagination"
          >
            {Character.map((items: ICharacter, index: number) => (
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
