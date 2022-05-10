import type { NextPage } from "next";

import PromoSection from "../components/PromoSection";
import TrendingProducts from "../components/TrendingProducts";

const Home: NextPage = () => {
  return (
    <>
      <PromoSection />
      <TrendingProducts />
    </>
  );
};

export default Home;
