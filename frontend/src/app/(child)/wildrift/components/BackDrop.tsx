export default function BackDrop() {
  return (
    <>
      <div className="relative h-auto overflow-hidden">
        {/* Banner */}
        <video
          src="/imgs/wildrift/backdrop/backdrop.mp4"
          className="min-h-[440px] w-full object-cover lg:max-h-[640px]"
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
