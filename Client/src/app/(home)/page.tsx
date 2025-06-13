'use client';
import Images from '../components/images';
import { Kantumruy_Pro } from 'next/font/google';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';
import Slider from '../components/slider';
import { activities, images } from './data';

// TODO: Adjust snapping 
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

  // TODO: Test responsiveness; gallery on lg screens a bit squished. 
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory hide-scrollbar">
  <section
    className="w-full h-screen snap-start bg-cover bg-center bg-fixed flex items-center justify-center"
    style={{ backgroundImage: "url('/landing.jpg')" }}
  >
    <div className="flex flex-col justify-center items-center w-full h-full bg-black/50">
      <div className="mx-auto mt-20 text-center bg-blue-00">

      <div className="relative mb-5 flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k">
        <h1 className="absolute left-[7px] top-1 sm:left-2 sm:top-2 text-purple-500 text-6xl sm:text-7xl md:text-9xl z-0">3D WESTERN</h1>
        <h1 className="absolute left-1 top-1 text-black text-6xl sm:text-7xl md:text-9xl z-10">3D WESTERN</h1>
        <h1 className="relative text-white text-6xl sm:text-7xl md:text-9xl z-20">3D WESTERN</h1>

      </div>
      
      <p className="text-2xl sm:text-3xl md:text-5xl">Western&apos;s 3D Printing Club</p>
      </div>
      
      <div className="flex flex-row justify-center items-center mt-20 w-full max-w-md bg-red-700">
        <a href="https://westernusc.store/club-memberships/"
        className="group/button rounded-full self-start text-3xl whitespace-nowrap sm:text-4xl md:text-6xl 
        hover:bg-gradient-to-l hover:text-fuchsia-600 hover:border-fuchsia-600 
        hover:border-4 transition-colors px-4 duration-700 mr-5 sm:mr-10">
          JOIN US
        </a> 
        <button onClick={login} 
        className="group/button rounded-full self-end text-3xl whitespace-nowrap sm:text-4xl md:text-6xl 
        hover:bg-fuchsia-600 hover:text-white  
        px-4 duration-700">
          PRINT NOW
        </button>
      </div>
    </div>
  </section>

  <section className="h-screen snap-start border-t border-t-4 flex flex-col items-center justify-start">
    <h1 className="text-8xl mt-20">OUR MISSION</h1>
    <p className={`text-3xl mt-20 whitespace-break-spaces ${kant_pro.className} mx-2 px-2 text-center`}>Insert Mission statement here. This might be a bit boring, so we can redesign this for sure.</p>
  </section>

  <section className="h-screen snap-start bg-blue-200 flex items-center justify-center">
    <Slider images={activities} />
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