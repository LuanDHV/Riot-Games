"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Form() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
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
    const value = e.target.value;
    setInputValue(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(value));
  };

  return (
    <>
      <div className="flex h-[630px] w-[500px] flex-col items-center bg-white p-8 lg:h-[690px] lg:w-[550px]">
        <h5 className="pt-12 text-2xl font-bold text-black">
          What's Your Name
        </h5>
        <h6 className="mt-4 text-xl font-medium text-[#737373]">
          Don't worry we won't tell anyone.
        </h6>
        <div className="relative mt-6 w-full">
          <input
            ref={inputRef}
            type="email"
            value={inputValue}
            onChange={handleChangeInput}
            onFocus={handleFocus}
            onBlur={() => setIsFocused(!isFocused)}
            className={`${isEmailValid ? "bg-[#0000000]" : "border border-purple-500 bg-purple-100 outline-none hover:border-none hover:bg-purple-200"} h-14 w-full rounded px-2 pb-2 pt-5 text-base font-semibold duration-300 ease-in-out hover:border`}
          />
          <label
            className={`${
              isFocused || inputValue ? "opacity-0" : "opacity-100"
            } ${isEmailValid ? "text-[#737373]" : "text-[#be29cc]"} absolute left-4 top-6 text-[10px] font-bold uppercase transition-opacity duration-300`}
          >
            Email
          </label>
          <span
            className={` ${
              isFocused || inputValue ? "opacity-100" : "opacity-0"
            } ${isEmailValid ? "text-[#737373]" : "text-[#be29cc]"} absolute left-2 top-2 text-[10px] font-bold uppercase text-[#737373] transition-opacity duration-300`}
          >
            Email
          </span>
          {!isEmailValid && (
            <p className="ml-2 mt-2 text-xs text-[#be29cc]">
              You must enter a valid email
            </p>
          )}
        </div>
        <div className="mt-3 flex w-full items-center gap-x-2">
          <input
            type="checkbox"
            className="h-8 w-8 accent-red-500 lg:h-5 lg:w-5"
          />
          <p className="w-full text-xs font-medium text-[#211e1f]">
            Yes Riot may send me info about new releases, game updates, events,
            or other Riot-related content.
          </p>
        </div>
        <div className="mt-6 w-full">
          <p className="w-full text-center text-xs font-semibold uppercase lg:text-[10px]">
            You can also create an account with
          </p>
          <div className="mt-3 flex justify-between lg:mb-20">
            <Link
              href="#"
              className="rounded-xl bg-[#1877f2] px-6 py-3 duration-300 ease-in-out hover:bg-[#0966de] lg:px-8 lg:py-2"
            >
              <img
                src="/imgs/auth/ways/facebook.svg"
                alt="Ways"
                className="h-6 w-6 object-cover lg:h-4 lg:w-4"
              />
            </Link>
            <Link
              href="#"
              className="rounded-xl border bg-[#ffffff] px-6 py-3 duration-300 ease-in-out hover:bg-gray-200 lg:px-8 lg:py-2"
            >
              <img
                src="/imgs/auth/ways/google.svg"
                alt="Ways"
                className="h-6 w-6 object-cover lg:h-4 lg:w-4"
              />
            </Link>
            <Link
              href="#"
              className="rounded-xl bg-[#000000] px-6 py-3 duration-300 ease-in-out hover:bg-[#141414] lg:px-8 lg:py-2"
            >
              <img
                src="/imgs/auth/ways/apple-id.svg"
                alt="Ways"
                className="h-6 w-6 object-cover lg:h-4 lg:w-4"
              />
            </Link>
            <Link
              href="#"
              className="rounded-xl bg-[#107c10] px-6 py-3 duration-300 ease-in-out hover:bg-[#076907] lg:px-8 lg:py-2"
            >
              <img
                src="/imgs/auth/ways/x-box.svg"
                alt="Ways"
                className="h-6 w-6 object-cover lg:h-4 lg:w-4"
              />
            </Link>
            <Link
              href="#"
              className="rounded-xl bg-[#00349c] px-6 py-3 duration-300 ease-in-out hover:bg-[#00225b] lg:px-8 lg:py-2"
            >
              <img
                src="/imgs/auth/ways/play-station.svg"
                alt="Ways"
                className="h-6 w-6 object-cover lg:h-4 lg:w-4"
              />
            </Link>
          </div>
        </div>
        <div className="mb-8 mt-[60px] flex w-full justify-center lg:mb-6 lg:mt-20">
          <button
            className={`${
              inputValue && isEmailValid
                ? "cursor-pointer bg-red-500"
                : "cursor-not-allowed border border-[#adadad]"
            } ${inputValue && isEmailValid ? "text-white" : "text-[#737373]"} flex h-[88px] w-[88px] items-center justify-center rounded-3xl lg:h-[72px] lg:w-[72px]`}
          >
            <img
              src={`/imgs/auth/arrow-right-${inputValue && isEmailValid ? "white" : "grey"}.svg`}
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
    </>
  );
}
