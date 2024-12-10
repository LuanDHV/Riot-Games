export default function AllBurn() {
  return (
    <>
      <div className="flex h-[600px] flex-col items-center justify-center gap-16 bg-[url('/imgs/arcane/allburn/all-burn-background.png')] bg-cover bg-center p-6 md:p-8 lg:h-[640px] lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#ece8e1] lg:w-1/2">
          <p className="mb-4 text-xl font-bold uppercase lg:text-2xl">
            Arcane Season 2 Synopsis
          </p>
          <p className="mb-2 text-2xl font-bold uppercase lg:text-5xl">
            Watch it all burn
          </p>
          <p className="text-base lg:text-lg">
            Jinx’s attack on the Council sets the stage for a dire escalation of
            the conflict between Piltover and Zaun.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/imgs/arcane/allburn/all-burn.png" alt="Your Agents" />
        </div>
      </div>
    </>
  );
}
