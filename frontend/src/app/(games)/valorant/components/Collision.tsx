import Link from "next/link";

export default function Collision() {
  return (
    <>
      <div className="flex min-h-[480px] w-full items-center bg-[url('/imgs/valorant/collision/collision-background.png')] bg-cover bg-center p-6 md:p-8 lg:min-h-[640px] lg:p-12 xl:px-[200px]">
        <div className="w-full uppercase text-[#ece8e1]">
          <p className="mb-4 text-5xl font-extrabold lg:text-8xl">Collision</p>
          <p className="mb-2 text-base font-bold lg:text-lg">
            Episode_09 // Act III / Yr 4
          </p>
          <div className="flex w-full flex-col justify-start gap-4 sm:flex-row">
            <Link
              href="#"
              className="w-full bg-[#0f1923] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#ece8e1] sm:max-w-[145px] md:text-sm"
            >
              Play Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
