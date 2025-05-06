import React from "react";

export default function DeliveryForm() {
  return (
    <>
      <form className="flex flex-col gap-3">
        {/* Country/Region */}
        <label className="">
          <input
            type="text"
            placeholder="Country/Region"
            className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
          />
        </label>
        {/* First Name */}
        <label className="">
          <input
            type="text"
            placeholder="First Name"
            className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
          />
        </label>
        {/* Last Name */}
        <label className="">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
          />
        </label>
        {/* Address */}
        <label className="">
          <input
            type="text"
            placeholder="Address"
            className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
          />
        </label>
        {/* Apartment, suite, etc. (optional) */}
        <label className="">
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
          />
        </label>
        {/* City */}
        <label className="">
          <input
            type="text"
            placeholder="City"
            className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
          />
        </label>
        {/* Postal Code */}
        <label className="">
          <input
            type="text"
            placeholder="Postal Code"
            className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
          />
        </label>
        {/* Phone (optional) */}
        <label className="">
          <input
            type="text"
            placeholder="Phone (optional)"
            className="w-full rounded-lg border px-[11px] py-[13.5px] outline-blue-500 placeholder:text-sm"
          />
        </label>
      </form>
    </>
  );
}
