'use client';
import Images from '../components/images';
// import Landing from '../components/landing';
import images from './images'; 
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';

// TODO: Activites, async server comps, footer adjust size,, text overlay, icons for contact, landing page components.  
// TODO: Adjust snapping later 
// TODO: Hide the nav bar when scrolling down for better visibility with snap, or don't use snap at all. 
export default function Home() {

  const router = useRouter();
  function handleJoin() {
    router.push('/contact');
  }

  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory hide-scrollbar">
  <section
    className="h-screen snap-start bg-black bg-cover bg-center bg-fixed flex items-center justify-center"
    style={{ backgroundImage: "url('/man.jpeg')" }}
  >
    <div className="bg-red-700 flex flex-col justify-center items-center w-full h-full">
      <div className="mx-auto my-14 bg-black text-center">
      <h1 className="text-9xl mb-10">3D Western</h1>
      <p className="text-4xl">Western&apos;s 3D Printing Club</p>
      </div>
      <div className="flex flex-row justify-between my-10 w-1/3 mx-auto ">
        <button onClick={handleJoin} className="group/button flex rounded-lg self-start text-5xl">JOIN US</button>
        <button className="group/button rounded-lg self-end text-5xl hover:text-fuchsia-800 transition-colors duration-300">PRINT NOW</button>
      </div>
    </div>
  </section>

  <section className="h-screen snap-start border-t border-t-4 flex items-center justify-center">
    <h1>Section 1</h1>
  </section>

  <section className="h-screen snap-start bg-blue-200 flex items-center justify-center">
    <h1>Section 2</h1>
  </section>

  <section className="h-screen snap-start flex flex-col items-center justify-center">
  <h1 className="text-5xl">GALLERY</h1>
 < Images images={images}/> 
  </section>

  <section className="h-1/3 snap-start flex items-center justify-center w-full">
    <Footer /> {/** The footer is fucked :) TODO: Add responsive margins */}
  </section>
</div>

  );
  
}