import { useEffect } from 'react';
import { useRouter } from 'next/router';

// import { DefaultSeo } from 'next-seo';

import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/custom.css';
import '../styles/keen-slider.min.css';

import * as gtag from '../lib/google/gtag';

function App({ Component, pageProps, err }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} err={err} />;
}

export default App;
