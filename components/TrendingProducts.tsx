import Image from "next/image";
import { useRouter } from "next/router";

const TrendingProducts = ({ trendingProducts }) => {
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Trending products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {trendingProducts.map((product) => (
            <div
              key={product.node.id}
              className="group relative h-auto cursor-pointer"
              onClick={() =>
                router.push(`/store/product/${product.node.handle}`)
              }
            >
              <div className="w-full h-96 sm:h-80 bg-gray-200 rounded-md group-hover:opacity-75 relative">
                <Image
                  src={product.node.images.nodes[0].url}
                  alt={product.node.handle}
                  layout="fill"
                  quality={30}
                  placeholder="blur"
                  blurDataURL={product.node.images.nodes[0].transformedSrc}
                  className="w-full h-full object-center object-cover duration-200"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.node.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.node.variants.edges[0].node.title}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.node.priceRange.minVariantPrice.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
