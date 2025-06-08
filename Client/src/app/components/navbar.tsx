import Link from "next/link";

// TODO: Add shrink effect 
export default function Navbar() { // using list items and unordered list for better accessiblity
    return (
        <nav className="sticky top-0 z-50 p-4 w-full bg-black/70">
            <ul className="flex flex-row justify-between sm:px-3 items-center text-white text-lg font-medium sm:font-bold sm:text-2xl gap-x-3 sm:gap-x-1 px-8">
                <li className="text-white font-bold py-2 px-4 rounded transition-transform duration-200 hover:scale-110">
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className="text-white font-bold py-2 px-4 rounded transition-transform duration-200 hover:scale-110">
                    <Link href="/activities">
                        Activities
                    </Link>
                </li>
                <li className="text-white font-bold py-2 px-4 rounded transition-transform duration-200 hover:scale-110">
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li className="text-white font-bold py-2 px-4 rounded transition-transform duration-200 hover:scale-110">
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
                <li className="text-white font-bold py-2 px-4 rounded transition-transform duration-200 hover:scale-110">
                    <Link href="/gallery">
                        Gallery
                    </Link>
                </li>
                <li className="text-white font-bold py-2 px-4 rounded transition-transform duration-200 hover:scale-110">
                    <Link href="/login">
                        Login
                    </Link>
                </li>
            </ul>
    </nav>
  );
}


{/* <nav className="sticky top-0 z-50 p-4 w-full bg-black/70">
            <ul className="flex justify-between sm:px-3 items-center text-white text-lg font-medium sm:font-bold sm:text-2xl gap-x-3 sm:gap-x-1">
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/activities">
                        Activities
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/gallery">
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav> */}