import BackDrop from "./components/BackDrop";
import Banner from "./components/Banner";
import ChooseYourChamp from "./components/ChooseYourChamp";
import CompeteWithFriends from "./components/CompeteWithFriends";
import LatestNews from "./components/LatestNews";
import TheWorldOfWildRift from "./components/TheWorldOfWildRift";
import WelcomeToWildRift from "./components/WelcomeToWildRift";

export default function WildRiftPage() {
  return (
    <>
      <Banner />
      <LatestNews />
      <WelcomeToWildRift />
      <ChooseYourChamp />
      <CompeteWithFriends />
      <TheWorldOfWildRift />
      <BackDrop />
    </>
  );
}
