import { IRiotMerchCartProps } from "../types/interface";

export default function RiotMerchCart({
  openRiotMerchCart,
  setOpenRiotMerchCart,
}: IRiotMerchCartProps) {
  if (!openRiotMerchCart) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpenRiotMerchCart(!openRiotMerchCart)}
        ></div>

        {/* Cart Menu */}
        <div className="relative right-0 flex h-full w-full bg-white md:w-2/5 xl:w-2/6">
          <div className="flex w-full flex-col pt-10">
            <div className="w-full px-8 pb-8">
              <div className="flex items-center justify-between">
                <h2 className="flex gap-1 text-base font-bold uppercase lg:text-[28px]">
                  Cart <span className="text-xs">(0)</span>
                </h2>

                <button
                  className="flex items-center gap-1"
                  onClick={() => setOpenRiotMerchCart(!openRiotMerchCart)}
                >
                  <span className="uppercase">Close</span>
                  <img
                    src="/imgs/riotmerch/products/close-icon.svg"
                    alt="Close Icon"
                  />
                </button>
              </div>
            </div>
            <div className="w-full px-8 pb-8">
              <div className=""> 2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
