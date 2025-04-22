"use client";
import Link from "next/link";
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

          {/* Payment */}
          <div className="pt-5">
            <button className="flex h-12 w-full justify-center rounded-xl bg-[#592ff4] duration-300 ease-in-out hover:bg-[#390ced]">
              <img
                src="/imgs/checkout/ordersummary/shop-pay-icon.svg"
                alt="Shop Pay"
              />
            </button>
            <div className="mt-3 flex h-12 gap-3">
              <button className="flex w-1/2 items-center justify-center rounded-xl bg-[#ffc439] duration-300 ease-in-out hover:brightness-95">
                <img
                  src="/imgs/checkout/ordersummary/paypal-icon.svg"
                  alt="PayPal"
                />
              </button>
              <button className="flex w-1/2 items-center justify-center rounded-xl bg-[#000000] duration-300 ease-in-out hover:bg-[#3c4043]">
                <img
                  src="/imgs/checkout/ordersummary/google-pay-icon.svg"
                  alt="PayPal"
                />
              </button>
            </div>
          </div>
          {/* Or */}
          <div className="flex items-center pb-[26px] pt-[17px]">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-[#707070]">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          {/* Contact information */}
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-[#000000]">
              Contact information
            </h2>
            <Link href="#" className="text-sm text-[#1773b0] underline">
              Log in
            </Link>
          </div>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500"
            />
          </div>
          <div className="mt-3 flex items-center">
            <input type="checkbox" className="h-5 w-5 rounded-lg" />
            <label className="pl-[11px] text-sm">
              Keep me up to date on news and exclusive offers
            </label>
          </div>
          {/* Delivery */}
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
