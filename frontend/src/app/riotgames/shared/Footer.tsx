"use client";
import Link from "next/link";

export default function Footer() {
  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerData = [
    { title: "Press", link: "#" },
    { title: "Security", link: "#" },
    { title: "Legal", link: "#" },
    { title: "Leadership", link: "#" },
    { title: "Candidate Privacy", link: "#" },
    { title: "Terms of Service", link: "#" },
    { title: "Privacy Notice", link: "#" },
    { title: "Player Support", link: "#" },
    { title: "E-Verify", link: "#" },
    { title: "Accessibility", link: "#" },
    { title: "Annual Reports", link: "#" },
  ];

  const socialIconsData = [
    {
      white: "/imgs/riotgames/footer/social-x-white.png",
      red: "/imgs/riotgames/footer/social-x-red.png",
      alt: "X",
      link: "#",
    },
    {
      white: "/imgs/riotgames/footer/social-instagram-white.png",
      red: "/imgs/riotgames/footer/social-instagram-red.png",
      alt: "Instagram",
      link: "#",
    },
    {
      white: "/imgs/riotgames/footer/social-tiktok-white.png",
      red: "/imgs/riotgames/footer/social-tiktok-red.png",
      alt: "TikTok",
      link: "#",
    },
    {
      white: "/imgs/riotgames/footer/social-linked-white.png",
      red: "/imgs/riotgames/footer/social-linked-red.png",
      alt: "LinkedIn",
      link: "#",
    },
    {
      white: "/imgs/riotgames/footer/social-facebook-white.png",
      red: "/imgs/riotgames/footer/social-facebook-red.png",
      alt: "Facebook",
      link: "#",
    },
    {
      white: "/imgs/riotgames/footer/social-youtube-white.png",
      red: "/imgs/riotgames/footer/social-youtube-red.png",
      alt: "YouTube",
      link: "#",
    },
  ];

  return (
    <div className="h-auto w-full bg-[#252423] px-5 pb-10 pt-[60px] lg:pb-5 lg:pt-0">
      <div className="mx-auto max-w-[1440px]">
        <div className="justify-between lg:flex lg:py-10">
          <div className="flex flex-col items-center lg:flex-row lg:gap-5">
            {/* Icon Chính */}
            <div className="group relative mx-auto h-auto w-10 cursor-pointer">
              <img
                src="/imgs/riotgames/footer/icon-riotgames-white.png"
                alt="Riot Games Icon"
                className="h-10 w-10 object-contain"
              />
              <img
                src="/imgs/riotgames/footer/icon-riotgames-red.png"
                alt="Riot Games Icon Red"
                className="absolute left-0 top-0 h-10 w-10 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            {/* Các Liên Kết */}
            <ul
              className="flex flex-col items-center justify-center pt-[30px] md:flex-row md:flex-wrap lg:justify-start lg:pt-0"
              style={{ width: "calc(100% - 40px)" }}
            >
              {footerData.map((data, index) => (
                <li className="py-2" key={index}>
                  <Link
                    href={data.link}
                    className="mt-[5px] p-[10px] text-[11px] font-extrabold uppercase text-white hover:underline md:mt-0"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Các Icon Mạng Xã Hội */}
          <div className="flex justify-center pb-[30px] pt-5 lg:pb-0 lg:pt-0">
            {socialIconsData.map((icon, index) => (
              <Link
                href={icon.link}
                key={index}
                className="group relative flex h-10 w-10 items-center justify-center"
              >
                <img
                  src={icon.white}
                  alt={`${icon.alt} White`}
                  className={`absolute h-4 w-4 object-contain transition-opacity duration-300`}
                />
                <img
                  src={icon.red}
                  alt={`${icon.alt} Red`}
                  className={`absolute h-4 w-4 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Đường phân cách */}
        <div className="mx-auto h-[2px] max-w-[1440px] bg-[url('/imgs/riotgames/footer/hr-bg.svg')] bg-repeat-x"></div>

        <div className="justify-between lg:flex">
          {/* Thông Tin Bổ Sung */}
          <div className="flex flex-col items-center justify-center md:flex-row">
            <span className="cursor-pointer p-[30px] text-center text-xs text-white hover:underline md:px-0 md:py-20 lg:py-[30px]">
              Cookie Preferences
            </span>
            <img
              src="/imgs/riotgames/footer/wall.png"
              alt="wall"
              className="hidden h-5 object-cover px-2 md:block"
            />
            <span className="p-[30px] text-center text-xs text-white md:px-0 md:py-20 lg:py-[30px]">
              <span>© 2024 Riot Games, Inc. All Rights Reserved.</span>
            </span>
          </div>

          {/* Đường phân cách */}
          <div className="mx-auto h-[2px] max-w-[1440px] bg-[url('/imgs/riotgames/footer/hr-bg.svg')] bg-repeat-x lg:hidden"></div>

          {/* To the Surface */}
          <div
            className="group mt-[30px] flex cursor-pointer items-center justify-center text-sm uppercase text-white"
            onClick={scrollToTop}
          >
            To the Surface
            <div className="group relative ml-2 h-2 w-7">
              <img
                src="/imgs/riotgames/footer/arrow-top-white.png"
                alt="Arrow to top"
                className="h-[7px] w-2 object-cover"
              />
              <img
                src="/imgs/riotgames/footer/arrow-top-red.png"
                alt="Arrow to top Red"
                className="absolute left-0 top-0 h-[7px] w-2 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
