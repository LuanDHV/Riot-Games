import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex justify-center px-4 py-6 lg:justify-start lg:px-[72px] lg:pb-0 lg:pt-12">
        <img
          src="/imgs/auth/riotgames-white.png"
          alt="Riot Games"
          className="h-[40px] max-w-[140px] object-contain lg:h-[64px] lg:max-w-[168px]"
        />
      </div>
    </>
  );
}
