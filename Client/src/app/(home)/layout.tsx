import Navbar from '../components/navbar';
//import Footer from '../components/footer';
//     <div className="transition-colors bg-gradient-to-l from-fuchsia-800 via-fuchsia-800 to-purple-900">

export default function LoginLayout ({children} : {children: React.ReactNode}) {
   return(
    <div className="flex flex-col transition-colors bg-gradient-to-l from-fuchsia-800 via-fuchsia-800 to-purple-900">
        <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        </div>
        <main>
            {children}
        </main>
    </div>
    );
}