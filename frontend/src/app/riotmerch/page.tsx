import Banner from "./components/Banner";
import GiftCard from "./components/GiftCard";
import LatestCollaborations from "./components/LatestCollaborations";
import Products from "./components/Products";

export default function RiotMerchPage() {
  return (
    <>
      <Banner />
      <Products />
      <GiftCard />
      <LatestCollaborations />
    </>
  );
}
