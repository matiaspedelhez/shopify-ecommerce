import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import PromoSection from "../components/PromoSection";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <PromoSection />
    </>
  );
};

export default Home;
