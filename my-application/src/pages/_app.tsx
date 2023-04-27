import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { logoPath } from '../constants/constants'
import { Analytics } from '@vercel/analytics/react'

function App({ Component, pageProps }: AppProps) {
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
          content="A free online YouTube downloader tool that allows users to download YouTube videos in HD quality in MP4 and various other formats."
        />
        <meta
          name="keywords"
          content="Youtube downloader, online video downloader, save Youtube videos, download Youtube videos, Youtube video downloader"
        />
        <title>UTubeLoader - Save Youtube Videos and Audios Easily</title>
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
      <Analytics />
    </>
  )
}

export default App
