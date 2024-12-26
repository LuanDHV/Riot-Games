"use client";
import { useState } from "react";

export default function Form() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div className="flex h-[630px] w-full flex-col items-center bg-white p-8 lg:w-[500px]">
      <h5 className="pt-12 text-2xl font-bold text-black">What's Your Name</h5>
      <h6 className="mt-4 text-xl font-medium text-[#737373]">
        Don't worry we won't tell anyone.
      </h6>
      <div className="relative mt-6 w-full">
        <input
          type="email"
          className="w-full px-2 pb-2 pt-5 duration-300 ease-in-out hover:border hover:bg-[#00000000]"
          onFocus={handleFocus}
          onBlur={() => setIsFocused(!isFocused)}
        />
        <label
          className={`absolute left-4 top-6 text-[10px] font-bold uppercase text-[#737373] transition-opacity duration-300 ${
            isFocused ? "opacity-0" : "opacity-100"
          }`}
        >
          Email
        </label>
        <span
          className={`absolute left-2 top-2 text-[10px] font-bold uppercase text-[#737373] transition-opacity duration-300 ${
            isFocused ? "opacity-100" : "opacity-0"
          }`}
        >
          Email
        </span>
      </div>
    </div>
  );
}
