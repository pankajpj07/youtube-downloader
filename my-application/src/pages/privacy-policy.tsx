import Head from 'next/head'
import { Fragment } from 'react'
import { companyName } from '../constants/constants'
import Header from '../components/header'
import Footer from '../components/footer'

export default function PrivacyPolicy() {
  return (
    <Fragment>
      <Head>
        <title>Privacy Policy | {companyName}</title>
        <link
          rel="canonical"
          href="https://www.utubeloader.com/privacy-policy"
          key="canonical"
        />
        <meta
          name="description"
          content="Read our privacy policy to learn how we handle and protect your personal information while using {companyName} website, applications, and related services."
        />
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <div className="py-12 sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <h1 className="font-bold mb-2 mt-3">Privacy Policy</h1>
            <p>
              At {companyName} (“we” or “us”), we respect your privacy and are
              committed to protecting your personal information. This privacy
              policy (“Policy”) explains how we collect, use, and disclose
              information when you use our website, applications and related
              services (collectively, the “Service”).
            </p>
            <p>
              By visiting, accessing, using, downloading, copying, installing
              and/or joining (collectively “using”) the Service, you consent to
              our collection, use, and disclosure of your personal information
              in accordance with this Policy. If you do not agree to this
              Policy, please do not use the Service.
            </p>
            <h2 className="font-bold mb-2 mt-3">Information We Collect</h2>
            <p>
              When you use the Service, we may collect certain information about
              you, including:
            </p>
            <ul>
              <li>
                Information you provide to us, such as your name, email address,
                and payment information.
              </li>
              <li>
                Information we collect automatically when you use the Service,
                such as your IP address, browser type, and device type.
              </li>
              <li>
                Information we collect from third parties, such as social media
                platforms or payment processors.
              </li>
            </ul>
            <h2 className="font-bold mb-2 mt-3">Use of Information</h2>
            <p>
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul>
              <li>Providing and improving the Service</li>
              <li>Processing payments and providing customer support</li>
              <li>Communicating with you about the Service</li>
              <li>Enforcing our Terms and policies</li>
              <li>Responding to legal requests or investigations</li>
            </ul>
            <h2 className="font-bold mb-2 mt-3">Disclosure of Information</h2>
            <p>
              We may disclose the information we collect to third parties for
              various purposes, including:
            </p>
            <ul>
              <li>
                Service providers who assist us in providing and improving the
                Service
              </li>
              <li>Payment processors to process your payments</li>
              <li>
                Law enforcement or other government agencies in response to
                legal requests or investigations
              </li>
              <li>
                Acquirers or successors in the event of a sale, merger, or other
                business transaction
              </li>
            </ul>
            <h2 className="font-bold mb-2 mt-3">Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method
              of transmission over the internet or method of electronic storage
              is 100% secure, and we cannot guarantee the absolute security of
              your information.
            </p>
            <h2 className="font-bold mb-2 mt-3">Changes to this Policy</h2>
            <p>
              We may update this Policy from time to time by posting a new
              version on our We may update this Policy from time to time by
              posting a new version on our website or by notifying you via email
              or other means. Your continued use of the Service after any such
              changes constitutes your acceptance of the new Policy. We
              encourage you to review this Policy periodically to stay informed
              about our information practices. If you have any questions or
              concerns about this Policy, please contact us at [insert contact
              information].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
