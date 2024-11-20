export default function StyleOnEm() {
  return (
    <>
      <div className="flex flex-col items-center gap-16 bg-[url('/imgs/teamfighttactics/styleonem/style-on-em-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="w-full text-[#fffef9] lg:order-2 lg:w-1/2">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            Style On'Em
          </p>

          <p className="text-base lg:text-lg">
            Express yourself with your Little Legend by dancing, emoting, and
            generally showing off.
          </p>
        </div>
        <div className="w-full lg:order-1 lg:w-1/2">
          <img
            src="/imgs/teamfighttactics/styleonem/style-on-em.png"
            alt="Style On Em"
          />
        </div>
      </div>
    </>
  );
}
