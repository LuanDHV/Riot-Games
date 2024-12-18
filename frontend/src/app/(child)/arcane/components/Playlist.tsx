export default function Playlist() {
  return (
    <>
      <div className="flex min-h-[650px] flex-col items-center justify-center gap-16 bg-[url('/imgs/arcane/playlist/playlist-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#f5f5f5] lg:order-2 lg:w-1/2">
          <p className="mb-4 text-xl font-bold uppercase lg:text-2xl">
            Music of Arcane
          </p>
          <p className="mb-2 text-3xl font-bold uppercase lg:text-6xl">
            Arcane Official Playlist
          </p>
          <p className="text-base italic lg:text-lg">
            Everything that ends sparks a new beginning. Listen to the music of
            Arcane Season 2, now streaming on Netflix.
          </p>
        </div>
        <div className="w-full lg:order-1 lg:w-1/2">
          <div className="h-full w-full rounded-xl bg-[#006000] p-6 text-[#f5f5f5]">
            Arcane Official Playlist
          </div>
        </div>
      </div>
    </>
  );
}
