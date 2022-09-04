import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { useEffect } from 'react';
import { init } from '../src/ga';
import '../src/styles/index.css';

export default function App({ Component, pageProps }) {
  // Initializing GA and Tracking Pageviews (GA4)
  useEffect(() => {
    init('G-2G6N5J2B9P');
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};
