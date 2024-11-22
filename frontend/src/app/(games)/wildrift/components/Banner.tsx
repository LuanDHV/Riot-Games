import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div className="relative h-auto overflow-hidden">
        {/* Banner */}
        <video
          src="/imgs/wildrift/banner/wildrift-banner-video.mp4"
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
              src="/imgs/wildrift/banner/wildrift-banner-logo.png"
              alt="Wild Rift"
              className="max-w-[238px] object-cover lg:max-w-[368px]"
            />

            <div className="mt-20 flex flex-col items-center gap-5">
              <p className="text-base font-bold uppercase text-[#ece8e1] lg:text-lg">
                League Of Legends, Now On Mobile, Play For Free!
              </p>
              <div className="flex gap-5">
                <Link href="#">
                  <img
                    src="/imgs/wildrift/banner/gg-play.png"
                    alt=""
                    className="h-10 max-w-[140px] object-cover"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="/imgs/wildrift/banner/app-store.png"
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
