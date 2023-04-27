import Head from 'next/head'
import { companyName } from '../constants/constants'
import Header from '../components/header'
import Footer from '../components/footer'

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>{companyName} - Terms and Conditions</title>
        <link
          rel="canonical"
          href="https://www.utubeloader.com/terms-and-conditions"
          key="canonical"
        />
        <meta
          name="description"
          content="Read our Terms and Conditions to learn about your rights and obligations when using {companyName} services. Find out how we protect your privacy and what you need to know before using our platform."
        ></meta>
      </Head>
      <Header />
      <div className="bg-gray-100 py-12 px-4">
        <main className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>

          <p className="mb-4">
            By accessing and using {companyName} (the "Service"), you accept and
            agree to be bound by the terms and provision of this agreement. In
            addition, when using these particular services, you shall be subject
            to any posted guidelines or rules applicable to such services. Any
            participation in this service will constitute acceptance of this
            agreement. If you do not agree to abide by the above, please do not
            use this service.
          </p>

          <h2 className="text-xl font-bold mb-2">Use of Service</h2>
          <p className="mb-4">
            You agree to use the Service only for purposes that are legal,
            proper, and in accordance with these Terms and any applicable laws,
            regulations, and generally accepted online practices or guidelines.
            You agree not to use the Service:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>To download or distribute copyrighted materials</li>
            <li>
              To engage in any activity that would constitute a criminal offense
              or give rise to a civil liability
            </li>
            <li>
              To interfere with or disrupt the Service or servers or networks
              connected to the Service
            </li>
            <li>
              To impersonate any person or entity or falsely state or otherwise
              misrepresent your affiliation with a person or entity
            </li>
            <li>
              To gain unauthorized access to any portion or feature of the
              Service, or any other systems or networks connected to the
              Service, or to any server or services offered on or through the
              Service, by hacking, password "mining," or any other illegitimate
              means
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-2">Disclaimer of Warranties</h2>
          <p className="mb-4">
            The Service is provided "as is" and without warranty of any kind.{' '}
            {companyName} does not warrant that the Service will be
            uninterrupted or error-free, or that the Service will meet your
            specific requirements or expectations. {companyName} expressly
            disclaims all warranties, whether express or implied, including, but
            not limited to, the implied warranties of merchantability and
            fitness for a particular purpose.
          </p>

          <h2 className="text-xl font-bold mb-2">Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall {companyName} be liable for any direct, indirect,
            incidental, special, or consequential damages arising out of or in
            any way connected with the use of the Service or with the delay or
            inability to use the Service, or for any information, products, and
            services obtained through the Service, or otherwise arising out of
            the use of the Service, whether based on contract, tort, strict
            liability, or otherwise.
          </p>

          <h2 className="text-xl font-bold mb-2">Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold {companyName} In the event that any
            third party brings a claim or legal action against {companyName} as
            a result of your use of the Service or any breach of these Terms,
            you agree to indemnify and hold {companyName} harmless from and
            against all damages, losses, and expenses of any kind (including
            reasonable legal fees and costs) related to such claim or action.
            You also agree to cooperate fully with {companyName} in the defense
            of any such claim or action. {companyName} reserves the right, at
            its own expense, to assume the exclusive defense and control of any
            matter for which it is entitled to indemnification from you. In such
            event, you agree to provide {companyName} with such cooperation as
            is reasonably requested.
            {companyName} shall have no liability to you for any interruption or
            delay in access to the Service, irrespective of the cause.
            {companyName} makes no representations or warranties that the
            Service is appropriate or available for use in all locations. Those
            who access or use the Service from jurisdictions prohibiting such
            use, do so at their own volition and are responsible for compliance
            with applicable laws. These Terms shall be governed and interpreted
            in accordance with the laws of the jurisdiction in which{' '}
            {companyName} is incorporated, without giving effect to any conflict
            of laws principles. Any legal action or proceeding arising under
            these Terms shall be brought exclusively in the federal or state
            courts located in the jurisdiction in which {companyName} is
            incorporated. If any provision of these Terms is held to be invalid
            or unenforceable, such provision shall be struck and the remaining
            provisions shall be enforced.
          </p>
        </main>
      </div>
      <Footer />
    </>
  )
}
