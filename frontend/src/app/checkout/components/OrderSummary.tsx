"use client";
import Link from "next/link";
import { useState } from "react";
import PaymentForm from "./PaymentForm";
import DeliveryForm from "./DeliveryForm";

export default function OrderSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDetailCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Order Summary */}
      <div className="p-5">
        <img
          src="/imgs/checkout/ordersummary/riotgames-black.png"
          alt="Riot Game Icon"
          className="h-10 w-[140px] object-contain"
        />

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
      </div>
      {/* Contact information */}
      <div className="px-5 py-3">
        <h2 className="text-center text-sm text-[#707070]">Express checkout</h2>

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
        {/* Contact */}
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-[#000000]">Contact</h2>
          <Link href="#" className="text-sm text-[#1773b0] underline">
            Log in
          </Link>
        </div>
        <div className="mt-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
          />
        </div>
        <div className="mt-3 flex items-center">
          <input type="checkbox" className="h-5 w-5 rounded-lg" />
          <label className="pl-[11px] text-sm">
            Keep me up to date on news and exclusive offers
          </label>
        </div>
      </div>
      {/* Delivery */}
      <div className="flex flex-col gap-3 px-5 py-3">
        <h2 className="text-xl font-semibold text-[#000000]">Delivery</h2>
        <div className="rounded-lg border border-[#ffdeb3] bg-[#ffeedb] p-4">
          <div className="flex">
            <div className="mr-3 mt-[2px]">
              <img
                src="/imgs/checkout/ordersummary/warning-icon.svg"
                alt="Warning Icon"
              />
            </div>
            <span className="text-sm text-[#241700]">
              Please ensure your address is correct to avoid processing or
              delivery issues
            </span>
          </div>
        </div>
        <DeliveryForm />
      </div>
      {/* Shipping method */}
      <div className="flex flex-col gap-3 px-5 py-3">
        <h2 className="text-base font-semibold text-[#000000]">
          Shipping method
        </h2>
        <p className="rounded-lg bg-[#f5f5f5] p-4 text-sm text-[#707070]">
          Enter your shipping address to view available shipping methods.
        </p>
      </div>
      {/* Payment method */}
      <div className="flex flex-col gap-1 px-5 py-3">
        <h2 className="text-base font-semibold text-[#000000]">
          Payment method
        </h2>
        <p className="text-sm text-[#707070]">
          All transactions are secure and encrypted.
        </p>
        <PaymentForm />
      </div>
    </>
  );
}
