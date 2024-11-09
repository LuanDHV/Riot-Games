import BackDrop from "./components/Backdrop";
import Banner from "./components/Banner";
import ChooseYourChampion from "./components/ChooseYourChampion";
import FeaturedNews from "./components/FeaturedNews";

export default function LeagueOfLegendsPage() {
  return (
    <>
      <Banner />
      <FeaturedNews />
      <ChooseYourChampion />
      <BackDrop />
    </>
  );
}
