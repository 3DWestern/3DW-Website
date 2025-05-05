import Footer from '../components/footer';
import Navbar from "../components/navbar";

export default function ActivitiesLayout ({children} : {children: React.ReactNode}) {
   return(
    <div className="min-h-screen transition-colors bg-gradient-to-l from-fuchsia-800 via-fuchsia-800 to-purple-900">
        <Navbar />
        <main className="flex flex-col">
            {children}
        </main>
        <Footer />
    </div>
    );
}