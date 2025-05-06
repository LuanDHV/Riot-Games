"use client";

import { useState } from "react";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  return (
    <>
      <form className="">
        {/* Credit Card Form */}
        <label
          className={`flex cursor-pointer items-center gap-3 rounded-t-xl border p-[14px] text-sm ${paymentMethod === "Credit Card" ? "border-blue-500 bg-[#F0F5FF]" : ""}`}
        >
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            checked={paymentMethod === "Credit Card"}
            onChange={() => setPaymentMethod("Credit Card")}
          />
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Credit card</span>
            <div className="flex gap-1">
              <img
                src="/imgs/checkout/paymentform/visa.svg"
                alt="ShopPay Logo"
                className="object-contain"
              />
              <img
                src="/imgs/checkout/paymentform/mastercard.svg"
                alt="ShopPay Logo"
                className="object-contain"
              />
            </div>
          </div>
        </label>
        {paymentMethod === "Credit Card" && (
          <div className="flex flex-col gap-3 border bg-[#0000000B] p-[14px]">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Security Code"
              className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Name on Card"
              className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
            />
          </div>
        )}
        {/* PayPal Form */}
        <label
          className={`flex cursor-pointer items-center gap-3 border p-[14px] text-sm ${paymentMethod === "PayPal" ? "border-blue-500 bg-[#F0F5FF]" : ""}`}
        >
          <input
            type="radio"
            name="payment"
            value="PayPal"
            checked={paymentMethod === "PayPal"}
            onChange={() => setPaymentMethod("PayPal")}
          />
          <div className="flex w-full justify-between">
            <span className="text-sm">PayPal</span>
            <img
              src="/imgs/checkout/paymentform/pay-pal-logo.svg"
              alt="ShopPay Logo"
              className="h-5 w-20 object-contain"
            />
          </div>
        </label>
        {paymentMethod === "PayPal" && (
          <div className="min-h-40 rounded border bg-[#0000000B] bg-blue-50 p-[14px]">
            <div className="flex flex-col items-center gap-8 p-3">
              <img
                src="/imgs/checkout/paymentform/pay-pal-navigate.svg"
                alt="ShopPay Logo"
                className="h-14 w-28 object-contain"
              />
              <p className="text-center text-sm">
                After clicking "Pay with PayPal", you will be redirected to
                PayPal to complete your purchase securely.
              </p>
            </div>
          </div>
        )}
        {/* ShopPay Form */}
        <label
          className={`flex cursor-pointer items-center gap-3 rounded-b-xl border p-[14px] text-sm ${paymentMethod === "ShopPay" ? "border-blue-500 bg-[#F0F5FF]" : ""}`}
        >
          <input
            type="radio"
            name="payment"
            value="ShopPay"
            checked={paymentMethod === "ShopPay"}
            onChange={() => setPaymentMethod("ShopPay")}
          />
          <div className="flex gap-2">
            <img
              src="/imgs/checkout/paymentform/shop-pay-logo.svg"
              alt="ShopPay Logo"
              className="h-5 w-20 object-contain"
            />
            <span className="text-sm">Pay in full or in installments</span>
          </div>
        </label>
      </form>
    </>
  );
}
