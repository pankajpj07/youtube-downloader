import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us - Utubeloader</title>
        <link
          rel="canonical"
          href="https://www.utubeloader.com/contact"
          key="canonical"
        />
        <meta
          name="description"
          content="Contact Utubeloader support for assistance."
        />
      </Head>
      <Header />
      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="px-4 md:px-8 py-10 md:py-16 max-w-screen-md mx-auto">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg mb-6">
              The only way to reach us is through email:{' '}
              <a
                className="text-blue-600"
                href="mailto:support@utubeloader.com"
              >
                support@utubeloader.com
              </a>
            </p>
            <p className="text-lg mb-6">
              We will try to respond to your email within 24 hours.
            </p>
            <Link href="/">
              <span className="text-blue-600 hover:underline">
                Back to Home
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
