import Link from "next/link";

export default function Footer() {
  interface IFooterData {
    title: string;
    link: string;
  }

  const FooterData: IFooterData[] = [
    { title: "Legal", link: "#" },
    { title: "Cookie Preferences", link: "#" },
    { title: "Terms & Conditions", link: "#" },
    { title: "Privacy Policy", link: "#" },
  ];

  return (
    <>
      <div className="h-auto w-full px-5">
        <div className="relative h-[500px] bg-black">
          <div className="absolute inset-0 bg-[url('/imgs/riotmerch/footer/footer-background.png')] bg-cover bg-center opacity-50"></div>
          <div className="relative z-10 text-white">
            <p>TEXT</p>
          </div>
        </div>

        <div className="bg-black">
          <div className="flex flex-col justify-start gap-5 lg:flex-row">
            <div className="flex w-full flex-col justify-start gap-5 lg:order-2 lg:w-1/2 lg:flex-row lg:items-center lg:justify-center">
              {FooterData.map((items, index: number) => (
                <Link href={items.link} key={index}>
                  <p className="mr-10 text-base font-semibold uppercase text-white hover:underline">
                    {items.title}
                  </p>
                </Link>
              ))}
            </div>
            <div className="my-10 w-full lg:order-1 lg:w-1/2">
              <p className="ml-10 text-center text-white lg:text-start">
                Copyright Riot Games 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
