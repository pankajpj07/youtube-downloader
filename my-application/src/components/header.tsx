import Link from 'next/link'
import Image from 'next/image'
import { logoPath } from '../constants/constants'

export default function Header() {
  return (
    <div>
      <Link href="/">
        <div className="font-bold py-4 md:py-6 md:px-5 px-2.5 bg-gray-200 text-xl md:text-2xl ">
          <span className="flex items-center">
            <Image
              priority
              width={32}
              height={32}
              src={logoPath}
              alt="utubeloader logo"
              title="UtubeLoader Logo"
            />
            <span className="text-red-900 ml-3">U</span>TubeLoader
          </span>
        </div>
      </Link>
    </div>
  )
}
