import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export function ErrorPage({ statusCode }) {
  return (
    <>
      <Header />
      <div className="bg-gray-100 mx-auto py-10 md:py-20 px-5 md:px-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-20">
          Oops! An error occurred.
        </h1>
        {statusCode === 404 ? (
          <p className="text-lg md:text-2xl font-bold text-center">
            The page you are looking for could not be found.
          </p>
        ) : (
          <p className="text-lg md:text-2xl font-bold text-center">
            An error {statusCode} occurred on the server.
          </p>
        )}
        <div className="text-center mt-10 md:mt-20">
          <Link href="/">
            <span className="text-blue-500 hover:underline">
              Go back to the homepage
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500
  return { statusCode }
}

export default ErrorPage
