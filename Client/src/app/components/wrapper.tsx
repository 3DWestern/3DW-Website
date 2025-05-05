'use client';
import { usePathname } from "next/navigation";

export default function Wrapper({ children } : { children: React.ReactNode }) {
    const pathName = usePathname();
    const isContactPage = pathName === '/contact';

    return (
        <div className={`min-h-screen transition-colors ${isContactPage? 'bg-black' : 'bg-gradient-to-l from-fuchsia-800 via-fuchsia-800 to-purple-900'}`}>
            {children}
        </div>
    );
}