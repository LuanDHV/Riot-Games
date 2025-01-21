"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useParams } from "next/navigation";
import { useGetProductsQuery } from "@/store/api/riotmerchApi/productsApi";
import { IProducts, TypeTags } from "../types/interface";
import AddToCart from "../components/AddToCart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DetailProduct() {
  const router = useRouter();
  const { slug } = useParams(); // Get slug from URL
  const [showAddToCart, setShowAddToCart] = useState(false);
  const {
    data: Products,
    error,
    isLoading,
    isSuccess,
  } = useGetProductsQuery(undefined);

  // Function check scroll
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setShowAddToCart(true);
    } else {
      setShowAddToCart(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function Create Slug
  const createSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleDetailProduct = (prod: IProducts) => {
    const slug = createSlug(prod.name); // Create slug from product name
    router.push(`/riotmerch/${slug}`); // navigation to detail product
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  if (isSuccess) {
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

    console.log(product.category);

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

          {/* Swiper Mobile*/}
          <div className="relative h-full w-full lg:hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: `.button-next-1`,
                prevEl: `.button-prev-1`,
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
              {product.imgs.slice(1).map((img: string) => (
                <SwiperSlide key={product.id}>
                  <img
                    src={img}
                    alt={`${product.name}`}
                    className="h-full w-full cursor-pointer object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation  */}
            <button className="button-prev-1 absolute left-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
              <img
                src="/imgs/riotmerch/products/arrow-icon.svg"
                alt="Previous"
                className="h-6 w-6 rotate-180 object-cover"
              />
            </button>
            <button className="button-next-1 absolute right-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
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
                    {product.tags.map((tag: TypeTags) => {
                      const { bg, text } = getTagStyles(tag);
                      return (
                        <span
                          key={product.id}
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
                {product.descriptions.map((description: string) => (
                  <p key={product.id} className="mt-4">
                    {description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Desktop  */}
        <div className="relative hidden h-full w-full lg:block">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: `.button-next-2`,
              prevEl: `.button-prev-2`,
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
            {product.imgs.slice(1).map((img: string) => (
              <SwiperSlide key={product.id}>
                <img
                  src={img}
                  alt={`${product.name}`}
                  className="h-full w-full cursor-pointer object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation  */}
          <button className="button-prev-2 absolute left-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
            <img
              src="/imgs/riotmerch/products/arrow-icon.svg"
              alt="Previous"
              className="h-6 w-6 rotate-180 object-cover"
            />
          </button>
          <button className="button-next-2 absolute right-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
            <img
              src="/imgs/riotmerch/products/arrow-icon.svg"
              alt="Next"
              className="h-6 w-6 object-cover"
            />
          </button>
        </div>

        {/* Products By Category */}
        {product.category !== "LOL Esport" && (
          <>
            <div
              className={`flex h-[500px] w-full justify-center bg-cover bg-center lg:items-center lg:justify-start lg:pl-44 ${
                product.category === "Arcane"
                  ? "bg-[url('/imgs/riotmerch/products/productsbycategory/arcane-background.png')]"
                  : product.category === "League of Legends"
                    ? "bg-[url('/imgs/riotmerch/products/productsbycategory/lol-background.png')]"
                    : product.category === "Valorant"
                      ? "bg-[url('/imgs/riotmerch/products/productsbycategory/valorant-background.png')]"
                      : product.category === "Teamfight Tatics"
                        ? "bg-[url('/imgs/riotmerch/products/productsbycategory/tft-background.png')]"
                        : ""
              }`}
            >
              <div className="pt-10 lg:pt-0">
                <img
                  src={
                    product.category === "Arcane"
                      ? "/imgs/riotmerch/products/productsbycategory/arcane-logo.png"
                      : product.category === "League of Legends"
                        ? "/imgs/riotmerch/products/productsbycategory/lol-logo.png"
                        : product.category === "Valorant"
                          ? "/imgs/riotmerch/products/productsbycategory/valorant-logo.png"
                          : product.category === "Teamfight Tatics"
                            ? "/imgs/riotmerch/products/productsbycategory/tft-logo.png"
                            : ""
                  }
                  alt="Logo"
                  className="h-[85px] w-[230px] object-contain lg:h-[130px] lg:w-[350px]"
                />
              </div>
            </div>
            <div className="relative h-[350px] w-full">
              <div className="absolute left-0 flex h-full w-2/12 items-center justify-center text-base uppercase text-black lg:w-1/12">
                <p className="flex -rotate-90 flex-row gap-2 font-bold lg:flex-col">
                  <span className="font-normal">Shop</span>
                  {product.category}
                </p>
              </div>

              <div className="absolute -top-16 right-0 w-10/12 lg:w-11/12">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: `.button-next-3`,
                    prevEl: `.button-prev-2`,
                  }}
                  spaceBetween={10}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1280: {
                      slidesPerView: 4,
                    },
                    1536: {
                      slidesPerView: 5,
                    },
                  }}
                  loop={true}
                >
                  {Products?.filter(
                    (prod: IProducts) =>
                      prod.category === product.category &&
                      prod.id !== product.id,
                  ).map((prod: IProducts) => (
                    <SwiperSlide key={prod.id}>
                      <div
                        key={prod.id}
                        className="group h-full w-full bg-white"
                      >
                        {/* Tags */}
                        <div className="flex justify-between gap-2 px-4 pt-4">
                          <div className="flex items-center">
                            <img
                              src={product.logo}
                              alt="Logo"
                              className="w-[75px] object-contain opacity-50"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center gap-2">
                              {product.tags.map(
                                (tag: TypeTags, index: number) => {
                                  const { bg, text } = getTagStyles(tag);
                                  return (
                                    <span
                                      key={index}
                                      className={`rounded-sm px-2 py-1 text-sm ${bg} ${text}`}
                                    >
                                      {tag}
                                    </span>
                                  );
                                },
                              )}
                            </div>
                            <img
                              src="/imgs/riotmerch/products/love-icon.svg"
                              alt="Love Icon"
                              className="h-6 w-6 cursor-pointer object-cover"
                            />
                          </div>
                        </div>

                        <img
                          src={prod.imgs[0]}
                          alt={prod.name}
                          className="h-[250px] w-full cursor-pointer object-contain duration-300 ease-in-out group-hover:scale-105"
                          onClick={() => handleDetailProduct(prod)}
                        />

                        <div className="flex w-full items-center justify-between px-5">
                          <div className="flex flex-col py-4">
                            <h3
                              className="cursor-pointer text-base font-bold hover:underline"
                              onClick={() => handleDetailProduct(prod)}
                            >
                              {prod.name}
                            </h3>
                            <p className="mt-1 text-base">${prod.price}</p>
                          </div>
                          <div className="z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm border opacity-0 duration-300 ease-in-out hover:bg-[#d0d0d0] group-hover:opacity-100">
                            <img
                              src="/imgs/riotmerch/products/link-2-icon.svg"
                              alt=""
                              className="h-10 w-10 object-cover lg:h-6 lg:w-6"
                              onClick={() => handleDetailProduct(prod)}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation  */}
                <button className="button-prev-3 absolute left-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
                  <img
                    src="/imgs/riotmerch/products/arrow-icon.svg"
                    alt="Previous"
                    className="h-6 w-6 rotate-180 object-cover"
                  />
                </button>
                <button className="button-next-3 absolute right-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200">
                  <img
                    src="/imgs/riotmerch/products/arrow-icon.svg"
                    alt="Next"
                    className="h-6 w-6 object-cover"
                  />
                </button>
              </div>
            </div>
          </>
        )}

        {/* Bottom Add To Cart */}
        {showAddToCart && (
          <div className="fixed bottom-0 z-50 h-auto w-full border-t bg-white lg:px-10 lg:py-4">
            <div className="px-5">
              <div className="flex justify-between py-4 text-base lg:text-[28px]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
                  <h3 className="font-medium lg:order-2">
                    <span className="mr-2 hidden text-gray-300 lg:inline-block">
                      |
                    </span>
                    {product.name}
                  </h3>
                  <span className="l:mt-0 mt-1 lg:order-1">
                    ${product.price}
                  </span>
                </div>

                <AddToCart />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
