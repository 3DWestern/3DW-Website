'use client';
import Images from '../components/images';
import { Kantumruy_Pro } from 'next/font/google';
import images from './images'; 
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';

// TODO: Activites, async server comps, footer adjust size,, text overlay, icons for contact, landing page components.  
// TODO: Adjust snapping 
// TODO: Hide the nav bar when scrolling down for better visibility with snap, or don't use snap at all. 
// <div className="w-52 h-14 justify-start text-fuchsia-600 text-5xl font-normal font-['Jersey_25']">PRINT NOW</div>
// <div className="w-64 h-24 bg-gradient-to-l from-white to-zinc-300/60 rounded-[60px]" />

// load the font here 
const kant_pro = Kantumruy_Pro({
  subsets: ['latin'],
  weight: "400",
}); // TODO: Fill out the fields!! 

export default function Home() {

  const router = useRouter();

  function gallery() {
    router.push('/gallery'); 
  }
  
  function login() { // route to login 
    router.push('/login');
  }

  // TODO: Test responsiveness 
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory hide-scrollbar">
  <section
    className="h-screen snap-start bg-cover bg-center bg-fixed flex items-center justify-center"
    style={{ backgroundImage: "url('/man.jpeg')" }}
  >
    <div className="flex flex-col justify-center items-center w-full h-full bg-black/50">
      <div className="mx-auto my-14 text-center">
      <h1 className="text-7xl md:text-8xl sm:text-9xl mb-5 whitespace-nowrap">3D Western</h1>
      <p className="text-4xl">Western&apos;s 3D Printing Club</p>
      </div>
      <div className="flex flex-row justify-center items-center my-10 w-full max-w-md">
        <a href="https://westernusc.store/club-memberships/"
        className="group/button rounded-full border border-white/50 border-4 self-start text-3xl whitespace-nowrap sm:text-4xl md:text-6xl 
        hover:bg-gradient-to-l hover:from-white hover:to-zinc-300/60 hover:text-fuchsia-600 hover:border hover:border-fuchsia-600 
        hover:border-4 transition-colors px-4 duration-700 mr-5 sm:mr-10">
          JOIN US
        </a> 
        <button onClick={login} 
        className="group/button rounded-full border border-white/50 border-4 self-end text-3xl whitespace-nowrap sm:text-4xl md:text-6xl 
        hover:bg-gradient-to-l hover:from-white hover:to-zinc-300/60 hover:text-fuchsia-600 hover:border hover:border-fuchsia-600 
        hover:border-4 transition-colors px-4 duration-700">
          PRINT NOW
        </button>
      </div>
    </div>
  </section>

  <section className="h-screen snap-start border-t border-t-4 flex flex-col items-center justify-start">
    <h1 className="text-7xl mt-20">OUR MISSION</h1>
    <p className={`text-3xl mt-20 whitespace-break-spaces ${kant_pro.className} mx-2 px-2 text-center`}>Insert Mission statement here. This might be a bit boring, so we can redesign this for sure.</p>
  </section>

  <section className="h-screen snap-start bg-blue-200 flex items-center justify-center">
    <h1 className="text-black">Carousel Coming Soon! </h1>
  </section>

  {/** TODO: REFORMAT FLEX; Adjust margins/responsiveness if adding scroll hook for nav bar hiding */}
  <section className="h-screen snap-start flex flex-col items-center justify-center">
  <h1 className="text-6xl sm:text-7xl md:text-8xl mt-12">GALLERY</h1>
  <Images images={images}/> 
  <div className="sm:mt-10">
    <button onClick={gallery} className="rounded-full border border-white/50 border-4 self-end text-4xl whitespace-nowrap sm:text-5xl 
        hover:bg-white hover:text-fuchsia-600 hover:border hover:border-fuchsia-600 
        hover:border-4 transition-colors px-4 duration-300">See More</button>
  </div>
  </section>

  <section className="h-1/3 snap-start flex items-center justify-center w-full mt-10">
    <Footer /> {/** The footer is fucked :) TODO: Add responsive margins */}
  </section>
</div>

  );
  
}