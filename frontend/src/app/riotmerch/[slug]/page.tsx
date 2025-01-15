"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "next/navigation";
import { useGetProductsQuery } from "@/store/api/riotmerchApi/productsApi";
import { IProducts, TypeTags } from "../types/interface";
import AddToCart from "../components/AddToCart";

export default function DetailProduct() {
  const { slug } = useParams(); // Get slug from URL
  const {
    data: Products,
    error,
    isLoading,
    isSuccess,
  } = useGetProductsQuery(undefined);

  // Function Create Slug
  const createSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const product = Products?.find(
    (product: IProducts) => createSlug(product.name) === slug,
  );

  if (!product) return <div>Product not found!</div>;

  const getTagStyles = (tags: TypeTags) => {
    const styles = {
      "Special Edition": { bg: "bg-[#4500d5]", text: "text-white" },
      Preorder: { bg: "bg-[#666666]", text: "text-white" },
      "Limited Edition": { bg: "bg-yellow-400", text: "text-black" },
      Retired: { bg: "bg-black", text: "text-white" },
      "Riot Exclusive": { bg: "bg-[#6495ed]", text: "text-white" },
    };
    return styles[tags];
  };

  return (
    <div className="relative h-auto w-full overflow-hidden pt-20">
      {/* Tags */}
      <div className="flex justify-between gap-2 pr-6 pt-2 lg:hidden">
        <div className="flex h-10 w-40 p-2">
          <img
            src={product.logo}
            alt="Logo"
            className="w-[120px] object-contain"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <img
              src="/imgs/riotmerch/products/love-icon.svg"
              alt="Love Icon"
              className="h-10 w-10 cursor-pointer object-cover"
            />
            <img
              src="/imgs/riotmerch/products/link-icon.svg"
              alt="Love Icon"
              className="h-10 w-10 cursor-pointer object-cover"
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            {product.tags.map((tag: TypeTags, index: number) => {
              const { bg, text } = getTagStyles(tag);
              return (
                <span
                  key={index}
                  className={`rounded-sm px-2 py-1 text-sm ${bg} ${text}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex h-auto flex-col lg:flex-row">
        {/* Product Image */}
        <div className="relative flex w-full items-center justify-center bg-[url('/imgs/riotmerch/products/detail/main-background.png')] bg-cover bg-top p-6 lg:w-2/5 lg:p-0 xl:w-1/2 2xl:w-4/6">
          <div
            className={`clip-detail-slant absolute bottom-0 h-1/2 w-full bg-cover bg-center ${
              product.category === "Arcane"
                ? "bg-[url('/imgs/riotmerch/products/detail/arcane-background.png')]"
                : product.category === "League of Legends"
                  ? "bg-[url('/imgs/riotmerch/products/detail/lol-background.png')]"
                  : product.category === "Valorant"
                    ? "bg-[url('/imgs/riotmerch/products/detail/valorant-background.png')]"
                    : product.category === "Teamfight Tatics"
                      ? "bg-[url('/imgs/riotmerch/products/detail/tft-background.png')]"
                      : product.category === "LOL Esport"
                        ? "bg-[url('/imgs/riotmerch/products/detail/lol-esport-background.png')]"
                        : ""
            }`}
          />

          {/* Nav Bar */}
          <nav className="absolute left-0 top-0 w-screen">
            <ol className="flex h-10 w-full items-center gap-1 px-6 text-base lg:h-[60px] lg:px-10">
              <li className="hidden gap-1 lg:flex">
                Home <span>/</span>
              </li>
              <li className="hidden gap-1 lg:flex">
                {product.category} <span>/</span>
              </li>
              <Link href="#" className="font-bold">
                {product.name}
              </Link>
            </ol>
          </nav>
          <img
            src={product.imgs[0]}
            alt={product.name}
            className="z-10 object-cover lg:max-h-[616px] lg:max-w-[616px]"
          />
        </div>

        {/* Swiper  */}
        <div className="relative h-full w-full lg:hidden">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: `.button-next`,
              prevEl: `.button-prev`,
            }}
            spaceBetween={5}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
          >
            {product.imgs.slice(1).map((img: string, imgIndex: number) => (
              <SwiperSlide key={imgIndex}>
                <img
                  src={img}
                  alt={`${product.name} Image ${imgIndex + 2}`}
                  className="h-full w-full cursor-pointer object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation  */}
          <button className="button-prev absolute left-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
            <img
              src="/imgs/riotmerch/products/arrow-icon.svg"
              alt="Previous"
              className="h-6 w-6 rotate-180 object-cover"
            />
          </button>
          <button className="button-next absolute right-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
            <img
              src="/imgs/riotmerch/products/arrow-icon.svg"
              alt="Next"
              className="h-6 w-6 object-cover"
            />
          </button>
        </div>

        {/* Product Detail */}
        <div className="w-full pb-10 lg:w-3/5 xl:w-1/2 2xl:w-2/6">
          <div className="w-full px-10 pt-4 lg:max-h-[760px] lg:overflow-y-scroll lg:pt-10">
            <div className="mb-4 text-sm font-bold uppercase text-[#666666]">
              {product.category}
            </div>
            <h1 className="text-[38px] font-bold leading-10 lg:text-6xl">
              {product.name}
            </h1>
            {/* Tags */}
            <div className="mt-4 flex justify-between gap-2 lg:mt-10">
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <img
                    src="/imgs/riotmerch/products/love-icon.svg"
                    alt="Love Icon"
                    className="h-10 w-10 cursor-pointer object-cover"
                  />
                  <img
                    src="/imgs/riotmerch/products/link-icon.svg"
                    alt="Love Icon"
                    className="h-10 w-10 cursor-pointer object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  {product.tags.map((tag: TypeTags, index: number) => {
                    const { bg, text } = getTagStyles(tag);
                    return (
                      <span
                        key={index}
                        className={`flex min-h-10 items-center justify-center px-2 py-1 text-sm lg:min-w-[160px] lg:text-base ${bg} ${text}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="hidden py-6 text-2xl lg:block"> ${product.price}</p>
            <div className="hidden flex-col gap-2 pt-8 lg:flex">
              <p>This product is a collector's item intended for ages 14+</p>
              <p className="font-bold">Expected ship date: Dec 31, 2025</p>
            </div>
            <div className="hidden py-4 lg:block">
              <AddToCart />
            </div>
            <div className="text-base">
              <div className="my-8 hidden border border-[#d0d0d0]"></div>
              <p className="my-4 font-medium lg:mb-8">Descriptions</p>
              {product.descriptions.map(
                (description: string, index: number) => (
                  <p key={index} className="mt-4">
                    {description}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Bottom Add To Cart */}
        <div className="fixed bottom-0 z-50 hidden h-auto w-full bg-white lg:px-10 lg:py-4">
          <div className="px-5">
            <div className="flex justify-between py-4 text-base lg:text-[28px]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
                <h3 className="font-medium lg:order-2">
                  <span className="mr-2 hidden text-gray-300 lg:inline-block">
                    |
                  </span>
                  {product.name}
                </h3>
                <span className="l:mt-0 mt-1 lg:order-1">${product.price}</span>
              </div>

              <AddToCart />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper  */}
      <div className="relative hidden h-full w-full lg:block">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.button-next`,
            prevEl: `.button-prev`,
          }}
          spaceBetween={5}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
        >
          {product.imgs.slice(1).map((img: string, imgIndex: number) => (
            <SwiperSlide key={imgIndex}>
              <img
                src={img}
                alt={`${product.name} Image ${imgIndex + 2}`}
                className="h-full w-full cursor-pointer object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation  */}
        <button className="button-prev absolute left-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
          <img
            src="/imgs/riotmerch/products/arrow-icon.svg"
            alt="Previous"
            className="h-6 w-6 rotate-180 object-cover"
          />
        </button>
        <button className="button-next absolute right-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
          <img
            src="/imgs/riotmerch/products/arrow-icon.svg"
            alt="Next"
            className="h-6 w-6 object-cover"
          />
        </button>
      </div>
    </div>
  );
}
