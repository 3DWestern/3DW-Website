"use client";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from 'next/image';

// this is a static carousel. 
export type Activity = {
    src: string;
    alt: string; 
    header: string;
    desc: string;
}

// TODO: add animation, interactivity 
export default function Carousel({ images } : { images: Activity[] }) {

    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current - 1 + images.length) % images.length);
    const next = () => setCurrent((current + 1) % images.length);

    return (
      <div className="flex flex-col items-center w-full h-screen">
        <div className="relative w-80 h-64 w-full h-full">
          <h1 className="text-8xl absolute inset-0 m-auto w-fit mt-10 z-10 text-center">Highlights</h1>
        
          {/** description section */}
          <div className="absolute inset-0 flex sm:items-center sm:justify-start justify-center items-center mt-60 sm:mt-0 z-10 p-8">
            <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl sm:text-7xl px-4">{images[current].header}</h1>
            <p>{images[current].desc}</p>
            <a className="items-center justify-center bg-black rounded-md px-4 py-2 text-3xl mt-10" href="https://google.com">Learn More</a>
            </div>
          </div>

          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            />
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div> {/** background overlay */}

          {/** Desktop buttons; TODO: adjust placement */}
          <div className="hidden md:flex absolute left-3/4 top-2/3 -translate-x-3 -translate-y-1/2 gap-0 z-10 bg-red-700 z-10">
            <button
              onClick={prev}
              className="bg-white/20 px-3 py-1 w-[6rem] h-[6rem] flex items-center justify-center"
              >
            <ArrowLeft className="w-5/6 h-5/6 cursor-pointer"/>
            </button>
            <button
              onClick={next}
              className="bg-white/20 px-3 py-1 w-[6rem] h-[6rem] flex items-center justify-center"
              >
              <ArrowRight className="w-5/6 h-5/6 cursor-pointer"/>
            </button>
          </div>

          {/** sm/medium screen buttons; TODO: Adjust size! */}
          <button onClick={prev} 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-1 w-[5rem] h-[5rem] flex items-center justify-center md:hidden z-10">
            <ArrowLeft className="w-5/6 h-5/6 cursor-pointer" />
          </button>
          <button onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-1 w-[5rem] h-[5rem] flex items-center justify-center md:hidden z-10">
            <ArrowRight className="w-5/6 h-5/6 cursor-pointer" />
          </button>

          {/** Buttons at the bottom */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3  sm:w-5 sm:h-5 rounded-full ${current === idx ? "bg-fuchsia-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
      </div>
    </div>
    );


}