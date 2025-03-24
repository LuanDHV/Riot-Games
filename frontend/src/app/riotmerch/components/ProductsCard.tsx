"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IProductCardProps, TypeTags } from "../types/interface";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAddToCartMutation } from "@/store/api/riotmerchApi/cartApi";
import { toast } from "react-toastify";

export default function ProductsCard({ product, index }: IProductCardProps) {
  const router = useRouter();
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();

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

  // Function Create Slug
  const createSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleDetailProduct = () => {
    const slug = createSlug(product.name);
    router.push(`/riotmerch/${slug}`);
  };

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId: product.id, quantity: 1 }).unwrap();
      setIsAdding(!isAdding); //Close modal after adding to cart
      console.log("Added to cart successfully !");
      toast.success("Added to cart successfully");
    } catch (error) {
      toast.error("Failed to add to cart");
      console.error("Failed to add to cart:", error);
    }
  };

  return (
    <>
      <div className="group relative row-span-1 lg:col-span-1">
        {/* Logo and Tags */}
        <div className="flex items-center justify-between p-4">
          <img
            src={product.logo}
            alt=""
            className="h-[30px] w-[70px] object-contain opacity-50"
          />
          <div className="flex space-x-2">
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
            <img
              src="/imgs/riotmerch/products/love-icon.svg"
              alt=""
              className="h-6 w-6 cursor-pointer object-cover"
            />
          </div>
        </div>

        {/* Swiper */}
        <div className="relative w-screen lg:w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: `.button-next-${index}`,
              prevEl: `.button-prev-${index}`,
            }}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
          >
            {product.imgs.map((img, imgIndex) => (
              <SwiperSlide key={imgIndex}>
                <img
                  src={img}
                  alt={`${product.name} Image ${imgIndex + 1}`}
                  className="h-[250px] w-full cursor-pointer object-contain duration-300 ease-in-out group-hover:scale-105"
                  onClick={handleDetailProduct}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button
            className={`flex opacity-0 group-hover:opacity-100 swiper-button-prev-${index} absolute left-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200`}
          >
            <img
              src="/imgs/riotmerch/products/arrow-icon.svg"
              alt=""
              className="h-6 w-6 rotate-180 object-cover"
            />
          </button>
          <button
            className={`flex opacity-0 group-hover:opacity-100 button-next-${index} absolute right-5 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow duration-300 hover:bg-gray-200`}
          >
            <img
              src="/imgs/riotmerch/products/arrow-icon.svg"
              alt=""
              className="h-6 w-6 object-cover"
            />
          </button>
        </div>

        {/* Product Information */}
        <div className="flex w-full items-center justify-between px-5">
          <div className="flex flex-col py-4">
            <h3
              className="cursor-pointer text-base font-bold hover:underline"
              onClick={handleDetailProduct}
            >
              {product.name}
            </h3>
            <p className="mt-1 text-base">${product.price}</p>
          </div>
          <div
            className="z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm border opacity-0 duration-300 ease-in-out hover:bg-[#d0d0d0] group-hover:opacity-100"
            onClick={() => setIsAdding(!isAdding)}
          >
            <img
              src="/imgs/riotmerch/products/cart-icon-black.svg"
              alt=""
              className="h-6 w-6 object-cover"
            />
          </div>
        </div>

        {/* Add To Cart Modal */}
        {isAdding && (
          <div className="absolute bottom-0 z-20 h-4/6 w-full rounded bg-white px-5 text-black shadow-md">
            <div className="flex h-full flex-col justify-between">
              <div className="flex w-full items-center justify-between border-b border-[#d0d0d0]">
                <div className="flex flex-col py-4">
                  <h3
                    className="cursor-pointer text-base font-bold hover:underline"
                    onClick={handleDetailProduct}
                  >
                    {product.name}
                  </h3>
                  <p className="mt-1 text-base">${product.price}</p>
                </div>
                <div
                  className="z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm border duration-300 ease-in-out hover:bg-[#d0d0d0]"
                  onClick={() => setIsAdding(!isAdding)}
                >
                  <img
                    src="/imgs/riotmerch/products/close-icon.svg"
                    alt=""
                    className="h-6 w-6 object-cover"
                  />
                </div>
              </div>
              <p className="text-base">
                This product is a collector's item intended for ages 14+
              </p>
              <button
                className="clip-button-slant mb-4 mt-6 h-[50px] w-full bg-black text-base font-bold uppercase text-white duration-300 ease-in-out hover:brightness-110"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
