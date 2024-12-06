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
      </div>
    </>
  );
}
