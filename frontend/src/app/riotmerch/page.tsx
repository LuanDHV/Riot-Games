import Header from "../shared/Header";
import Footer from "./Layout/Footer";
import Banner from "./components/Banner";
import GiftCard from "./components/GiftCard";
import LatestCollaborations from "./components/LatestCollaborations";

export default function RiotMerchPage() {
  return (
    <>
      <Header />
      <Banner />
      <GiftCard />
      <LatestCollaborations />
      <Footer />
    </>
  );
}
