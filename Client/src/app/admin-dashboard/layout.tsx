import Footer from '@/components/footer';

export default function AdminDashLayout ({children} : {children: React.ReactNode}) { // TODO: Change the color later 
   return(
    <div>
        <main className="flex flex-col min-h-screen bg-gradient-to-l from-fuchsia-800 via-fuchsia-800 to-purple-900">
            {children}
        </main>
        <Footer color="default" />
    </div>
    );
}