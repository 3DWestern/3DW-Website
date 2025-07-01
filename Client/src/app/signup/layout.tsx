import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function ContactLayout ({children} : {children: React.ReactNode}) {
   return(
    <div className="flex flex-col transition-colors bg-gradient-to-l from-fuchsia-800 via-fuchsia-800 to-purple-900">
        <Navbar />
        <main className="flex flex-grow flex-col">
            {children}
        </main>
        <Footer color='default' />
    </div>
    );
}