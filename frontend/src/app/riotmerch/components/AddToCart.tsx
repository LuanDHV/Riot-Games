export default function AddToCart() {
  return (
    <>
      <div className="flex gap-5">
        <div className="hidden h-[50px] w-[240px] items-center justify-center bg-[#efe7db] duration-300 ease-in-out hover:cursor-pointer hover:brightness-90 lg:flex">
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
        </div>
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
