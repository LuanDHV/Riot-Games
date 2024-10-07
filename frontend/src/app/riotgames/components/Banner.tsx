export default function Banner() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Banner */}
      <video
        src="/imgs/riotgames/banner-video.mp4"
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      {/* Layer Banner */}
      <div className="absolute inset-0 h-full w-full bg-black opacity-30"></div>
      {/* Content */}
      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-10 px-5 text-white md:px-10">
        <img
          src="/imgs/riotgames/w24-logos.png"
          alt=""
          className="max-w-[360px] object-cover"
        />
        <h1 className="text-center text-2xl font-bold md:text-3xl">
          Chung Kết Thế Giới <br />
          Liên Minh Huyền Thoại
        </h1>
        <p className="hidden text-center text-xl text-gray-200 md:block">
          Đừng bỏ lỡ CKTG diễn ra từ ngày 25/09 cùng Lễ Khai Mạc và <br />
          Chung Kết được tổ chức vào ngày 02/11.
        </p>
      </div>
    </div>
  );
}
