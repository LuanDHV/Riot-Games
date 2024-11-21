export default function HowToPlay() {
  return (
    <>
      <div className="bg-[url('/imgs/teamfighttactics/howtoplay/how-to-play-background.png')] bg-cover bg-center p-6 md:p-8 lg:flex-row lg:p-12 xl:px-[200px]">
        <div className="mb-12 w-full text-center text-[#fffef9]">
          <p className="mb-4 text-5xl font-extrabold uppercase lg:text-8xl">
            How To Play Teamfight Tactics
          </p>

          <p className="text-base lg:text-lg">
            Learn to play Teamfight Tactics in this video by Nero Wolf. Jump in
            to get the basics on drafting champions, deploying teams, collecting
            gold, and more.
          </p>
        </div>

        {/* Responsive Video Wrapper */}
        <div className="aspect-[16/9] w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/-Ukq9bxiu8M"
            title="How To Play Teamfight Tactics"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
