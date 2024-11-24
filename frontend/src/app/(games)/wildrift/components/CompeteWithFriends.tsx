export default function CompeteWithFriends() {
  return (
    <>
      <div className="h-[45px] w-full bg-[url('/imgs/wildrift/competewithfriends/compete-with-friends-background-1.png')] bg-cover bg-center md:h-[72px] lg:h-[115px] xl:h-[175px]"></div>
      <div className="flex flex-col items-center gap-16 bg-[url('/imgs/wildrift/competewithfriends/compete-with-friends-background-2.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#141e37] lg:w-1/2">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            Compete With Friends
          </p>
          <p className="text-base lg:text-lg">
            Queue up with your full squad, or see how high you can climb the
            ranked ladder solo. Every game is a chance to land the perfect skill
            shot, turn the tides in a crazy teamfight, or pull off that sweet,
            sweet pentakill.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <video
            src="/imgs/wildrift/competewithfriends/compete-with-friends.mp4"
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
      <div className="h-[45px] w-full bg-[url('/imgs/wildrift/competewithfriends/compete-with-friends-background-3.png')] bg-cover bg-center md:h-[72px] lg:h-[115px] xl:h-[175px]"></div>
    </>
  );
}
