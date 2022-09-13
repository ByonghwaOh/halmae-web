import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { useEffect } from 'react';
import { init } from '../src/ga';
import '../src/styles/index.css';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
  // Initializing GA and Tracking Pageviews (GA4)
  useEffect(() => {
    init('G-2G6N5J2B9P');
  }, []);

  return (
    <>
      <CssBaseline />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};
