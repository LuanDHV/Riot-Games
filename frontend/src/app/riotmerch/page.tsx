import Header from "../shared/Header";
import Footer from "./Layout/Footer";
import Banner from "./components/Banner";
import GiftCard from "./components/GiftCard";
import LatestCollaborations from "./components/LatestCollaborations";
import Products from "./components/Products";

export default function RiotMerchPage() {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <GiftCard />
      <LatestCollaborations />
      <Footer />
    </>
  );
}
