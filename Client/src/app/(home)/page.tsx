import Images from '../components/images';
import Landing from '../components/landing';
import images from './images'; 
import Footer from '../components/footer';
// sections 

// TODO: place footer outside of div, place footer in scrollable and see how it goes 

export default function Home() {
  return (
  <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
  <section className="h-screen snap-start bg-red-200 flex items-center justify-center">
    <h1>Section 1</h1>
  </section>

  <section className="h-screen snap-start bg-blue-200 flex items-center justify-center">
    <h1>Section 2</h1>
  </section>

  <section className="h-screen snap-start bg-green-200 flex items-center justify-center mb-2">
    <h1>Section 3</h1>
  </section>
  
  <div className="h-1/2 snap-start flex items-center justify-center w-full">
  <Footer />
  </div>
</div>
  );
}