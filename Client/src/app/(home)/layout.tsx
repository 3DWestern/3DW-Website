import Navbar from '../../components/navbar';


export default function HomeLayout ({children} : {children: React.ReactNode}) {

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