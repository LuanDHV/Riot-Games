"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import { useGetProductsQuery } from "@/store/api/riotmerchApi/productsApi";
import {
  ICartItem,
  ICartRemove,
  ICartUpdate,
  IProducts,
  IRiotMerchCartProps,
} from "../types/interface";
import { useEffect, useState } from "react";
import {
  useGetCartQuery,
  useRemoveFromCartMutation,
  useUpdateCartMutation,
} from "@/store/api/riotmerchApi/cartApi";
import { toast } from "react-toastify";

export default function RiotMerchCart({
  openRiotMerchCart,
  setOpenRiotMerchCart,
}: IRiotMerchCartProps) {
  if (!openRiotMerchCart) return null;
  const router = useRouter();

  const {
    data: Products,
    error: ProductsError,
    isLoading: ProductsLoading,
    isSuccess: ProductsSuccess,
  } = useGetProductsQuery(undefined);

  const [randomProducts, setRandomProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    if (Products) {
      setRandomProducts(
        [...Products].sort(() => Math.random() - 0.5).slice(0, 10),
      );
    }
  }, [Products]);

  const {
    data: CartItems,
    error: CartError,
    isLoading: CartLoading,
    isSuccess: CartSuccess,
  } = useGetCartQuery(undefined);

  const [updateCart] = useUpdateCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  const handleIncreaseQuantity = async (item: ICartUpdate) => {
    try {
      await updateCart({
        productId: item.productId,
        quantity: item.quantity + 1,
      });
      toast.success("Increased quantity successfully");
      console.log("Increased quantity:", item.productId);
    } catch (error) {
      toast.success("Increased quantity successfully");
      console.error("Failed to increase", error);
    }
  };

  const handleDecreaseQuantity = async (item: ICartUpdate) => {
    try {
      await updateCart({
        productId: item.productId,
        quantity: item.quantity - 1,
      });
      toast.success("Decreased quantity successfully");
      console.log("Decreased quantity:", item.productId);
    } catch (error) {
      toast.error("Failed to decrease quantity");
      console.error("Failed to decrease", error);
    }
  };

  const handleRemoveItem = async (item: ICartRemove) => {
    try {
      await removeFromCart({ productId: item.productId });
      toast.success("Removed product successfully");
      console.log("Removed item:", item.productId);
    } catch (error) {
      toast.success("Failed removed product ");
      console.error("Failed to remove item", error);
    }
  };

  const totalQuantity = CartItems?.products?.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const totalPrice = CartItems?.products
    ?.reduce((acc, item) => acc + item.price * item.quantity, 0)
    ?.toFixed(2);

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

  if (ProductsLoading || CartLoading) return <div>Loading...</div>;
  if (ProductsError || CartError) return <div>Error loading data</div>;

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
                  Cart
                  <span className="text-xs">
                    ({CartSuccess && CartItems ? CartItems?.products.length : 0}
                    )
                  </span>
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

            <div className="z-20 w-full overflow-y-scroll px-8 pb-8">
              {CartSuccess && CartItems?.products?.length > 0 ? (
                <>
                  {CartItems.products.map((items: ICartItem) => (
                    <div
                      key={items.id}
                      className="flex gap-4 border-y-[1px] border-[#d0d0d0] py-8"
                    >
                      <div className="flex min-h-[103px] min-w-[103px] items-center justify-center">
                        <img
                          src={items.imgs?.[0]}
                          alt={items.name}
                          className="h-[76px] w-[76px] object-cover"
                        />
                      </div>
                      <div className="flex w-full flex-col justify-between">
                        <div className="text-base font-bold">{items.name}</div>
                        <div className="">${items.price}</div>
                        <div className="flex items-center justify-end">
                          <img
                            src={
                              items.quantity === 1
                                ? "/imgs/riotmerch/products/delete-icon.svg"
                                : "/imgs/riotmerch/products/decrease-icon.svg"
                            }
                            alt={
                              items.quantity === 1
                                ? "Delete Icon"
                                : "Decrease Icon"
                            }
                            className="cursor-pointer pr-1"
                            onClick={() =>
                              items.quantity === 1
                                ? handleRemoveItem({ productId: items.id })
                                : handleDecreaseQuantity({
                                    productId: items.id,
                                    quantity: items.quantity,
                                  })
                            }
                          />

                          <div className="flex w-5 justify-center font-bold">
                            {items.quantity}
                          </div>

                          <img
                            src="/imgs/riotmerch/products/increase-icon.svg"
                            alt="Increase Icon"
                            className="cursor-pointer"
                            onClick={() =>
                              handleIncreaseQuantity({
                                productId: items.id,
                                quantity: items.quantity,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <p className="border-y-[1px] border-[#d0d0d0] py-8">
                  Your cart is empty
                </p>
              )}

              {/* Show When Cart is not Empty */}
              {CartSuccess && CartItems?.products.length > 0 && (
                <div className="border-b-[1px] border-[#d0d0d0] py-8">
                  <div className="flex flex-col gap-8">
                    <h2 className="flex gap-1 text-base font-bold uppercase lg:text-[28px]">
                      Summary
                    </h2>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <div className="">Subtotal ({totalQuantity} items)</div>
                        <div className="">USD ${totalPrice}</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="">Shipping & Tax</div>
                        <div className="">Calculated at next step</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Swiper */}
              <div className="pt-8">
                <p className="">You Might Be Interested In</p>
                <div className="py-4">
                  <div className="p-4">
                    <Swiper
                      modules={[Navigation, Autoplay]}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        nextEl: `.button-next-cart`,
                        prevEl: `.button-prev-cart`,
                      }}
                      spaceBetween={10}
                      slidesPerView={1}
                      loop={randomProducts.length > 1}
                    >
                      {ProductsSuccess &&
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
            </div>

            {/* Show When Cart is not Empty */}
            {CartSuccess && CartItems?.products.length > 0 && (
              <div className="w-full border-t-[1px] border-[#d0d0d0] p-8">
                <button className="clip-button-slant h-[50px] w-full bg-[#eb0029] text-base font-bold uppercase text-white duration-300 ease-in-out">
                  Check Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
