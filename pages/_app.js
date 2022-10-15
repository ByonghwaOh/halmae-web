import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { Environment } from '../src/environment';
import { useEffect } from 'react';
import { init } from '../src/ga';
import CssBaseline from '@mui/material/CssBaseline';
import '../src/styles/index.css';

export default function App({ Component, pageProps }) {
  if (Environment.googleAnalytics) {
    // Initializing GA and Tracking Pageviews (GA4)
    useEffect(() => {
      init('G-2G6N5J2B9P');
    }, []);
  };

  return (
    <>
      {/*<CssBaseline />*/}
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};
