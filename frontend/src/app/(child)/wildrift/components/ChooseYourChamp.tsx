import Link from "next/link";

export default function ChooseYourChamp() {
  return (
    <>
      <div className="h-[45px] w-full bg-[url('/imgs/wildrift/chooseyourchamp/choose-your-champ-background-1.png')] bg-cover bg-center md:h-[72px] lg:h-[115px] xl:h-[175px]"></div>
      <div className="flex flex-col items-center gap-16 bg-[url('/imgs/wildrift/chooseyourchamp/choose-your-champ-background-2.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#141e37] lg:order-2 lg:w-1/2">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            Choose Your Champ
          </p>
          <p className="text-base lg:text-lg">
            Dunk on the competition with a giant sword, freeze enemies in their
            tracks with a cross-the-map ice arrow, or lure opponents to their
            doom with graceful charm. Whatever your style, there’s a champ for
            you.
          </p>
          <div className="my-6 flex w-full flex-col justify-start gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#141e37] px-8 py-5 text-center text-xs font-medium uppercase text-[#ffffff] duration-300 ease-in-out hover:bg-[#32c8ff] sm:max-w-[210px] md:text-sm"
            >
              Find Your Champ
            </Link>
            <Link
              href="#"
              className="w-full px-8 py-5 text-center text-xs font-medium uppercase text-[##141e37] duration-300 ease-in-out sm:max-w-[210px] md:text-sm"
            >
              View All Champ
            </Link>
          </div>
        </div>
        <div className="w-full lg:order-1 lg:w-1/2">
          <img
            src="/imgs/wildrift/chooseyourchamp/choose-your-champ.png"
            alt="Choose Your Champ"
          />
        </div>
      </div>
      <div className="h-[45px] w-full bg-[url('/imgs/wildrift/chooseyourchamp/choose-your-champ-background-3.png')] bg-cover bg-center md:h-[72px] lg:h-[115px] xl:h-[175px]"></div>
    </>
  );
}
