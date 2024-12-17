import AllBurn from "./components/AllBurn";
import Banner from "./components/Banner";
import Celebrate from "./components/Celebrate";
import Character from "./components/Character";
import EpisodeStills from "./components/EpisodeStills";
import OurGames from "./components/OurGames";
import PaP from "./components/PaP";
import TheGlobe from "./components/TheGlobe";

export default function ArcanePage() {
  return (
    <>
      <Banner />
      <AllBurn />
      <Celebrate />
      <EpisodeStills />
      <PaP />
      <Character />
      <TheGlobe />
      <OurGames />
    </>
  );
}
