import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Banner */}
      <video
        src="/imgs/riotgames/banner/riotgames-banner-video.mp4"
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      {/* Layer Banner */}
      <div className="absolute inset-0 h-full w-full bg-black opacity-30"></div>
      {/* Content */}
      <div className="absolute inset-0 flex h-full w-full flex-row items-start justify-center px-5 text-white md:px-20">
        <div className="flex h-full w-full flex-col items-center justify-center gap-10 lg:w-2/6">
          <img
            src="/imgs/riotgames/games/w24-logos.png"
            alt="logo"
            className="max-w-[215px] object-cover lg:max-w-[360px]"
          />
          <h1 className="text-center text-2xl font-bold md:xl:text-3xl">
            World Finals <br />
            League of Legends
          </h1>
          <p className="hidden text-center text-xl text-gray-200 md:block">
            Don't miss Worlds starting September 25 with the Opening Ceremony
            and The Final was held on November 2.
          </p>
          {/* Button Play Now */}
          <button>
            <Link
              href="/leagueoflegends"
              className="flex h-[50px] w-[184px] items-center justify-evenly rounded-2xl bg-gradient-to-r from-[#2c8cc2] to-[#0bc4e2] px-3 duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500 hover:brightness-125 lg:h-[72px] lg:w-[244px]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12">
                <img
                  src="/imgs/riotgames/others/arrow-right.png"
                  alt="arrow-right"
                />
              </div>
              <span className="text-2xl font-bold text-white lg:xl:text-3xl">
                Play Now
              </span>
            </Link>
          </button>
        </div>
        <div className="h-full lg:w-4/6"></div>
      </div>
    </div>
  );
}
