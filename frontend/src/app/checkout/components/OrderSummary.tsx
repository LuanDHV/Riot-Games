import { ICartItem } from "@/app/riotmerch/types/interface";
import { useGetCartQuery } from "@/store/api/riotmerchApi/cartApi";
import { useState } from "react";

type OrderSummaryProps = {
  showDetailOrderSummary?: boolean;
};

export default function OrderSummary({
  showDetailOrderSummary,
}: OrderSummaryProps) {
  const {
    data: CartItems,
    error: CartError,
    isLoading: CartLoading,
    isSuccess: CartSuccess,
  } = useGetCartQuery(undefined);
  const [inputValue, setInputValue] = useState("");

  const totalQuantity = CartItems?.products?.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  if (CartLoading) return <div>Loading...</div>;
  if (CartError) return <div>Error loading data</div>;

  const totalPrice = CartItems?.products
    ?.reduce((acc, item) => acc + item.price * item.quantity, 0)
    ?.toFixed(2);

  const hasValue = inputValue.trim().length > 0;

  return (
    <>
      {/* Show When Cart is not Empty */}

      {CartSuccess && CartItems?.products.length > 0 && (
        <div className="flex flex-col">
          {!showDetailOrderSummary && (
            <div className="flex flex-col gap-3 py-5">
              {CartItems.products.map((items: ICartItem) => (
                <div key={items.id} className="flex">
                  <div className="relative shrink-0 rounded-lg border transition-all duration-300 ease-in-out">
                    <img
                      src={items.imgs?.[0]}
                      alt={items.name}
                      className="h-16 w-16 object-contain"
                    />
                    <span className="absolute -right-2 -top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#707070] text-xs text-white">
                      {items.quantity}
                    </span>
                  </div>

                  <div className="flex w-full items-center justify-between pl-3 text-sm">
                    <div className="">{items.name}</div>
                    <div className="">${items.price}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-3 pb-5">
            <input
              type="text"
              placeholder="Discount code or gift card"
              className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className={`w-[65px] flex-shrink-0 rounded-xl border py-[13.5px] text-sm font-bold transition-colors ${hasValue ? "bg-blue-600 text-white" : "bg-gray-100 text-[#707070]"} `}
            >
              Apply
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <p className="">Subtotal · {totalQuantity} items</p>
                <p className="">${totalPrice}</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="">Shipping</p>
                <p className="text-[#707070]">Enter shipping address</p>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-[19px] font-bold">Total</p>
              <p className="flex gap-2 text-[#707070]">
                USD
                <span className="text-[19px] font-bold text-black">
                  ${totalPrice}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
