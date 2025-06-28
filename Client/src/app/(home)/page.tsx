'use client';
import Images from '../components/images';
import { Kantumruy_Pro } from 'next/font/google';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';
import Slider from '../components/slider';
import { activities, images } from './data';
import Image from 'next/image';

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
    <>
      <section
        className="w-full h-screen bg-cover bg-fixed flex items-center justify-center"
        style={{ backgroundImage: "url('/landing.jpg')" }}
      >
        <div className="flex flex-col justify-center items-center w-full h-full bg-black/50">
          <div className="mx-auto mt-20 text-center bg-blue-00">

            {/** TODO: Adjust mobile size on this screen ! */}
            <div className="relative mb-5 flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k">
              <h1 className="absolute left-[7px] top-1 sm:left-2 sm:top-2 text-purple-500 text-6xl sm:text-7xl md:text-9xl z-0 select-none">3D WESTERN</h1>
              <h1 className="absolute left-1 top-1 text-black text-6xl sm:text-7xl md:text-9xl z-10 select-none">3D WESTERN</h1>
              <h1 className="relative text-white text-6xl sm:text-7xl md:text-9xl z-20">3D WESTERN</h1>
            </div>

            <div className="relative mb-5 flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k">
              {/**<h1 className="absolute left-[1px] top-1 sm:left-1 sm:top-1 text-purple-600 text-2xl sm:text-3xl md:text-5xl z-0">Western&apos;s 3D Printing Club</h1>*/}
              <h2 className="relative text-white text-2xl sm:text-3xl md:text-5xl z-20">Western&apos;s 3D Printing Club</h2>
              {/**<h2 className={`relative text-white text-2xl sm:text-3xl md:text-5xl z-20 ${kant_pro.className}`}>Western&apos;s 3D Printing Club</h2> */}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mt-20 w-full max-w-md gap-10">
            <a href="https://westernusc.store/club-memberships/"
              className="group/button rounded-full self-start text-2xl whitespace-nowrap sm:text-2xl md:text-4xl 
        hover:text-fuchsia-600 px-4 transition-all duration-200 transform hover:scale-110 hover:px-8">
              Join Us
            </a>
            <button onClick={login}
              className="group/button rounded-full self-end text-2xl whitespace-nowrap sm:text-2xl md:text-4xl 
        hover:text-fuchsia-600  
        px-4 transition-all duration-200 transform hover:scale-110 hover:px-8">
              Print Now
            </button>
          </div>
          <p className={`text-md md:text-lg whitespace-break-spaces mt-20 text-shadow-lg ${kant_pro.className} mx-10 px-10 md:w-[50%] text-center`}>Our mission is to equip Western students with the tools and experience to design, create, and innovate through 3D printing. By fostering hands-on learning and technical growth, we bridge the gap between theory and creation.</p>
        </div>
      </section>

      <section className="h-screen snap-start border-t border-t-4 flex flex-col items-center justify-around h-full py-10 hidden">
        <div className="relative flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k">
          <h1 className="absolute left-[7px] top-1 sm:left-2 sm:top-2 text-purple-500 text-6xl sm:text-7xl md:text-8xl z-0 select-none">OUR MISSION</h1>
          <h1 className="absolute left-1 top-1 text-black text-6xl sm:text-7xl md:text-8xl z-10 select-none">OUR MISSION</h1>
          <h1 className="relative text-white text-6xl sm:text-7xl md:text-8xl z-20">OUR MISSION</h1>
        </div>

        <p className={`text-2xl md:text-3xl whitespace-break-spaces ${kant_pro.className} mx-10 px-10 text-center`}>Our mission is to equip Western students with the tools and experience to design, create, and innovate through 3D printing. By fostering hands-on learning and technical growth, we bridge the gap between theory and creation.</p>
      </section>

      <section className="h-screen snap-start flex items-center justify-center">
        <Slider images={activities} />
      </section>

      {/** TODO: REFORMAT FLEX; Adjust margins/responsiveness if adding scroll hook for nav bar hiding */}
      <section className="relative h-screen snap-start flex flex-col items-center justify-center">


        <div className="relative flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k mt-12">
          <h1 className="absolute left-[7px] top-1 sm:left-2 sm:top-2 text-purple-500 text-6xl sm:text-7xl md:text-8xl z-0 select-none">OUR PRINTS</h1>
          <h1 className="absolute left-1 top-1 text-black text-6xl sm:text-7xl md:text-8xl z-10 select-none">OUR PRINTS</h1>
          <h1 className="relative text-white text-6xl sm:text-7xl md:text-8xl z-20">OUR PRINTS</h1>
        </div>

        <Images images={images} />
        {/** See More Button for mobile screens */}
        <div className="absolute bottom-10 flex sm:hidden justify-center mx-auto">
          <button onClick={gallery} className="rounded-xl border border-white/50 border-4 self-end text-4xl whitespace-nowrap
      hover:border-fuchsia-600 hover:border-4 px-4 transition-colors duration-300">See More</button>
        </div>

      </section>

      <div className="hidden mt-10 sm:flex justify-center mx-auto">
        <button onClick={gallery} className="rounded-xl border border-white/50 border-4 self-end sm:text-5xl md:text-6xl whitespace-nowrap 
        hover:border-fuchsia-600 
        hover:border-4 transition-colors px-5 duration-300">See More</button>
      </div>

      <section className="snap-start flex items-center justify-center w-full mt-20">
        <Footer />
      </section>
    </>

  );

}