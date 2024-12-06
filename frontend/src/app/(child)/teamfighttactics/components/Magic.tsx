import Link from "next/link";

export default function Magic() {
  return (
    <>
      <div className="flex min-h-[480px] w-full items-center bg-[url('/imgs/teamfighttactics/magic/magic-background.png')] bg-cover bg-center p-6 md:p-8 lg:min-h-[640px] lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#fffef9] lg:w-1/2">
          <p className="mb-2 text-2xl font-bold uppercase lg:text-4xl">
            Teamfight Tactics
          </p>
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            MAGIC ‘N MAYHEM
          </p>

          <p>
            Whip out those wands and take out your tomes as magic makes its mark
            on the Convergence. Will you be able to conjure your curiosity and
            master every magic to spell ultimate victory? Then hurry! The
            Magitorium awaits.
          </p>
          <div className="my-6 flex w-full flex-col justify-start gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#6957ff] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#8778ff] sm:max-w-[200px] md:text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
