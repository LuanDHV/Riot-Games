import Link from "next/link";

export default function TheGlobe() {
  return (
    <>
      <div className="flex min-h-[650px] flex-col items-center justify-center gap-16 bg-[url('/imgs/arcane/theglobe/the-globe-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#ece8e1] lg:w-1/2">
          <p className="mb-4 text-xl font-bold uppercase lg:text-2xl">
            Watch, Play, Experience
          </p>
          <p className="mb-2 text-3xl font-bold uppercase lg:text-6xl">
            Arcane Across The Globe
          </p>
          <p className="text-base italic lg:text-lg">
            We’re excited to share the first batch of many upcoming Arcane
            events in celebration of season two!
          </p>
          <div className="my-6 flex w-full flex-col justify-start gap-4 sm:flex-row lg:my-12">
            <Link href="#">
              <p className="border-2 border-[#3d528f] bg-[#3d528f] bg-gradient-to-b from-[#0a0a0a66] to-[#3d528f00] px-8 py-5 text-center font-bold uppercase outline outline-2 outline-[#3d528f] duration-300 ease-in-out hover:bg-[#6374a5] lg:text-xl">
                Learn More
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/imgs/arcane/theglobe/the-globe.png" alt="The Globe" />
        </div>
      </div>
    </>
  );
}
