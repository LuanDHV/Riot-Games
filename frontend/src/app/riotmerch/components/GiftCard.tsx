export default function GiftCard() {
  return (
    <>
      <div className="relative mt-10 flex h-auto w-full flex-col items-center justify-center gap-10 bg-[#f7f7f7] bg-[url('/imgs/riotmerch/giftcard/giftcard-background.png')] bg-cover bg-center px-5 md:px-8 lg:flex-row lg:px-12 xl:px-[200px]">
        <div className="flex w-full flex-col items-center justify-center gap-10 pt-3 lg:h-1/2 lg:w-1/2 lg:items-start">
          <div className="flex flex-col gap-5 font-bold uppercase">
            <p className="text-sm text-[#666666]">Gift Cards</p>
            <p className="text-center text-5xl text-[#000000]">
              Give A Gift Card
            </p>
          </div>
          <button className="clip-button-slant hidden h-[50px] w-full bg-[#eb0029] text-base font-bold uppercase text-white duration-300 ease-in-out hover:brightness-75 lg:block lg:max-w-[240px]">
            Buy It Now
          </button>
        </div>
        <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
          <img
            src="/imgs/riotmerch/giftcard/giftcard.png"
            alt="Gift Card"
            className="my-8 h-[144px] w-full object-contain lg:h-[380px]"
          />
          <button className="clip-button-slant block h-[50px] w-full bg-[#eb0029] text-base font-bold uppercase text-white duration-300 ease-in-out hover:brightness-75 md:w-[435px] lg:hidden lg:max-w-[240px]">
            Buy It Now
          </button>
        </div>
      </div>
    </>
  );
}
