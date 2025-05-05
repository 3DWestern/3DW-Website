import Footer from '../components/footer';
import Wrapper from '../components/wrapper';

export default function AboutLayout ({children} : {children: React.ReactNode}) {
   return(
    <div className="flex flex-col h-min-screen">
        <Wrapper>
            <main className="flex-grow">
            {children}
        </main>
        <Footer color='default' />
        </Wrapper>
    </div>
    );
}