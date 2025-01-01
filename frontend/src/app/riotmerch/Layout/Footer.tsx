import Link from "next/link";

export default function Footer() {
  interface ISubItems {
    title: string;
    link: string;
  }
  interface IFooterDataSection1 {
    title: string;
    subItems: ISubItems[];
  }

  interface IFormFields {
    label: string;
    type: string;
  }

  interface IFooterDataSection2 {
    title: string;
    link: string;
  }

  const FooterDataSection1: IFooterDataSection1[] = [
    {
      title: "Shop",
      subItems: [
        { title: "Apparel", link: "#" },
        { title: "Collectibles", link: "#" },
        { title: "Art", link: "#" },
        { title: "Accessories", link: "#" },
      ],
    },
    {
      title: "Support",
      subItems: [
        { title: "Order Status", link: "#" },
        { title: "Gift Card Balance", link: "#" },
        { title: "Verify Your Product", link: "#" },
        { title: "FAQs", link: "#" },
        { title: "Shipping Information", link: "#" },
        { title: "Return Policy", link: "#" },
        { title: "Collectability Guide", link: "#" },
        { title: "Accessibility", link: "#" },
      ],
    },
  ];

  const FormFields: IFormFields[] = [
    { label: "Name", type: "text" },
    { label: "Email Address*", type: "text" },
    { label: "Order Number*", type: "text" },
    { label: "Country*", type: "text" },
    { label: "Tracking Number", type: "text" },
    { label: "Subject*", type: "text" },
    { label: "How can we help?*", type: "text" },
  ];

  const FooterDataSection2: IFooterDataSection2[] = [
    { title: "Legal", link: "#" },
    { title: "Cookie Preferences", link: "#" },
    { title: "Terms & Conditions", link: "#" },
    { title: "Privacy Policy", link: "#" },
  ];

  return (
    <>
      <div className="clip-top-left-slant h-auto w-full bg-black bg-[url('/imgs/riotmerch/footer/footer-background.png')] bg-cover bg-center">
        <div className="w-full px-5 text-white lg:ml-10 lg:mt-16 lg:w-5/6 lg:p-0">
          <div className="mt-4 grid lg:mt-0 lg:grid-flow-col">
            <div className="">
              <img
                src="/imgs/riotmerch/footer/riotgames-white.png"
                alt=""
                className="mt-10 h-[30px] max-w-[75px] object-contain"
              />
            </div>
            {FooterDataSection1.map((items, index) => (
              <div className="mt-10 lg:ml-20" key={index}>
                <span className="text-base font-semibold text-[#888888]">
                  {items.title}
                </span>
                <div className="mt-[30px] grid gap-2">
                  {items.subItems.map((subItems, subIndex) => (
                    <Link href={subItems.link} key={subIndex}>
                      <p className="text-base font-semibold uppercase text-white hover:underline">
                        {subItems.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mb-[60px] mt-10 lg:ml-[150px]">
              <span className="text-base font-semibold text-[#888888]">
                Contact Us
              </span>
              <div className="grid gap-5">
                <div className="mt-[30px] grid grid-cols-2 gap-5">
                  {FormFields.slice(0, 4).map((field, index) => (
                    <div key={index}>
                      <p className="mb-[5px] text-sm">{field.label}</p>
                      <input
                        type={field.type}
                        className="h-10 w-full bg-[#1b1d1f] p-4 text-white outline-none focus:bg-white focus:text-black"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid gap-5">
                  {FormFields.slice(4).map((field, index) => (
                    <div key={index}>
                      <p className="mb-[5px] text-sm">{field.label}</p>
                      <input
                        type={field.type}
                        className="h-10 w-full bg-[#1b1d1f] p-4 text-white outline-none focus:bg-white focus:text-black"
                      />
                    </div>
                  ))}
                  <div className="grid justify-items-end">
                    <button className="clip-button-slant h-[50px] w-full bg-white text-base font-bold uppercase text-black duration-300 ease-in-out hover:brightness-75 lg:max-w-[265px]">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid bg-black px-5 lg:grid-cols-2 lg:px-0">
          <div className="grid gap-2 lg:order-2 lg:grid-cols-4 lg:place-items-center lg:gap-5">
            {FooterDataSection2.map(
              (items: IFooterDataSection2, index: number) => (
                <Link href={items.link} key={index}>
                  <p className="mr-10 text-base font-semibold uppercase text-white hover:underline">
                    {items.title}
                  </p>
                </Link>
              ),
            )}
          </div>
          <div className="my-10 lg:order-1">
            <p className="text-center text-white lg:ml-10 lg:text-start">
              Copyright Riot Games 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
