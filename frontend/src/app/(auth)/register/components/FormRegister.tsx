"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import WaysAuth from "../../shared/WaysAuth";

export default function FormRegister() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
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
  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(value));
  };

  return (
    <>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-end lg:w-1/2">
          <h2 className="mb-7 text-center text-4xl font-extrabold uppercase text-white lg:text-6xl xl:text-8xl">
            Create An Account
          </h2>
        </div>
        <div className="flex h-auto w-full justify-center lg:w-1/2">
          <div className="flex h-auto w-full flex-col items-center bg-white p-8 lg:max-w-[550px]">
            <h5 className="pt-12 text-2xl font-bold text-black">
              What's Your Name
            </h5>
            <h6 className="mt-4 text-center text-xl font-medium text-[#737373]">
              Don't worry we won't tell anyone.
            </h6>
            <div className="relative mt-6 w-full">
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={handleFocus}
                onBlur={() => setIsFocused(!isFocused)}
                className={`${isEmailValid ? "bg-[#0000000]" : "border border-purple-500 bg-purple-100 outline-none hover:border-none hover:bg-purple-200"} h-14 w-full rounded px-2 pb-2 pt-5 text-base font-semibold duration-300 ease-in-out hover:border`}
              />
              <label
                className={`${
                  isFocused || email ? "opacity-0" : "opacity-100"
                } ${isEmailValid ? "text-[#737373]" : "text-[#be29cc]"} absolute left-4 top-6 text-[10px] font-bold uppercase transition-opacity duration-300`}
              >
                Email
              </label>
              <span
                className={` ${
                  isFocused || email ? "opacity-100" : "opacity-0"
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
                className="h-8 w-8 cursor-pointer accent-red-500 lg:h-5 lg:w-5"
              />
              <p className="w-full text-xs font-medium text-[#211e1f]">
                Yes Riot may send me info about new releases, game updates,
                events, or other Riot-related content.
              </p>
            </div>
            <div className="mt-6 w-full">
              <p className="w-full text-center text-xs font-semibold uppercase lg:text-[10px]">
                You can also create an account with
              </p>
              <WaysAuth />
            </div>
            <div className="mb-5 mt-20 flex w-full justify-center lg:mt-40">
              <button
                className={`${
                  email && isEmailValid
                    ? "cursor-pointer bg-red-500"
                    : "cursor-not-allowed border border-[#adadad]"
                } ${email && isEmailValid ? "text-white" : "text-[#737373]"} flex h-[88px] w-[88px] items-center justify-center rounded-3xl lg:h-[72px] lg:w-[72px]`}
              >
                <img
                  src={`/imgs/auth/arrow-right-${email && isEmailValid ? "white" : "grey"}.svg`}
                  alt="Next Step"
                  className="h-8 w-8 object-cover"
                />
              </button>
            </div>
            <div className="mt-3 flex w-full justify-center">
              <Link
                href="/signin"
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
