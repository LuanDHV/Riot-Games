import Link from "next/link";

export default function Career() {
  return (
    <>
      <div className="flex h-auto w-full flex-col md:flex-row lg:px-0 lg:pt-0">
        <div className="flex w-full bg-[#dbe0ee] lg:w-1/2 xl:justify-end">
          <div className="mx-auto flex h-full w-full flex-col items-center justify-center px-4 pt-20 md:max-w-[620px] lg:px-[30px] xl:mx-0">
            <h2 className="mb-6 text-3xl font-bold text-[#0a0a0a] lg:text-5xl">
              We’re hiring!
            </h2>
            <p className="mb-10 text-center text-xl font-semibold text-[#2e3d67] md:mx-10">
              Team up with Riot to forge your path and craft unforgettable
              experiences for players
            </p>
            <div className="mb-10 flex w-full gap-5">
              <Link href="#" className="w-1/2 text-center">
                <div className="flex h-36 w-full flex-col justify-center rounded-lg bg-[#b8c1de99] p-6 duration-300 ease-in-out hover:bg-[#8080804d]">
                  <p className="text-6xl font-bold text-[#0a0a0a]">110</p>
                  <p className="text-lg font-semibold text-[#2e3d67] lg:text-2xl">
                    Open Positions
                  </p>
                </div>
              </Link>
              <Link href="#" className="w-1/2 text-center">
                <div className="flex h-36 w-full flex-col justify-center rounded-lg bg-[#b8c1de99] p-6 duration-300 ease-in-out hover:bg-[#8080804d]">
                  <p className="text-6xl font-bold text-[#0a0a0a]">25</p>
                  <p className="text-lg font-semibold text-[#2e3d67] lg:text-2xl">
                    Offices
                  </p>
                </div>
              </Link>
            </div>
            <Link
              href="#"
              className="mx-auto mb-10 flex h-16 w-full max-w-[450px] items-center justify-center rounded-3xl bg-[#4d65ac] duration-300 ease-in-out hover:brightness-110 md:max-w-[260px]"
            >
              <span className="text-xl font-bold text-[#f9f9f9]">
                Explore Careers
              </span>
            </Link>
          </div>
        </div>
        <div className="relative w-full bg-[#dbe0ee] lg:w-1/2">
          <img
            src="/imgs/riotgames/careers/annie-1.jpg"
            alt="annie"
            className="h-full w-full object-cover md:hidden"
          />

          <img
            src="/imgs/riotgames/careers/annie-2.jpg"
            alt="annie"
            className="clip-left-slant hidden h-full w-full object-cover md:block"
          />
        </div>
      </div>
    </>
  );
}
