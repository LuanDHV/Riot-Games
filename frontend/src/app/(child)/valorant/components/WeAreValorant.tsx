import Link from "next/link";

export default function WeAreValorant() {
  return (
    <>
      <div className="flex flex-col items-center gap-16 bg-[url('/imgs/valorant/wearevalorant/wearevalorant-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#0f1923] lg:w-1/2">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            We Are Valorant
          </p>
          <p className="mb-2 text-base font-bold uppercase lg:text-lg">
            Defy The Limits
          </p>
          <p className="text-base lg:text-lg">
            Blend your style and experience on a global, competitive stage. You
            have 13 rounds to attack and defend your side using sharp gunplay
            and tactical abilities. And, with one life per-round, you'll need to
            think faster than your opponent if you want to survive. Take on foes
            across Competitive and Unranked modes as well as Deathmatch and
            Spike Rush.
          </p>
          <div className="my-6 flex w-full flex-col justify-start gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#ff4655] px-8 py-5 text-center text-xs font-medium uppercase text-[#ece8e1] duration-300 ease-in-out hover:bg-[#0f1923] sm:max-w-[200px] md:text-sm"
            >
              Learn The Game
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <video
            src="/imgs/valorant/wearevalorant/wearevalorant.mp4"
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
