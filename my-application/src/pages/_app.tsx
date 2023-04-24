import "tailwindcss/tailwind.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { logoPath } from "../constants/constants";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../../lib/ga'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url:string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta
          name="google-site-verification"
          content="gtnv05yQdxw8nDZ2GPZytDTzmTxGnO29cR5BZ82AwvQ"
        />
        <meta
          name="description"
          content="Easily download Youtube videos with our online Youtube downloader. No software installation needed. Save your favorite Youtube videos for free!"
        />
        <meta
          name="keywords"
          content="Youtube downloader, online video downloader, save Youtube videos, download Youtube videos, Youtube video downloader"
        />
        <title>UTubeLoader - Save Youtube Videos Easily</title>
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />
        <link href={logoPath} rel="icon" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
