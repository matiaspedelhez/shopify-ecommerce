import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return pageLoading ? (
    <LoadingScreen />
  ) : (
    <div className="animate-emerge">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
