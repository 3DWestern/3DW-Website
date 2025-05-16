import Link from "next/link";

// TODO: Add shrink effect 
export default function Navbar() { // using list items and unordered list for better accessiblity
    return (
        <nav className="sticky top-0 z-50 p-4 w-full bg-black/70">
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