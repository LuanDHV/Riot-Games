"use client";

import { useState } from "react";
import DeliveryForm from "./DeliveryForm";

export default function BillingAddressForm() {
  const [billingAddress, setBillingAddress] = useState(
    "Same as shipping address",
  );
  return (
    <>
      <form className="">
        {/* Same as shipping address */}
        <label
          className={`flex cursor-pointer items-center gap-3 rounded-t-xl border p-[14px] text-sm ${billingAddress === "Same as shipping address" ? "border-blue-500 bg-[#F0F5FF]" : ""}`}
        >
          <input
            type="radio"
            name="payment"
            value="Same as shipping address"
            checked={billingAddress === "Same as shipping address"}
            onChange={() => setBillingAddress("Same as shipping address")}
          />
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Same as shipping address</span>
          </div>
        </label>

        {/* Use a different billing address */}
        <label
          className={`flex cursor-pointer items-center gap-3 rounded-b-xl border p-[14px] text-sm ${billingAddress === "Use a different billing address" ? "rounded-b-none border-blue-500 bg-[#F0F5FF]" : ""}`}
        >
          <input
            type="radio"
            name="payment"
            value="Use a different billing address"
            checked={billingAddress === "Use a different billing address"}
            onChange={() =>
              setBillingAddress("Use a different billing address")
            }
          />
          <div className="flex w-full items-center justify-between">
            <span className="text-sm">Use a different billing address</span>
          </div>
        </label>
        {billingAddress === "Use a different billing address" && (
          <div className="flex flex-col gap-3 rounded-b-xl border bg-[#0000000B] p-[14px]">
            <DeliveryForm />
          </div>
        )}
      </form>
    </>
  );
}
