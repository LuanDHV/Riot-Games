import Entertainment from "./Entertainment";
import Esports from "./Esports";
import Games from "./Games";
import RiotForge from "./RiotForge";

export default function OurGames() {
  return (
    <>
      <div className="h-auto w-full bg-[#1F1F1F] bg-[url('/imgs/riotgames/games/games-background.png')] bg-cover bg-center px-5 py-20 xl:px-20 xl:py-[100px]">
        <Games />
        <Esports />
        <Entertainment />
        <RiotForge />
      </div>
    </>
  );
}
