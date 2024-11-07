import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative h-auto overflow-hidden">
      {/* Banner */}

      <video
        src="/imgs/riotgames/banner/arcane-banner-video.mp4"
        className="min-h-[550px] w-full object-cover lg:max-h-[765px]"
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
            src="/imgs/riotgames/banner/arcane-logo.png"
            alt="logo"
            className="max-w-[325px] object-cover lg:max-w-[500px]"
          />
          <h1 className="text-center text-[27px] font-bold md:xl:text-3xl">
            Final Season Starts November 9
          </h1>
          <p className="hidden text-center text-xl text-gray-200 md:block">
            Jinx’s attack on the Council sets the stage for a dire <br />{" "}
            escalation of the conflict between Piltover and Zaun.
          </p>
          {/* Button Play Now */}
          <button>
            <Link
              href="/leagueoflegends"
              className="flex h-[50px] w-[150px] items-center justify-evenly rounded-full bg-gradient-to-b from-[#dbe0ee] to-[#4d65ac] px-3 duration-300 ease-in-out hover:to-[#b5aef3] lg:h-[72px] lg:w-[200px] lg:rounded-3xl"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black lg:h-12 lg:w-12">
                <img
                  src="/imgs/riotgames/others/arrow-right.png"
                  alt="arrow-right"
                />
              </div>
              <span className="text-2xl font-bold text-[#0F1422] lg:xl:text-3xl">
                Watch
              </span>
            </Link>
          </button>
        </div>
        <div className="h-full lg:w-4/6"></div>
      </div>
    </div>
  );
}
