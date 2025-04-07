"use client";
import { useState } from "react";

export default function OrderSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDetailCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="p-5">
        <img
          src="/imgs/checkout/ordersummary/riotgames-black.png"
          alt="Riot Game Icon"
          className="h-10 w-[140px] object-contain"
        />
      </div>
      <div
        className="flex cursor-pointer justify-between border-b border-t px-2 py-5 text-[#1773b0]"
        onClick={handleOpenDetailCart}
      >
        <div className="flex items-center">
          <span className="text-sm">Order Summary</span>
          <img
            src={
              !isOpen
                ? "/imgs/checkout/ordersummary/arrow-down-icon.svg"
                : "/imgs/checkout/ordersummary/arrow-up-icon.svg"
            }
            alt={!isOpen ? "Arrow Down" : "Arrow Up"}
            className="ml-2 h-[14px] w-[14px] object-cover"
          />
        </div>
        <strong className="text-lg">$29.99</strong>
      </div>

      {/* Express checkout */}
      <div className="pt-2">
        <div className="px-5 py-3">
          <h2 className="text-center text-sm text-[#707070]">
            Express checkout
          </h2>
          <div className="pt-5">
            <div className="">Shop Pay</div>
            <div className="flex">
              <div className="">PayPal</div>
              <div className="">GPay</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
