import BackDrop from "./components/Backdrop";
import Banner from "./components/Banner";
import ChooseYourChampion from "./components/ChooseYourChampion";
import FeaturedNews from "./components/FeaturedNews";
import MutipleWaysToPlay from "./components/MutipleWaysToPlay";
import SlayWithStyle from "./components/SlayWithStyle";

export default function LeagueOfLegendsPage() {
  return (
    <>
      <Banner />
      <FeaturedNews />
      <ChooseYourChampion />
      <SlayWithStyle />
      <MutipleWaysToPlay />
      <BackDrop />
    </>
  );
}
