import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function ContactLayout ({children} : {children: React.ReactNode}) {
   return(
    <div className="flex flex-col transition-colors bg-black">
        <Navbar />
        <main className="flex-grow flex flex-col">
            {children}
        </main>
        <Footer color='#232323CC' />
    </div>
    );
}