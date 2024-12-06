export default function PickUpAndGo() {
  return (
    <>
      <div className="flex flex-col items-center gap-16 bg-[url('/imgs/teamfighttactics/pickupandgo/pick-up-and-go-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#fffef9] lg:w-1/2">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            Pick Up And Go
          </p>
          <p className="text-base lg:text-lg">
            Cross-platform support means you can play with your friends (and
            crush your enemies) across PC, Mac and mobile.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <video
            src="/imgs/teamfighttactics/pickupandgo/pick-up-and-go.mp4"
            className="w-full object-cover lg:max-h-[640px]"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </>
  );
}
