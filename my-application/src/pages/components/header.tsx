import Link from "next/link"

export default function Header() {
    return (
        <nav>
            <Link href="/">
            <div className="font-bold py-4 md:py-6 md:px-5 px-2.5 bg-gray-200 text-xl md:text-2xl ">
                <span className="text-red-900">U</span>TubeLoader</div>
            </Link>
            
        </nav>
    )
}