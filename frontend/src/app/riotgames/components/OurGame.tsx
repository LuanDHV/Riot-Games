import Entertainment from "./Entertainment";
import Esports from "./Esports";
import Games from "./Games";

export default function OurGame() {
  return (
    <>
      <div className="h-auto w-full bg-[#1F1F1F] px-5 py-20 xl:px-20 xl:py-[100px]">
        <Games />
        <Esports />
        <Entertainment />
      </div>
    </>
  );
}
