import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function LoginLayout ({children} : {children: React.ReactNode}) {
   return(
    <div className="flex flex-col bg-gradient-to-l from-fuchsia-800 via-fuchsia-800 to-purple-900 transition-colors">
        <Navbar />
        <main className="flex flex-col flex-grow">
            {children}
        </main>
        <Footer color="default" />
    </div>
    );
}
