"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import { useGetProductsQuery } from "@/store/api/riotmerchApi/productsApi";
import { IProducts, IRiotMerchCartProps } from "../types/interface";
import { useEffect, useState } from "react";

export default function RiotMerchCart({
  openRiotMerchCart,
  setOpenRiotMerchCart,
}: IRiotMerchCartProps) {
  if (!openRiotMerchCart) return null;
  const router = useRouter();

  const {
    data: Products,
    error,
    isLoading,
    isSuccess,
  } = useGetProductsQuery(undefined);

  const [randomProducts, setRandomProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    if (Products) {
      setRandomProducts(
        [...Products].sort(() => Math.random() - 0.5).slice(0, 10),
      );
    }
  }, [Products]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // Function Create Slug
  const createSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleDetailProduct = (name: string) => {
    setOpenRiotMerchCart(!openRiotMerchCart);
    const slug = createSlug(name);
    router.push(`/riotmerch/${slug}`);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpenRiotMerchCart(!openRiotMerchCart)}
        ></div>

        {/* Cart Menu */}
        <div className="relative right-0 flex h-full w-full bg-white md:w-[448px]">
          <div className="flex w-full flex-col pt-10">
            <div className="w-full px-8 pb-8">
              <div className="flex items-center justify-between">
                <h2 className="flex gap-1 text-base font-bold uppercase lg:text-[28px]">
                  Cart <span className="text-xs">(0)</span>
                </h2>

                <button
                  className="flex items-center gap-1"
                  onClick={() => setOpenRiotMerchCart(!openRiotMerchCart)}
                >
                  <span className="uppercase">Close</span>
                  <img
                    src="/imgs/riotmerch/products/close-icon.svg"
                    alt="Close Icon"
                  />
                </button>
              </div>
            </div>
            <div className="w-full px-8 pb-8">
              <p className="border-y-[1px] border-[#d0d0d0] py-8">
                Your cart is empty
              </p>

              {/* Swiper */}
              <div className="pt-8">
                <p className="">You Might Be Interested In</p>
                <div className="py-4">
                  <div className="p-4">
                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        nextEl: `.button-next-cart`,
                        prevEl: `.button-prev-cart`,
                      }}
                      spaceBetween={10}
                      slidesPerView={1}
                      loop={randomProducts.length > 1}
                    >
                      {isSuccess &&
                        randomProducts.map((product: IProducts) => (
                          <SwiperSlide key={product.id}>
                            <div className="flex items-center justify-between">
                              <div className="flex gap-2">
                                <img
                                  src={product.imgs[0]}
                                  alt={product.name}
                                  className="h-14 w-14 cursor-pointer object-cover"
                                />
                                <div className="text-base">
                                  <h2 className="font-bold">
                                    {product.name.length > 20
                                      ? product.name.substring(0, 24) + "..."
                                      : product.name}
                                  </h2>
                                  <p className="">${product.price}</p>
                                </div>
                              </div>
                              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm border duration-300 ease-in-out hover:bg-[#e7e7e7]">
                                <img
                                  src="/imgs/riotmerch/products/link-2-icon.svg"
                                  alt="Link Icon"
                                  className="h-6 w-6 object-cover"
                                  onClick={() =>
                                    handleDetailProduct(product.name)
                                  }
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                </div>

                <div className="flex justify-around px-6 py-4">
                  {/* Custom Navigation */}
                  <button className="button-prev-cart flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 ease-in-out hover:bg-gray-200">
                    <img
                      src="/imgs/riotmerch/products/arrow-icon.svg"
                      alt="Prev"
                      className="h-6 w-6 rotate-180 object-cover"
                    />
                  </button>
                  <button className="button-next-cart flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 ease-in-out hover:bg-gray-200">
                    <img
                      src="/imgs/riotmerch/products/arrow-icon.svg"
                      alt="Next"
                      className="h-6 w-6 object-cover"
                    />
                  </button>
                </div>
              </div>

              {/* Show When Cart is not Empty */}
              {/* <div className="flex gap-4 border-y-[1px] border-[#d0d0d0] py-8">
                <div className="flex min-h-[103px] min-w-[103px] items-center justify-center">
                  <img
                    src="/imgs/riotmerch/products/arcane/Test-Img-Add-To-Card.png"
                    alt="Img Product"
                    className="h-[76px] w-[76px] object-cover"
                  />
                </div>
                <div className="flex w-full flex-col justify-between">
                  <div className="text-base font-bold">Diana Unlocked</div>
                  <div className="">$74.99</div>
                  <div className="flex items-center justify-end">
                    <img
                      src="/imgs/riotmerch/products/delete-icon.svg"
                      alt="Delete Icon"
                      className="cursor-pointer pr-1"
                    />
                    <div className="flex w-5 justify-center font-bold">1</div>
                    <img
                      src="/imgs/riotmerch/products/add-icon.svg"
                      alt="Add Icon"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div> */}

              {/* Show When Cart is not Empty */}
              {/* <div className="border-b-[1px] border-[#d0d0d0] py-8">
                <div className="flex flex-col gap-8">
                  <h2 className="flex gap-1 text-base font-bold uppercase lg:text-[28px]">
                    Summary
                  </h2>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <div className="">Subtotal (1 items)</div>
                      <div className="">USD $74.99</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="">Shipping & Tax</div>
                      <div className="">Calculated at next step</div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Show When Cart is not Empty */}
          {/* <div className="absolute bottom-0 w-full border-t-[1px] border-[#d0d0d0] p-8">
            <button className="clip-button-slant h-[50px] w-full bg-[#eb0029] text-base font-bold uppercase text-white duration-300 ease-in-out">
              Check Out
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
