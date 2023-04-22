import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <p className="text-gray-600">&copy; 2018 - 2023 UtubeLoader.com</p>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row justify-center items-center md:justify-end space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/about">
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">About</span>
            </Link>
            <Link href="/privacy-policy">
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms-and-conditions">
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Terms & Conditions</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</span>
            </Link>
            <Link href="/faq">
              <span className="text-gray-600 hover:text-gray-900 cursor-pointer">FAQ</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
