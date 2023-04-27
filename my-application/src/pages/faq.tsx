import Head from 'next/head'
import { companyName } from '../constants/constants'
import Footer from '../components/footer'
import Header from '../components/header'

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - {companyName}</title>
        <link
          rel="canonical"
          href="https://www.utubeloader.com/faq"
          key="canonical"
        />
        <meta
          name="description"
          content="Find answers to frequently asked questions about using {companyName} - the fastest and easiest way to download videos from various video sharing websites, including YouTube. Learn about our features, supported formats, and more."
        />
      </Head>
      {/* Header */}
      <Header />
      <div className="container min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto py-8 px-10">
          <h1 className="text-2xl font-bold mb-8">
            Frequently Asked Questions
          </h1>
          <div className="grid gap-8">
            <div>
              <h2 className="text-lg font-bold mb-2">
                How do I download a video using {companyName}?
              </h2>
              <p>
                Copy the video link from YouTube, paste it into the URL field on
                the {companyName} website, and click the "Download" button.
                Choose the file format and resolution you want, and the video
                will be downloaded to your device.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Is it legal to download videos from YouTube?
              </h2>
              <p>
                It is generally against YouTube's terms of service to download
                videos from their platform. However, whether or not it is legal
                to do so depends on the laws in your country. It is your
                responsibility to ensure that you comply with all applicable
                laws and regulations.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Can I use {companyName} to download copyrighted material?
              </h2>
              <p>
                No, {companyName} does not condone the downloading of
                copyrighted material without permission. It is your
                responsibility to ensure that you only download videos that you
                have the right to use.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Can I download YouTube videos using {companyName} on my mobile
                device?
              </h2>
              <p>
                Yes, you can use {companyName} to download videos from YouTube
                on your mobile device by accessing the {companyName} website
                through your mobile browser.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                How do I convert a video to a different file format?
              </h2>
              <p>
                {companyName} provides options to download videos in different
                file formats and resolutions. If you want to convert a video to
                a different file format after downloading, you can use
                third-party video conversion software or websites.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Is {companyName} free to use?
              </h2>
              <p>
                Yes, {companyName} is a free-to-use website and does not charge
                users for downloading videos.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                What is the maximum video resolution that can be downloaded
                using {companyName}?
              </h2>
              <p>
                {companyName} supports downloading videos in a variety of
                resolutions, including 720p, 1080p, and 4K, depending on the
                availability of the video on YouTube.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Can I download videos from other video sharing websites besides
                YouTube using {companyName}?
              </h2>
              <p className="mb-4">
                No, {companyName} only allows users to download videos from
                YouTube. Any attempt to download videos from other video sharing
                websites may be a violation of their terms of service and could
                lead to legal consequences.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Is it legal to download videos from YouTube using {companyName}?
              </h2>
              <p className="mb-4">
                It is legal to download videos from YouTube for personal use.
                However, downloading copyrighted material without the owner's
                permission is illegal. It is the responsibility of the user to
                ensure that they have the right to download the video.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Is {companyName} free to use?
              </h2>
              <p className="mb-4">
                {companyName} is a free service that allows users to download
                videos from YouTube. However, we may display ads or offer
                premium features that require payment.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Do I need to create an account to use {companyName}?
              </h2>
              <p className="mb-4">
                No, {companyName} does not require users to create an account to
                use our service. However, creating an account may offer
                additional benefits such as faster download speeds and the
                ability to download multiple videos at once.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">
                Is {companyName} safe to use?
              </h2>
              <p className="mb-4">
                {companyName} takes the privacy and security of our users very
                seriously. We use industry-standard encryption to protect user
                data and do not store any user information on our servers.
                However, we cannot guarantee the safety of third-party websites
                or the content that users download.
              </p>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* Footer */}
      <Footer />
    </>
  )
}
