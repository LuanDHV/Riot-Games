import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="absolute bottom-5 flex w-full flex-col justify-center px-5 text-xs font-bold uppercase text-[#adadad]">
        <div className="my-2 flex flex-wrap justify-center gap-x-3 lg:justify-start">
          <Link href="#" className="p-2">
            Support
          </Link>
          <Link href="#" className="p-2">
            Privacy Notice
          </Link>
          <Link href="#" className="p-2">
            Terms of Service
          </Link>
          <Link href="#" className="p-2">
            Cookie Preferences
          </Link>
        </div>
        <div className="text-center lg:text-start">
          This site is protected by hCaptcha and its
          <Link href="#" className="mx-1 text-[#ebebebe6]">
            Privacy Policy
          </Link>
          and
          <Link href="#" className="mx-1 text-[#ebebebe6] underline">
            Terms of Service
          </Link>
          apply.
        </div>
      </div>
    </>
  );
}