import Link from "next/link";

export default function WelcomeToWildRift() {
  return (
    <>
      <div className="h-[45px] w-full bg-[url('/imgs/wildrift/welcometowildrift/welcome-to-wildrift-background-1.png')] bg-cover bg-center md:h-[72px] lg:h-[115px] xl:h-[175px]"></div>
      <div className="flex flex-col items-center gap-16 bg-[url('/imgs/wildrift/welcometowildrift/welcome-to-wildrift-background-2.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#fffef9] lg:w-1/2">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            Welcome To Wild Rift
          </p>
          <p className="text-base lg:text-lg">
            Team up with friends and test your skills in 5v5 MOBA combat. All
            the high-skill competition you crave, designed especially for mobile
            with revamped controls and streamlined matches.
          </p>
          <div className="my-6 flex w-full flex-col justify-start gap-4 sm:flex-row lg:my-12">
            <Link
              href="#"
              className="w-full bg-[#141e37] px-8 py-5 text-center text-xs font-medium uppercase duration-300 ease-in-out hover:bg-[#ffffff] hover:text-[#141e37] sm:max-w-[165px] md:text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          {/* Responsive Video Wrapper */}
          <div className="aspect-[16/9] w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/pNjWjwae-us"
              title="How To Play Teamfight Tactics"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="h-[45px] w-full bg-[url('/imgs/wildrift/welcometowildrift/welcome-to-wildrift-background-3.png')] bg-cover bg-center md:h-[72px] lg:h-[115px] xl:h-[175px]"></div>
    </>
  );
}
