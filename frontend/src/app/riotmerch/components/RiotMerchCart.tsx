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
        <div className="relative right-0 flex h-full w-full bg-white md:w-[448px]">
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
              <div className="border-y-[1px] border-[#d0d0d0] py-8">
                Your cart is empty
              </div>

              {/* Show When Cart is not Empty */}
              {/* <div className="flex gap-4 border-y-[1px] border-[#d0d0d0] py-8">
                <div className="flex min-h-[103px] min-w-[103px] items-center justify-center">
                  <img
                    src="/imgs/riotmerch/products/arcane/Test-Img-Add-To-Card.png"
                    alt="Img Product"
                    className="h-[76px] w-[76px] object-cover"
                  />
                </div>
                <div className="flex w-full flex-col justify-between">
                  <div className="text-base font-bold">Diana Unlocked</div>
                  <div className="">$74.99</div>
                  <div className="flex items-center justify-end">
                    <img
                      src="/imgs/riotmerch/products/delete-icon.svg"
                      alt="Delete Icon"
                      className="cursor-pointer pr-1"
                    />
                    <div className="flex w-5 justify-center font-bold">1</div>
                    <img
                      src="/imgs/riotmerch/products/add-icon.svg"
                      alt="Add Icon"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div> */}

              {/* Show When Cart is not Empty */}
              {/* <div className="border-b-[1px] border-[#d0d0d0] py-8">
                <div className="flex flex-col gap-8">
                  <h2 className="flex gap-1 text-base font-bold uppercase lg:text-[28px]">
                    Summary
                  </h2>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <div className="">Subtotal (1 items)</div>
                      <div className="">USD $74.99</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="">Shipping & Tax</div>
                      <div className="">Calculated at next step</div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Show When Cart is not Empty */}
          {/* <div className="absolute bottom-0 w-full border-t-[1px] border-[#d0d0d0] p-8">
            <button className="clip-button-slant h-[50px] w-full bg-[#eb0029] text-base font-bold uppercase text-white duration-300 ease-in-out">
              Check Out
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
