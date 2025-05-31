import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function GalleryLayout ({children} : {children: React.ReactNode}) {
   return(
    <div className="flex flex-col min-h-screen transition-colors bg-black">
        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <Footer color="#232323CC" />
    </div>
    );
}