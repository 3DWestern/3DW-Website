import Footer from '../components/footer';

export default function ContactLayout ({children} : {children: React.ReactNode}) {
   return(
    <div>
        <main className="flex flex-col bg-black">
            {children}
        </main>
        <Footer color='#232323CC' />
    </div>
    );
}