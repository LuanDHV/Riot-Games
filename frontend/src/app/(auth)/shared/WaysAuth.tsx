import Link from "next/link";

export default function WaysAuth() {
  return (
    <>
      <div className="block md:hidden">
        <div className="mt-3 grid grid-cols-3 justify-items-center gap-2">
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl bg-[#1877f2] px-6 py-3 duration-300 ease-in-out hover:bg-[#0966de] lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/facebook.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl border bg-[#ffffff] px-6 py-3 duration-300 ease-in-out hover:bg-gray-200 lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/google.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl bg-[#000000] px-6 py-3 duration-300 ease-in-out hover:bg-[#141414] lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/apple-id.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
        </div>
        <div className="mt-3 grid grid-cols-2 justify-items-center gap-2">
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl bg-[#107c10] px-6 py-3 duration-300 ease-in-out hover:bg-[#076907] lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/x-box.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl bg-[#00349c] px-6 py-3 duration-300 ease-in-out hover:bg-[#00225b] lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/play-station.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="mt-3 flex justify-between gap-2">
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl bg-[#1877f2] px-6 py-3 duration-300 ease-in-out hover:bg-[#0966de] lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/facebook.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl border bg-[#ffffff] px-6 py-3 duration-300 ease-in-out hover:bg-gray-200 lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/google.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl bg-[#000000] px-6 py-3 duration-300 ease-in-out hover:bg-[#141414] lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/apple-id.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl bg-[#107c10] px-6 py-3 duration-300 ease-in-out hover:bg-[#076907] lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/x-box.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
          <Link
            href="#"
            className="flex w-full justify-center rounded-xl bg-[#00349c] px-6 py-3 duration-300 ease-in-out hover:bg-[#00225b] lg:px-8 lg:py-2"
          >
            <img
              src="/imgs/auth/ways/play-station.svg"
              alt="Ways"
              className="h-6 w-6 object-cover lg:h-4 lg:w-4"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
