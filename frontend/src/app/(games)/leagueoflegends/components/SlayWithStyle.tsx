import Link from "next/link";

export default function SlayWithStyle() {
  return (
    <>
      <div className="flex h-auto flex-col gap-4 bg-[url('/imgs/leagueoflegends/slaywithstyle/sws-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:p-12 xl:px-[200px]">
        <div className="w-full lg:order-2 lg:w-1/2">
          <div className="flex flex-col items-start justify-start text-white">
            <p className="mb-2 text-xl font-bold uppercase italic lg:text-2xl">
              Slay With
            </p>
            <p className="mb-4 text-[56px] font-bold uppercase italic md:text-[64px] lg:text-[80px]">
              Style
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              Make it personal by changing up the look of your favorite
              champions with skins.
            </p>
          </div>
          <div className="my-6 flex w-full flex-col justify-start gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#c8aa6e] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#d3bb8b] sm:max-w-[145px] md:text-sm"
            >
              Play Now
            </Link>
          </div>
        </div>
        <div className="w-full lg:order-1 lg:w-1/2">
          <img src="/imgs/leagueoflegends/slaywithstyle/akali.png" alt="" />
        </div>
      </div>
    </>
  );
}
