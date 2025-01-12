"use client";
import { useParams } from "next/navigation";
import { useGetProductsQuery } from "@/store/api/riotmerchApi/productsApi";
import { IProducts } from "../types/interface";

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

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img
        src={product.imgs[0]}
        alt={product.name}
        className="my-4 w-full max-w-md object-cover"
      />
      <p className="text-lg">{product.description}</p>
      <p className="mt-4 text-xl font-semibold">Price: ${product.price}</p>
    </div>
  );
}
