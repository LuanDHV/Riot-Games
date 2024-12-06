export default function Banner() {
  return (
    <div className="relative h-auto overflow-hidden">
      {/* Banner */}
      <video
        src="/imgs/leagueoflegends/banner/leagueoflegends-banner-video.mp4"
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
            src="/imgs/leagueoflegends/banner/leagueoflegends-banner-logo.png"
            alt="League of Legends"
            className="max-w-[238px] object-cover lg:max-w-[300px]"
          />
          <div className="mt-6 border border-white p-1 lg:mt-12">
            <button className="h-[60px] w-[153px] whitespace-nowrap bg-[#c8aa6e] px-6 py-4 text-sm uppercase text-[#0a1428] duration-300 ease-in-out hover:bg-[#d3bb8b] lg:h-16 lg:w-[180px] lg:px-6 lg:text-lg">
              Play For Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
