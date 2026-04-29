import Head from 'next/head';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isLegalPage = router.pathname === '/privacy-policy';

  useEffect(() => {
    if (isLegalPage) {
      document.body.dataset.legalPage = 'true';
      return () => {
        delete document.body.dataset.legalPage;
      };
    }

    delete document.body.dataset.legalPage;
    return undefined;
  }, [isLegalPage]);

  return (
    <>
      {/* Global <head> settings */}
      <Head>
        <title>TimerX</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Google Analytics - gtag.js */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1DB76MVBC4"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1DB76MVBC4');
          `,
        }}
      />

      {/* Layout */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
