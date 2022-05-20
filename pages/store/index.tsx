import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Store: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/store/1");
  }, []);

  return <></>;
};

export default Store;
