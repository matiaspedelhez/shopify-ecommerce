import { useRouter } from 'next/router';
import Image from 'next/image';

const ProductList = ({ products }: any) => {
  const router = useRouter();

  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>

        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map((product: any) => (
            <a
              key={product.node.id}
              className='group cursor-pointer hover:opacity-75'
              onClick={() =>
                router.push(`/store/product/${product.node.handle}`)
              }
            >
              <div className='w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative '>
                <Image
                  src={product.node.images.nodes[0].src}
                  alt={product.node.images.nodes[0].altText}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                  quality={60}
                  className='duration-200'
                  placeholder='blur'
                  blurDataURL={product.node.images.nodes[0].transformedSrc}
                />
              </div>
              <h3 className='mt-4 text-sm text-gray-700'>
                {product.node.title}
              </h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                {`$${product.node.priceRange.minVariantPrice.amount}`}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
