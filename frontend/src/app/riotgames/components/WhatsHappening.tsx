import Link from "next/link";

export default function WhatsHappening() {
  const thumbs = [
    {
      title: "Watch, Play, Experience: Here’s How We’re Celebrating Arcane...",
      icon: "/imgs/riotgames/whatshappening/arcane-icon.png",
      image: "/imgs/riotgames/whatshappening/thumb1.png",
      link: "#",
      thumbMain: true,
    },
    {
      title: "Heavy Is The Crown ft. Linkin Park",
      icon: "/imgs/riotgames/whatshappening/leagueoflegends-icon.png",
      image: "/imgs/riotgames/whatshappening/thumb2.png",
      link: "#",
      thumbMain: false,
    },
    {
      title: "LoL Player Days",
      icon: "/imgs/riotgames/whatshappening/leagueoflegends-icon.png",
      image: "/imgs/riotgames/whatshappening/thumb3.png",
      link: "#",
      thumbMain: false,
    },
    {
      title: "LoL Player Days",
      icon: "/imgs/riotgames/whatshappening/valorant-icon.png",
      image: "/imgs/riotgames/whatshappening/thumb4.png",
      link: "#",
      thumbMain: false,
    },
    {
      title: "Worlds 2024 | Make Them Believe",
      icon: "/imgs/riotgames/whatshappening/leagueoflegends-icon.png",
      image: "/imgs/riotgames/whatshappening/thumb5.png",
      link: "#",
      thumbMain: false,
    },
  ];

  return (
    <div className="relative h-auto w-full bg-[#0a0a0a] px-5 py-20 md:px-10 lg:py-[100px] xl:px-20">
      <div className="mb-[30px] flex items-center justify-center text-[#F9F9F9] md:mb-[60px] md:justify-between">
        <h2 className="z-10 text-3xl font-bold md:text-5xl lg:text-start">
          What's happening?
        </h2>
        <Link
          href="#"
          className="hidden h-8 rounded-md bg-[#8a888733] px-3 py-2 text-sm font-extrabold duration-300 ease-in-out hover:brightness-125 md:flex md:items-center md:justify-center"
        >
          SEE MORE
        </Link>
      </div>

      {/* Thumbs Container */}
      <div className="relative z-30 flex h-auto flex-col items-start justify-center gap-5 xl:flex-row">
        {/* Main Thumb */}
        {thumbs
          .filter((thumb) => thumb.thumbMain)
          .map((thumb, index) => (
            <Link key={index} href={thumb.link} className="rounded-xl xl:w-3/5">
              <div className="flex flex-col">
                <div className="h-auto w-full overflow-hidden rounded-xl">
                  <img
                    src={thumb.image}
                    alt={thumb.title}
                    className="w-full cursor-pointer rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="py-4">
                  <h3 className="mb-4 text-base font-bold text-[#f9f9f9] md:text-2xl xl:text-3xl">
                    {thumb.title}
                  </h3>
                  <div className="flex items-center gap-5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#141212] lg:h-8 lg:w-8">
                      <img
                        src={thumb.icon}
                        alt=""
                        className="h-4 w-4 object-cover lg:h-6 lg:w-6"
                      />
                    </div>
                    <span className="text-xs font-extrabold text-[#656462e6] md:text-sm lg:text-base">
                      NEWS
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

        {/* Secondary Thumbs */}
        <div className="mx-auto grid w-full gap-5 md:grid-cols-2 xl:w-2/5 xl:grid-cols-1">
          {thumbs
            .filter((thumb) => !thumb.thumbMain)
            .map((thumb, index) => (
              <Link
                key={index}
                href={thumb.link}
                className="flex h-[110px] w-full cursor-pointer items-center justify-between rounded-xl bg-[#80808033] transition-transform duration-500 hover:-translate-y-2 lg:h-[140px]"
              >
                <div className="flex h-full w-3/5 flex-col justify-between px-4 py-2 lg:px-8 lg:py-4">
                  <h3 className="text-base font-bold text-[#f9f9f9] md:text-lg">
                    {thumb.title}
                  </h3>
                  <div className="flex items-center gap-5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#141212] lg:h-8 lg:w-8">
                      <img
                        src={thumb.icon}
                        alt="thumb-icon"
                        className="h-4 w-4 object-cover lg:h-6 lg:w-6"
                      />
                    </div>
                    <span className="text-xs font-extrabold text-[#656462e6] md:text-sm lg:text-base">
                      NEWS
                    </span>
                  </div>
                </div>
                <div className="w-2/5">
                  <img
                    src={thumb.image}
                    alt={thumb.title}
                    className="h-[110px] w-full rounded-xl object-cover lg:h-[140px]"
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Button See More */}
      <Link
        href="#"
        className="mx-auto mt-10 flex h-12 w-[110px] items-center justify-center rounded-md bg-[#8a888733] px-3 py-2 text-sm font-extrabold text-[#F9F9F9F9] duration-300 ease-in-out hover:brightness-125 md:hidden"
      >
        SEE MORE
      </Link>

      {/* Background Blur */}
      <div className="absolute left-1/2 top-1/2 z-0 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 opacity-50 blur-[160px]"></div>
    </div>
  );
}
