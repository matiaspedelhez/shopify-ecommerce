import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';
import { useSharedCartState } from '../pages/_app';

const colorNamer = require('color-namer');

const reviews = { href: '#', average: 4, totalCount: 117 };

interface cartItem {
  id: string;
  title: string;
  imageSrc: string;
  handle: string;
  price: number;
  colorId: string;
  colorName: string;
  size: string;
  quantity: number;
}

interface ProductOverviewProps {
  productByHandle: any;
}

const ProductOverview: React.FunctionComponent<ProductOverviewProps> = ({
  productByHandle,
}) => {
  const transformedProduct = {
    name: productByHandle.title,
    price: `$${productByHandle.priceRange.maxVariantPrice.amount}`,
    handle: productByHandle.handle,
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: productByHandle.images.nodes,
    colors: productByHandle.options
      .filter((e: { name: string; values: string }) => e.name === 'Color')[0]
      .values.map((value: string) => ({
        name: value,
        class: `bg-[${value}]`,
        selectedClass: `ring-[${value}]`,
        color: value,
      })),
    sizes: productByHandle.options
      .filter((e: { name: string; values: string }) => e.name === 'Size')[0]
      .values.map((size: string) => ({ name: size, inStock: true })),
    description: productByHandle.description,
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };

  const [selectedColor, setSelectedColor] = useState(
    transformedProduct.colors[0].name
  );
  const [selectedSize, setSelectedSize] = useState(
    transformedProduct.sizes[0].name
  );
  const { shoppingCart, setShoppingCart } = useSharedCartState();

  useEffect(() => {
    const storagedCart: string | null = localStorage.getItem('shopping-cart');

    if (storagedCart !== null) {
      setShoppingCart(JSON.parse(storagedCart));
    }
  }, []);

  useEffect(() => {
    if (shoppingCart.length) {
      try {
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        // !@!! ANNOUNCE ADDED TO CART
      } catch (error) {
        throw error;
        //announce error
      }
    }
  }, [shoppingCart]);

  const handleSetCartItems = (
    newItem: cartItem,
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();

    if (shoppingCart.some((e) => e.id === newItem.id)) {
      return;
      //(not necessary) anounce that the element is already added to the cart
    }

    setShoppingCart([...shoppingCart, newItem]);
  };

  const classNames = (...classes: Array<String>) => {
    return classes.filter(Boolean).join(' ');
  };

  const productImage = (image: any) => {
    return (
      <Image
        src={image.url}
        alt={image.altText}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        quality={60}
        className='duration-200'
        placeholder='blur'
        blurDataURL={image.transformedSrc}
      />
    );
  };

  return (
    <div className='bg-white'>
      <div className='pt-6'>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className='max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8'
          >
            {transformedProduct.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className='flex items-center'>
                  <a
                    href={breadcrumb.href}
                    className='mr-2 text-sm font-medium text-gray-900'
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox='0 0 16 20'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    className='w-4 h-5 text-gray-300'
                  >
                    <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                  </svg>
                </div>
              </li>
            ))}
            <li className='text-sm'>
              <a
                aria-current='page'
                className='font-medium text-gray-500 hover:text-gray-600'
              >
                {transformedProduct.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className='mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
          <div className='hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block max-w-sm'>
            <div
              className='w-full h-96 relative'
              style={{ backgroundColor: '#e2e2e2' }}
            >
              {productImage(transformedProduct.images[0])}
            </div>
          </div>
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
              <div
                className=' w-full h-full relative'
                style={{ backgroundColor: '#e2e2e2' }}
              >
                {productImage(transformedProduct.images[1])}
              </div>
            </div>
            <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden max-w-sm'>
              <div
                className='w-full h-full relative'
                style={{ backgroundColor: '#e2e2e2' }}
              >
                {productImage(transformedProduct.images[2])}
              </div>
            </div>
          </div>
          <div className='aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4'>
            <div
              className='w-full h-96 relative'
              style={{ backgroundColor: '#e2e2e2' }}
            >
              {productImage(transformedProduct.images[3])}
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className='max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
              {transformedProduct.name}
            </h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:mt-0 lg:row-span-3'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl text-gray-900'>{transformedProduct.price}</p>

            {/* Reviews */}
            <div className='mt-6'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? 'text-gray-900'
                          : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className='mt-10'>
              {/* Colors */}
              <div>
                <h3 className='text-sm text-gray-900 font-medium'>Color</h3>

                <RadioGroup
                  value={selectedColor}
                  className='mt-4'
                  onChange={setSelectedColor}
                >
                  <RadioGroup.Label className='sr-only'>
                    Choose a color
                  </RadioGroup.Label>
                  <div className='flex items-center space-x-3'>
                    {transformedProduct.colors.map((color: any) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color.name}
                        style={{ backgroundColor: color.color }}
                        className={({ active, checked }) => {
                          return classNames(
                            checked ? 'ring' : '',
                            active ? 'ring ring-offset-1' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                          );
                        }}
                      >
                        <RadioGroup.Label as='span' className='sr-only'>
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden='true'
                          className={classNames(
                            color.class,
                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className='mt-10'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm text-gray-900 font-medium'>Size</h3>
                  <a
                    href='#'
                    className='text-sm font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Size guide
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className='mt-4'
                >
                  <RadioGroup.Label className='sr-only'>
                    Choose a size
                  </RadioGroup.Label>
                  <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                    {transformedProduct.sizes.map((size: any) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size.name}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                              : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as='span'>
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked
                                    ? 'border-indigo-500'
                                    : 'border-transparent',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden='true'
                              />
                            ) : (
                              <span
                                aria-hidden='true'
                                className='absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none'
                              >
                                <svg
                                  className='absolute inset-0 w-full h-full text-gray-200 stroke-2'
                                  viewBox='0 0 100 100'
                                  preserveAspectRatio='none'
                                  stroke='currentColor'
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect='non-scaling-stroke'
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                onClick={(event) =>
                  handleSetCartItems(
                    {
                      id: `${transformedProduct.handle}?${selectedColor}?${selectedSize}`,
                      title: transformedProduct.name,
                      imageSrc: transformedProduct.images[0].url,
                      colorId: selectedColor,
                      colorName: colorNamer(selectedColor).ntc[0].name,
                      size: selectedSize,
                      handle: transformedProduct.handle,
                      price: Number(
                        transformedProduct.price.match(/[0-9][0-9.]*[0-9]/gi)
                      ),
                      quantity: 1,
                    },
                    event
                  )
                }
                className='mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className='py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            {/* Description and details */}
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>
                  {transformedProduct.description}
                </p>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

              <div className='mt-4'>
                <ul role='list' className='pl-4 list-disc text-sm space-y-2'>
                  {transformedProduct.highlights.map((highlight) => (
                    <li key={highlight} className='text-gray-400'>
                      <span className='text-gray-600'>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-10'>
              <h2 className='text-sm font-medium text-gray-900'>Details</h2>

              <div className='mt-4 space-y-6'>
                <p className='text-sm text-gray-600'>
                  {transformedProduct.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
