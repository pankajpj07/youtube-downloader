import Link from "next/link"
import { logoPath } from "../constants/constants"

export default function Header() {
    return (
        <nav>
            <Link href="/">
            <div className="font-bold py-4 md:py-6 md:px-5 px-2.5 bg-gray-200 text-xl md:text-2xl ">
                <span className="flex items-center"><img className="w-8" src={logoPath} alt="utubeloader logo" /><span className="text-red-900 ml-3">U</span>TubeLoader</span></div>
            </Link>
            
        </nav>
    )
}