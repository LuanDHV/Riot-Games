"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import WaysAuth from "../../shared/WaysAuth";

export default function FormSignIn() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [isCheckAccount, setIsCheckAccount] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus when render component
    inputRef.current?.focus();
    setIsFocused(!isFocused);
  }, []);

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };
  const handleChangeInput = (e: any) => {
    setInputValue(e.target.value);

    //Logic check account
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-end lg:w-1/2">
          <h2 className="mb-7 text-center text-4xl font-extrabold uppercase text-white lg:text-6xl xl:text-8xl">
            Create An Account
          </h2>
        </div>
        <div className="flex h-auto w-full justify-center lg:w-1/2">
          <div className="flex h-auto w-full flex-col items-center bg-white p-8 lg:max-w-[550px]">
            <h5 className="pt-12 text-2xl font-bold text-black">Sign In</h5>
            <div className="mt-6 flex w-full flex-col gap-3">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleChangeInput}
                  onFocus={handleFocus}
                  onBlur={() => setIsFocused(!isFocused)}
                  className={`${isCheckAccount ? "bg-[#0000000]" : "border border-purple-500 bg-purple-100 outline-none hover:border-none hover:bg-purple-200"} h-14 w-full rounded px-2 pb-2 pt-5 text-base font-semibold duration-300 ease-in-out hover:border`}
                />
                <label
                  className={`${
                    isFocused || inputValue ? "opacity-0" : "opacity-100"
                  } ${isCheckAccount ? "text-[#737373]" : "text-[#be29cc]"} absolute left-4 top-6 text-[10px] font-bold uppercase transition-opacity duration-300`}
                >
                  Username
                </label>
                <span
                  className={` ${
                    isFocused || inputValue ? "opacity-100" : "opacity-0"
                  } ${isCheckAccount ? "text-[#737373]" : "text-[#be29cc]"} absolute left-2 top-2 text-[10px] font-bold uppercase text-[#737373] transition-opacity duration-300`}
                >
                  Username
                </span>
              </div>
              <div className="relative">
                <input
                  ref={inputRef}
                  type="password"
                  value={inputValue}
                  onChange={handleChangeInput}
                  onFocus={handleFocus}
                  onBlur={() => setIsFocused(!isFocused)}
                  className={`${isCheckAccount ? "bg-[#0000000]" : "border border-purple-500 bg-purple-100 outline-none hover:border-none hover:bg-purple-200"} h-14 w-full rounded px-2 pb-2 pt-5 text-base font-semibold duration-300 ease-in-out hover:border`}
                />
                <label
                  className={`${
                    isFocused || inputValue ? "opacity-0" : "opacity-100"
                  } ${isCheckAccount ? "text-[#737373]" : "text-[#be29cc]"} absolute left-4 top-6 text-[10px] font-bold uppercase transition-opacity duration-300`}
                >
                  Password
                </label>
                <span
                  className={` ${
                    isFocused || inputValue ? "opacity-100" : "opacity-0"
                  } ${isCheckAccount ? "text-[#737373]" : "text-[#be29cc]"} absolute left-2 top-2 text-[10px] font-bold uppercase text-[#737373] transition-opacity duration-300`}
                >
                  Password
                </span>
              </div>
              {!isCheckAccount && (
                <p className="ml-2 mt-2 text-xs text-[#be29cc]">
                  Wrong username or password, please check again
                </p>
              )}
            </div>
            <div className="w-full">
              <WaysAuth />
            </div>
            <div className="mt-3 flex w-full items-center gap-x-2">
              <input
                type="checkbox"
                className="h-8 w-8 accent-red-500 lg:h-5 lg:w-5"
              />
              <p className="w-full text-lg font-medium text-[#211e1f] lg:text-xs">
                Stay signed in
              </p>
            </div>
            <div className="mb-8 mt-[60px] flex w-full justify-center lg:mb-6 lg:mt-20">
              <button
                className={`${
                  inputValue && isCheckAccount
                    ? "cursor-pointer bg-red-500"
                    : "cursor-not-allowed border border-[#adadad]"
                } ${inputValue && isCheckAccount ? "text-white" : "text-[#737373]"} flex h-[88px] w-[88px] items-center justify-center rounded-3xl lg:h-[72px] lg:w-[72px]`}
              >
                <img
                  src={`/imgs/auth/arrow-right-${inputValue && isCheckAccount ? "white" : "grey"}.svg`}
                  alt="Next Step"
                  className="h-8 w-8 object-cover"
                />
              </button>
            </div>
            <div className="mt-3 flex w-full justify-center">
              <Link
                href="#"
                className="w-full text-center text-xs font-semibold uppercase text-[#4a4a4a] lg:text-[10px]"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
