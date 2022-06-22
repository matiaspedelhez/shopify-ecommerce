import type { NextPage } from 'next';
import { storefront } from '../../../utils/storefront';
import ProductOverview from '../../../components/ProductOverview';
import Head from 'next/head';

const ProductByHandle: NextPage = ({ productByHandle }: any) => {
  return (
    <div>
      <Head>
        <title>{`Blueberry Clothing: ${productByHandle.title}`}</title>
      </Head>
      <ProductOverview productByHandle={productByHandle} />
    </div>
  );
};

const gql = String.raw;

const allPaths = gql`
  {
    products(first: 100) {
      nodes {
        handle
      }
    }
  }
`;

const productByHandle = (handle: string) => gql`
  {
    productByHandle(handle: "${handle}") {
      id
      handle
      description
      images(first: 4) {
        nodes {
          transformedSrc(maxHeight: 50, maxWidth: 50)
          url
          altText
          id
          width
          height
        }
        
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      title
      options(first: 10) {
        name
        values
    }
    }
  }
`;

export async function getStaticPaths() {
  try {
    const { data } = await storefront(allPaths);

    const paths = await data.products.nodes.map(({ handle }: any) => ({
      params: {
        handle: handle,
      },
    }));

    console.log(paths);
    console.log('hola');

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }: any) {
  try {
    const { data } = await storefront(productByHandle(params.handle));

    return {
      props: data,
    };
  } catch (error) {
    console.log(error);
  }
}

export default ProductByHandle;
