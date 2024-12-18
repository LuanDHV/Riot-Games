import AllBurn from "./components/AllBurn";
import Banner from "./components/Banner";
import Celebrate from "./components/Celebrate";
import Character from "./components/Character";
import EpisodeStills from "./components/EpisodeStills";
import OurGames from "./components/OurGames";
import PaP from "./components/PaP";
import Playlist from "./components/Playlist";
import TheGlobe from "./components/TheGlobe";

export default function ArcanePage() {
  return (
    <>
      <Banner />
      <AllBurn />
      <Celebrate />
      <Playlist />
      <EpisodeStills />
      <PaP />
      <Character />
      <TheGlobe />
      <OurGames />
    </>
  );
}
