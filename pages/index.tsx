import type { NextPage } from "next";
import { storefront } from "../utils/storefront";

import PromoSection from "../components/PromoSection";
import TrendingProducts from "../components/TrendingProducts";
import Head from "next/head";

const Home: NextPage = ({ products }) => {
  return (
    <>
      <Head>
        <title>{`Blueberry Clothing: Home`}</title>
      </Head>
      <PromoSection />
      <TrendingProducts trendingProducts={products.edges} />
    </>
  );
};

const gql = String.raw;

const FeaturedProductsQuery: string = gql`
  query FeaturedProducts {
    products(first: 4, sortKey: BEST_SELLING) {
      edges {
        node {
          id
          priceRange {
            minVariantPrice {
              amount
            }
          }
          title
          variants(first: 1) {
            edges {
              node {
                title
              }
            }
          }
          images(first: 1) {
            nodes {
              transformedSrc(maxHeight: 30, maxWidth: 30)
              url
            }
          }
          handle
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const { data } = await storefront(FeaturedProductsQuery);

  return {
    props: data,
  };
}

export default Home;
