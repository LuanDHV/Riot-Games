import Link from "next/link";

export default function YourMaps() {
  return (
    <>
      <div className="flex flex-col items-center gap-16 bg-[url('/imgs/valorant/yourmaps/youramaps-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#0f1923] lg:w-1/2">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            Your Maps
          </p>
          <p className="mb-2 text-base font-bold uppercase lg:text-lg">
            Fight Around The World
          </p>
          <p className="text-base lg:text-lg">
            Each map is a playground to showcase your creative thinking.
            Purpose-built for team strategies, spectacular plays, and clutch
            moments. Make the play others will imitate for years to come..
          </p>
          <div className="my-6 flex w-full flex-col justify-start gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#ff4655] px-8 py-5 text-center text-xs font-medium uppercase text-[#ece8e1] duration-300 ease-in-out hover:bg-[#0f1923] sm:max-w-[200px] md:text-sm"
            >
              View All Maps
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/imgs/valorant/yourmaps/yourmaps.png" alt="Your Maps" />
        </div>
      </div>
    </>
  );
}
