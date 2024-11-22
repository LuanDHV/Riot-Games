import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div className="relative h-auto overflow-hidden">
        {/* Banner */}
        <video
          src="/imgs/teamfighttactics/banner/tft-banner-video.mp4"
          className="min-h-[580px] w-full object-cover lg:max-h-[640px]"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Layer Banner */}
        <div className="absolute inset-0 h-full w-full bg-black opacity-30"></div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex h-full w-full cursor-pointer items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/imgs/teamfighttactics/banner/tft-banner-logo.png"
              alt="Team Fight Tatic"
              className="max-w-[238px] object-cover lg:max-w-[368px]"
            />
            <div className="mt-6 border border-white p-1 lg:mt-12">
              <button className="h-[60px] w-[153px] whitespace-nowrap bg-[#6957ff] px-6 py-4 text-sm uppercase text-[#fff3f9] duration-300 ease-in-out hover:bg-[#8778ff] lg:h-16 lg:w-[180px] lg:px-6 lg:text-lg">
                Play For Free
              </button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-5">
              <p className="text-base font-bold uppercase text-[#ece8e1] lg:text-lg">
                Play For Free On Mobile Or Desktop
              </p>
              <div className="flex gap-5">
                <Link href="#">
                  <img
                    src="/imgs/teamfighttactics/banner/gg-play.png"
                    alt=""
                    className="h-10 max-w-[140px] object-cover"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="/imgs/teamfighttactics/banner/app-store.png"
                    alt=""
                    className="h-10 max-w-[120px] object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
