import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="text-center text-xs font-bold uppercase text-[#adadad]">
        <div className="my-2 flex flex-wrap justify-center">
          <Link href="#" className="px-3 py-2">
            Support
          </Link>
          <Link href="#" className="px-3 py-2">
            Privacy Notice
          </Link>
          <Link href="#" className="px-3 py-2">
            Terms of Service
          </Link>
          <Link href="#" className="px-3 py-2">
            Cookie Preferences
          </Link>
        </div>
        <div className="">
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
