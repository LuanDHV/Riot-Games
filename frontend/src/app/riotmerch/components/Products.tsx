"use client";

import { useGetProductsQuery } from "@/store/api/riotmerchApi/productsApi";
import ProductsCard from "./ProductsCard";
import { IProducts } from "../types/interface";

export default function Products() {
  const {
    data: Products,
    error,
    isLoading,
    isSuccess,
  } = useGetProductsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  console.log(Products);

  return (
    <>
      <div className="grid h-auto w-full gap-5">
        <div className="grid h-auto w-full lg:grid-cols-4">
          {isSuccess &&
            Products.slice(0, 2).map((product: IProducts) => (
              <ProductsCard
                key={product.id}
                product={product}
                index={product.id}
              />
            ))}
          <div className="row-span-1 w-full lg:col-span-2">
            <video
              src="/imgs/riotmerch/products/products-video-1.mp4"
              className="h-full w-full object-cover lg:max-h-[380px]"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          {isSuccess &&
            Products.slice(4, 8).map((product: IProducts) => (
              <ProductsCard
                key={product.id}
                product={product}
                index={product.id}
              />
            ))}
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          {isSuccess &&
            Products.slice(8, 12).map((product: IProducts) => (
              <ProductsCard
                key={product.id}
                product={product}
                index={product.id}
              />
            ))}
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          <div className="row-span-1 w-full lg:col-span-2">
            <video
              src="/imgs/riotmerch/products/products-video-2.mp4"
              className="h-full w-full object-cover lg:max-h-[380px]"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          {isSuccess &&
            Products.slice(2, 4).map((product: IProducts) => (
              <ProductsCard
                key={product.id}
                product={product}
                index={product.id}
              />
            ))}
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          {isSuccess &&
            Products.slice(12, 16).map((product: IProducts) => (
              <ProductsCard
                key={product.id}
                product={product}
                index={product.id}
              />
            ))}
        </div>

        <div className="grid h-auto w-full lg:grid-cols-4">
          {isSuccess &&
            Products.slice(16, 20).map((product: IProducts) => (
              <ProductsCard
                key={product.id}
                product={product}
                index={product.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}
