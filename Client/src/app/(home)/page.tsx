'use client';
// import Images from '../components/images';
// import Landing from '../components/landing';
//import images from './images'; 
import Footer from '../components/footer';

// TODO: Activites, async server comps, footer adjust size,, text overlay, icons for contact, landing page components.  
export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory hide-scrollbar">
  {/** TOP SECTION (parallax + snap) */}
  <section
    className="h-screen snap-start bg-black bg-cover bg-center bg-fixed flex items-center justify-center"
    style={{ backgroundImage: "url('/man.jpeg')" }}
  >
    {/* Optional content in center */}
  </section>

  {/** BOTTOM SECTIONS */}
  <section className="h-screen snap-start bg-red-200 flex items-center justify-center">
    <h1>Section 1</h1>
  </section>

  <section className="h-screen snap-start bg-blue-200 flex items-center justify-center">
    <h1>Section 2</h1>
  </section>

  <section className="h-screen snap-start bg-green-200 flex items-center justify-center">
    <h1>Section 3</h1>
  </section>

  <section className="h-1/3 bg-red-700 snap-start flex items-center justify-center w-full">
    <Footer />
  </section>
</div>

  );
  
}