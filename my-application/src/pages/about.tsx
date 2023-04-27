import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Your Trusted YouTube Video Downloader"</title>
        <link
          rel="canonical"
          href="https://www.utubeloader.com/about"
          key="canonical"
        />
        <meta
          name="description"
          content="Learn more about UTubeDownloader, the free online tool that lets you download YouTube videos in MP3 and MP4 formats."
        />
      </Head>
      <Header />
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            UTubeDownloader is a free online tool that allows you to download
            YouTube videos in both MP3 and MP4 formats. Our website started in
            2018 with the aim of providing an easy-to-use and reliable solution
            for downloading videos from YouTube.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our service is completely free and there are no limitations on the
            number of videos you can download. We pride ourselves on providing a
            fast and efficient service that makes it easy for users to download
            their favorite videos from YouTube.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Whether you're looking to download music videos or other types of
            content, our tool is designed to make the process as simple as
            possible. With just a few clicks, you can have your videos
            downloaded and ready to watch or listen to offline.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
