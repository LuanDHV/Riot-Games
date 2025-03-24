import { useAddToCartMutation } from "@/store/api/riotmerchApi/cartApi";
import { ICartAdd } from "../types/interface";
import { toast } from "react-toastify";

export default function AddToCart({ productId, quantity }: ICartAdd) {
  const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId, quantity }).unwrap();
      console.log("Added to cart successfully !");
      toast.success("Added to cart successfully");
    } catch (error) {
      toast.error("Failed to add to cart");
      console.error("Failed to add to cart:", error);
    }
  };
  return (
    <>
      <div className="flex gap-5">
        <button
          className="hidden h-[50px] w-[240px] items-center justify-center bg-[#efe7db] duration-300 ease-in-out hover:cursor-pointer hover:brightness-90 lg:flex"
          onClick={handleAddToCart}
          disabled={isAddingToCart}
        >
          <img
            src="/imgs/riotmerch/products/detail/add-to-cart-button-1.png"
            alt="Image"
          />
          <div className="w-full text-center text-base uppercase">
            Add To Cart
          </div>
          <img
            src="/imgs/riotmerch/products/detail/add-to-cart-button-2.png"
            alt="Image"
          />
        </button>
        <button className="clip-cart-slant flex h-[50px] w-[50px] items-center justify-center bg-red-500">
          <img
            src="/imgs/riotmerch/products/cart-fast-icon.svg"
            alt="Cart Fast Icon"
            className="h-6 w-6 object-cover lg:h-[30px] lg:w-[30px]"
          />
        </button>
      </div>
    </>
  );
}
