import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div className="relative h-auto overflow-hidden">
        {/* Banner */}
        <video
          src="/imgs/arcane/banner/arcane-banner-video.mp4"
          className="h-screen w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Layer Banner */}
        <div className="absolute inset-0 h-full w-full bg-black opacity-30"></div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex h-full w-full cursor-pointer justify-center p-6 md:p-8 lg:flex-row lg:p-12">
          <div className="flex w-full flex-col">
            <div className="flex h-full w-full flex-col items-center justify-between font-semibold uppercase text-[#f9f9f9] lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-2">
                <img
                  src="/imgs/arcane/banner/arcane-banner-logo.png"
                  alt="Arcane"
                  className="max-w-[300px] object-cover lg:max-w-[370px]"
                />
                <span className="bg-black px-2 py-1 text-center text-xl lg:text-2xl">
                  Arcane Season 2 Out Now
                </span>
              </div>

              <Link
                href="https://www.netflix.com/vn-en/title/81435684"
                className="p-6"
              >
                <p className="border-2 border-[#3d528f] bg-[#3d528f] bg-gradient-to-b from-[#0a0a0a66] to-[#3d528f00] px-8 py-5 outline outline-2 outline-[#3d528f] duration-300 ease-in-out hover:bg-[#6374a5] lg:text-xl">
                  Watch
                </p>
              </Link>
            </div>

            <div className="flex h-auto w-full flex-col items-center justify-center gap-6 lg:items-end lg:justify-end">
              <div className="flex w-full snap-x snap-mandatory flex-row gap-4 overflow-x-auto lg:order-2">
                <div className="flex h-[180px] w-[325px] flex-shrink-0 snap-start items-center justify-center bg-black text-white">
                  NEWS
                </div>
                <div className="flex h-[180px] w-[325px] flex-shrink-0 snap-start items-center justify-center bg-black text-white">
                  NEWS
                </div>
                <div className="flex h-[180px] w-[325px] flex-shrink-0 snap-start items-center justify-center bg-black text-white">
                  NEWS
                </div>
                <div className="flex h-[180px] w-[325px] flex-shrink-0 snap-start items-center justify-center bg-black text-white">
                  NEWS
                </div>
                <div className="flex h-[180px] w-[325px] flex-shrink-0 snap-start items-center justify-center bg-black text-white">
                  NEWS
                </div>
                <div className="flex h-[180px] w-[325px] flex-shrink-0 snap-start items-center justify-center bg-black text-white">
                  NEWS
                </div>
                <div className="flex h-[180px] w-[325px] flex-shrink-0 snap-start items-center justify-center bg-black text-white">
                  NEWS
                </div>
                <div className="flex h-[180px] w-[325px] flex-shrink-0 snap-start items-center justify-center bg-black text-white">
                  NEWS
                </div>
                <div className="flex h-[180px] w-[325px] flex-shrink-0 snap-start items-center justify-center bg-black text-white">
                  NEWS
                </div>
              </div>

              <div className="clip-under-right-slant-mobile lg:clip-under-right-slant-desktop flex h-[120px] w-full flex-col items-center justify-center gap-5 bg-[#0a0a0ab8] lg:order-1 lg:h-[115px] lg:w-[240px]">
                <p className="text-base uppercase text-[#f5f5f5]">Only On</p>
                <img
                  src="/imgs/arcane/banner/netflix-logo.png"
                  alt="Arcane"
                  className="max-w-[120px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
