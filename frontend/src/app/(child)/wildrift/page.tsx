import BackDrop from "./components/BackDrop";
import Banner from "./components/Banner";
import ChooseYourChamp from "./components/ChooseYourChamp";
import CompeteWithFriends from "./components/CompeteWithFriends";
import News from "./components/News";
import TheWorldOfWildRift from "./components/TheWorldOfWildRift";
import WelcomeToWildRift from "./components/WelcomeToWildRift";

export default function WildRiftPage() {
  return (
    <>
      <Banner />
      <News />
      <WelcomeToWildRift />
      <ChooseYourChamp />
      <CompeteWithFriends />
      <TheWorldOfWildRift />
      <BackDrop />
    </>
  );
}
