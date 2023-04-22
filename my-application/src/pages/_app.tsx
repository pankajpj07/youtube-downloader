import "tailwindcss/tailwind.css";
import Head from 'next/head'
import { AppProps } from 'next/app';
import { logoPath } from "./constants/constants";

function App({ Component, pageProps }:AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="description" content="Easily download Youtube videos with our online Youtube downloader. No software installation needed. Save your favorite Youtube videos for free!" />
        <meta name="keywords" content="Youtube downloader, online video downloader, save Youtube videos, download Youtube videos, Youtube video downloader" />
        <title>UTubeLoader - Save Youtube Videos Easily</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href={logoPath}
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;