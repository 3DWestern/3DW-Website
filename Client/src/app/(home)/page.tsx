'use client';
import Images from '../components/images';
import { Kantumruy_Pro } from 'next/font/google';
import Footer from '../components/footer';
import Slider from '../components/slider';
import { activities, images } from './data';
import Image from 'next/image';
import { Background, Parallax } from 'react-parallax';
import Link from 'next/link';

// TODO: Adjust snapping 
// load the font here 
const kant_pro = Kantumruy_Pro({
  subsets: ['latin'],
  weight: "400",
}); // TODO: Fill out the fields!! 

export default function Home() {

  return (
    <>
      <Parallax className="flex flex-col justify-center items-center w-full h-screen" strength={500}>
	<Background className="w-screen h-screen"> 
		<Image src='/landing.jpg' alt="3D Western Landing image" layout="fill" objectFit="cover" quality={100}/>
	</Background>
        <div className="flex flex-col justify-center items-center w-full h-screen bg-black/50">
          <div className="mx-auto mt-20 text-center">

            <div className="flex relative flex-col items-center mx-auto mb-5 whitespace-nowrap w-fit">
              <h1 className="absolute top-1 z-0 text-6xl text-purple-500 select-none sm:top-2 sm:left-2 sm:text-7xl md:text-9xl left-[7px]">3D WESTERN</h1>
              <h1 className="absolute top-1 left-1 z-10 text-6xl text-black select-none sm:text-7xl md:text-9xl">3D WESTERN</h1>
              <h1 className="relative z-20 text-6xl text-white sm:text-7xl md:text-9xl">3D WESTERN</h1>
            </div>

            <div className="flex relative flex-col items-center mx-auto mb-5 whitespace-nowrap w-fit">
              {/**<h1 className="absolute top-1 z-0 text-2xl text-purple-600 sm:top-1 sm:left-1 sm:text-3xl md:text-5xl left-[1px]">Western&apos;s 3D Printing Club</h1>*/}
              <h2 className="relative z-20 text-2xl text-white sm:text-3xl md:text-5xl">Western&apos;s 3D Printing Club</h2>
              {/**<h2 className={`relative text-white text-2xl sm:text-3xl md:text-5xl z-20 ${kant_pro.className}`}>Western&apos;s 3D Printing Club</h2> */}
            </div>
          </div>

          <div className="flex flex-row gap-10 justify-center items-center mt-20 w-full max-w-md">
            <a href="https://westernusc.store/club-memberships/"
              className="self-start px-4 text-2xl whitespace-nowrap rounded-full transition-all duration-200 transform sm:text-2xl md:text-4xl 
              border border-2 border-white text-white hover:px-8 hover:text-fuchsia-600 hover:border-4 hover:border-fuchsia-600 hover:scale-110 group/button">
              Join Us
            </a>
            <Link href='/login'
              className="self-end px-4 text-2xl whitespace-nowrap rounded-full transition-all duration-200 transform sm:text-2xl md:text-4xl 
              border border-2 border-white text-white hover:px-8 hover:text-fuchsia-600 hover:border-4 hover:border-fuchsia-600 hover:scale-110 group/button">
              Print Now
            </Link>
          </div>
          <p className={`text-md md:text-lg whitespace-break-spaces mt-20 text-shadow-lg ${kant_pro.className} mx-10 px-10 md:w-[50%] text-center`}>Our mission is to equip Western students with the tools and experience to design, create, and innovate through 3D printing. By fostering hands-on learning and technical growth, we bridge the gap between theory and creation.</p>
        </div>
      </Parallax>

      <section className="flex hidden flex-col justify-around items-center py-10 h-screen border-t-4 border-t">
        <div className="flex relative flex-col items-center mx-auto whitespace-nowrap w-fit">
          <h1 className="absolute top-1 z-0 text-6xl text-purple-500 select-none sm:top-2 sm:left-2 sm:text-7xl md:text-8xl left-[7px]">OUR MISSION</h1>
          <h1 className="absolute top-1 left-1 z-10 text-6xl text-black select-none sm:text-7xl md:text-8xl">OUR MISSION</h1>
          <h1 className="relative z-20 text-6xl text-white sm:text-7xl md:text-8xl">OUR MISSION</h1>
        </div>

        <p className={`text-2xl md:text-3xl whitespace-break-spaces ${kant_pro.className} mx-10 px-10 text-center`}>Our mission is to equip Western students with the tools and experience to design, create, and innovate through 3D printing. By fostering hands-on learning and technical growth, we bridge the gap between theory and creation.</p>
      </section>

      <section className="flex justify-center items-center h-screen border-t-8 border-t border-white border-solid">
        <Slider images={activities} />
      </section>

      <section className="flex relative flex-col justify-center items-center h-screen">

        <div className="flex relative flex-col items-center mx-auto mt-12 whitespace-nowrap w-fit">
          <h1 className="absolute top-1 z-0 text-6xl text-purple-500 select-none sm:top-2 sm:left-2 sm:text-7xl md:text-8xl left-[7px]">OUR PRINTS</h1>
          <h1 className="absolute top-1 left-1 z-10 text-6xl text-black select-none sm:text-7xl md:text-8xl">OUR PRINTS</h1>
          <h1 className="relative z-20 text-6xl text-white sm:text-7xl md:text-8xl">OUR PRINTS</h1>
        </div>

        <Images images={images} />
        {/** See More Button for mobile screens */}
        <div className="flex absolute bottom-10 justify-center mx-auto sm:hidden">
          <Link href='/gallery' className="self-end px-4 text-4xl whitespace-nowrap rounded-xl border-4 border transition-colors duration-300 hover:border-4 hover:border-fuchsia-600 border-white/50">See More</Link>
        </div>

      </section>

      <div className="hidden justify-center mx-auto mt-10 sm:flex">
        <Link href='/gallery' className="self-end px-5 whitespace-nowrap rounded-xl border-4 border transition-colors duration-300 sm:text-5xl md:text-6xl hover:border-4 hover:border-fuchsia-600 border-white/50">See More</Link>
      </div>

      <section className="flex justify-center items-center mt-20 w-full">
        <Footer />
      </section>
    </>

  );

}
