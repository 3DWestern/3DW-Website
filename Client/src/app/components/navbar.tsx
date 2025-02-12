import Link from "next/link";

export default function Navbar() { // using list items and unordered list for better accessiblity
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 text-white">
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