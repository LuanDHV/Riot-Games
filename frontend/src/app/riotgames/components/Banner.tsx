export default function Banner() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Banner */}
      <video
        src="/imgs/riotgames/riot-games-banner-video.mp4"
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      {/* Layer Banner */}
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50"></div>
      {/* Content */}
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Your Banner Text</h1>
        <p className="text-lg md:text-xl">Your description here</p>
      </div>
    </div>
  );
}
