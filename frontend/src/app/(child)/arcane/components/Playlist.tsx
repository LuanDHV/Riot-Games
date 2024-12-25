import Link from "next/link";

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
          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-center">
            <p className="text-base font-bold uppercase lg:text-lg">
              Listen On
            </p>
            <div className="flex gap-2">
              <Link href="#">
                <img src="/imgs/arcane/playlist/spotify.svg" alt="Listen On" />
              </Link>
              <Link href="#">
                <img
                  src="/imgs/arcane/playlist/appleMusic.svg"
                  alt="Listen On"
                />
              </Link>
              <Link href="#">
                <img src="/imgs/arcane/playlist/deezer.svg" alt="Listen On" />
              </Link>
              <Link href="#">
                <img
                  src="/imgs/arcane/playlist/amazonMusic.svg"
                  alt="Listen On"
                />
              </Link>
              <Link href="#">
                <img
                  src="/imgs/arcane/playlist/youtubeMusic.svg"
                  alt="Listen On"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:order-1 lg:w-1/2">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3KVUsNUmJc2?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
