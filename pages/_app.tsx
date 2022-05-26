import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useBetween } from 'use-between';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import ShoppingCart from '../components/ShoppingCart';

const useCartState = () => {
  const [cartItems, setCartItems] = useState<object[]>([]);
  return { cartItems, setCartItems };
};
export const useSharedCartState = () => useBetween(useCartState);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const { cartItems } = useSharedCartState();

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return pageLoading ? (
    <LoadingScreen />
  ) : (
    <div className='animate-emerge'>
      <ShoppingCart
        closeCart={() => setShowCart(false)}
        showCart={showCart}
        cartItems={cartItems}
      />
      <Navbar
        cartLength={cartItems.length}
        switchCart={() => setShowCart(!showCart)}
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
