import Link from "next/link";

export default function YourAgents() {
  return (
    <>
      <div className="flex flex-col items-center gap-16 bg-[url('/imgs/valorant/youragents/youragents-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#ece8e1] lg:order-2 lg:w-1/2">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            Your Agents
          </p>
          <p className="mb-2 text-base font-bold uppercase lg:text-lg">
            Creativity Is Your Greatest Weapon
          </p>
          <p className="text-base lg:text-lg">
            More than guns and bullets, you’ll choose an Agent armed with
            adaptive, swift, and lethal abilities that create opportunities to
            let your gunplay shine. No two Agents play alike, just as no two
            highlight reels will look the same.
          </p>
          <div className="my-6 flex w-full flex-col justify-start gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#0f1923] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#ece8e1] hover:text-[#0f1923] sm:max-w-[200px] md:text-sm"
            >
              View All Agents
            </Link>
          </div>
        </div>
        <div className="w-full lg:order-1 lg:w-1/2">
          <img
            src="/imgs/valorant/youragents/youragents.png"
            alt="Your Agents"
          />
        </div>
      </div>
    </>
  );
}
