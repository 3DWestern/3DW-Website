import Footer from '../components/footer';

export default function ActivitiesLayout ({children} : {children: React.ReactNode}) {
   return(
    <div>
        <main className="flex flex-col min-h-screen bg-gradient-to-l from-fuchsia-800 via-fuchsia-800 to-purple-900">
            {children}
        </main>
        <Footer />
    </div>
    );
}