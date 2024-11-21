import Link from "next/link";

export default function GetYourGameOne() {
  return (
    <>
      <div className="flex min-h-[480px] w-full items-center justify-center bg-[url('/imgs/teamfighttactics/getyourgameon/get-your-game-on-background.png')] bg-cover bg-center p-6 text-center md:p-8 lg:min-h-[640px] lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#fffef9] lg:w-1/2">
          <p className="mb-2 text-2xl font-bold uppercase lg:text-4xl">
            Get Your
          </p>
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            Game On
          </p>

          <p>
            Magical ink is seeping into the very fabric of the Convergence,
            transporting Little Legends to a whimsical, painted world. Perhaps
            the spirits you encounter here will bestow unique powers and paths
            to victory… if you’re willing to take the risk of asking for their
            favor.
          </p>
          <div className="my-6 flex w-full flex-col justify-center gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#6957ff] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#8778ff] sm:max-w-[200px] md:text-sm"
            >
              Play For Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
