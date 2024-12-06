import Link from "next/link";

export default function Battle() {
  return (
    <>
      <div className="flex flex-col items-center gap-16 bg-[url('/imgs/teamfighttactics/battle/battle-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#fffef9] lg:order-2 lg:w-1/2">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            Battle For The Convergence
          </p>

          <p className="text-base lg:text-lg">
            Draft, deploy, and dominate with a revolving roster of League of
            Legends champions in a round-based battle for supremacy. Outsmart
            your opponents and adapt as you go—the strategy is all up to you.
          </p>
          <div className="my-6 flex w-full flex-col justify-start gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#6957ff] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#8778ff] sm:max-w-[200px] md:text-sm"
            >
              Play For Free
            </Link>
          </div>
        </div>
        <div className="w-full lg:order-1 lg:w-1/2">
          <img
            src="/imgs/teamfighttactics/battle/battle.png"
            alt="Battle For The Convergence"
          />
        </div>
      </div>
    </>
  );
}
