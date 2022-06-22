/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useSharedCartState } from '../pages/_app';

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

export default function ShoppingCart({ showCart, closeCart }) {
  const { shoppingCart, setShoppingCart } = useSharedCartState();
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    const storagedCart: string | null = localStorage.getItem('shopping-cart');

    if (storagedCart !== null) {
      setShoppingCart(JSON.parse(storagedCart));
    }
  }, []);

  useEffect(() => {
    // updates the cart when user removes a item
    try {
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    } catch (error) {
      throw error;
    }
    handleSetSubTotal();
  }, [shoppingCart]);

  const handleRemoveItemFromCart = (itemId: string): void => {
    const newShoppingCart = shoppingCart.filter((item) => item.id !== itemId);
    setShoppingCart(newShoppingCart);
  };

  const handleSetSubTotal = () => {
    let aux: number = 0;
    shoppingCart.forEach((e) => (aux = aux + e.price));
    setSubTotal(aux);
  };

  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog
        as='div'
        onClose={() => {
          return;
        }}
        className='relative z-40'
      >
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          {' '}
                          Shopping cart{' '}
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                            onClick={closeCart}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      <div className='mt-8'>
                        <div className='flow-root'>
                          <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'
                          >
                            {shoppingCart.map((product) => (
                              <li key={product.id} className='flex py-6'>
                                <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-gray-200 border-gray-200 relative'>
                                  <Image
                                    src={product.imageSrc}
                                    alt='product image'
                                    layout='fill'
                                    quality={2}
                                    objectFit='contain'
                                    objectPosition='center'
                                  />
                                </div>

                                <div className='ml-4 flex flex-1 flex-col'>
                                  <div>
                                    <div className='flex justify-between text-base font-medium text-gray-900'>
                                      <h3>
                                        <Link
                                          href={`/store/product/${product.handle}`}
                                        >
                                          <a> {product.title} </a>
                                        </Link>
                                      </h3>
                                      <p className='ml-4'>${product.price}</p>
                                    </div>
                                    <p className='mt-1 text-sm text-gray-500'>
                                      {`${product.colorName} - ${product.size}`}
                                    </p>
                                  </div>
                                  <div className='flex flex-1 items-end justify-between text-sm'>
                                    <p className='text-gray-500'>
                                      Qty: {product.quantity}
                                    </p>

                                    <div className='flex'>
                                      <button
                                        type='button'
                                        className='font-medium text-indigo-600 hover:text-indigo-500'
                                        onClick={() =>
                                          handleRemoveItemFromCart(product.id)
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Subtotal</p>
                        <p>{`$${subTotal}`}</p>
                      </div>
                      <p className='mt-0.5 text-sm text-gray-500'>
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className='mt-6'>
                        <a
                          href='#'
                          className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                        >
                          Checkout
                        </a>
                      </div>
                      <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                        <p>
                          or{' '}
                          <button
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                            onClick={closeCart}
                          >
                            Continue Shopping
                            <span aria-hidden='true'> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
