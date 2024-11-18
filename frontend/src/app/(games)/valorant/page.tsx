import Banner from "./components/Banner";
import Collision from "./components/Collision";
import TheLatest from "./components/TheLatest";
import WeAreValorant from "./components/WeAreValorant";
import YourAgents from "./components/YourAgents";
import YourMaps from "./components/YourMaps";

export default function ValorantPage() {
  return (
    <>
      <Banner />
      <TheLatest />
      <Collision />
      <WeAreValorant />
      <YourAgents />
      <YourMaps />
    </>
  );
}
