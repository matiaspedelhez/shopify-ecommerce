import next, { NextPage } from "next";
import { useRouter } from "next/router";
import { storefront } from "../../utils/storefront";
import PaginationButtons from "../../components/PaginationButtons";

import ProductList from "../../components/ProductList";
const totalDisplayed = 4;

const Store: NextPage = ({ totalCount }) => {
  const router = useRouter();

  let current: string | undefined = router.query.current;

  return (
    <div>
      <ProductList />
      <PaginationButtons
        selectedPage={current}
        totalDisplayed={totalDisplayed}
        totalCount={totalCount}
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

const getProductsByCursor = gql`
  query getProductsByCursor {
    products(first: 12, after: "**CURSOR**")
  }
`;

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
  const totalCountData = await storefront(getAllCursors);
  const totalCount = await totalCountData.data.products.edges.length;

  try {
    return {
      props: { totalCount },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Store;
