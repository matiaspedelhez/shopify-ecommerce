import next, { NextPage } from "next";
import { storefront } from "../../utils/storefront";
import PaginationButtons from "../../components/PaginationButtons";

import ProductList from "../../components/ProductList";
const totalDisplayed = 12;

const Store: NextPage = ({ totalProducts, products, selectedPage }) => {
  return (
    <div>
      <ProductList products={products} />
      <PaginationButtons
        selectedPage={selectedPage}
        totalDisplayed={totalDisplayed}
        totalProducts={totalProducts}
      />
    </div>
  );
};

const gql = String.raw;

const getAllCursors = gql`
  query getAllCursors {
    products(first: 250) {
      edges {
        cursor
      }
    }
  }
`;

const getProductsByCursor = (cursor: string): string => {
  return gql`
  query getProductsByCursor {
    products(first: 12, ${cursor === "" ? "" : ', after: "' + cursor + '"'}){
      edges {
        node {
          id
          handle
          title
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            nodes {
              altText
              src
              transformedSrc(maxWidth: 100, maxHeight: 100)
            }
          }
        }
      }
    }
  }
`;
};

export async function getStaticPaths() {
  try {
    const { data } = await storefront(getAllCursors);
    const pageNumber = Math.ceil(
      (await data.products.edges.length) / totalDisplayed
    );
    const pages: string[] = new Array();

    for (let i = 1; i <= pageNumber; i++) {
      pages.push(`${i}`);
    }

    const paths = pages.map((number) => {
      return {
        params: {
          current: number,
        },
      };
    });

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const allCursors = await storefront(getAllCursors);
    const totalProducts = await allCursors.data.products.edges.length;
    const selectedPage = await params.current;

    const getProducts =
      selectedPage == 1
        ? await storefront(getProductsByCursor(""))
        : await storefront(
            getProductsByCursor(
              allCursors.data.products.edges[selectedPage * totalDisplayed]
            )
          );
    const products = getProducts.data.products.edges;

    return {
      props: { totalProducts, selectedPage, products },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Store;
