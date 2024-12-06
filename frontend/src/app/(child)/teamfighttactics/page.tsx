import Banner from "./components/Banner";
import Battle from "./components/Battle";
import GetYourGameOne from "./components/GetYourGameOne";
import HowToPlay from "./components/HowToPlay";
import LatestNews from "./components/LatestNews";
import Magic from "./components/Magic";
import PickUpAndGo from "./components/PickUpAndGo";
import StyleOnEm from "./components/StyleOnEm";

export default function TeamFightTacticsPage() {
  return (
    <>
      <Banner />
      <Battle />
      <PickUpAndGo />
      <StyleOnEm />
      <Magic />
      <LatestNews />
      <HowToPlay />
      <GetYourGameOne />
    </>
  );
}
