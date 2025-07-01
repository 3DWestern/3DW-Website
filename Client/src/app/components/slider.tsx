"use client";
import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from 'next/image';

export type Activity = {
  src: string;
  alt: string;
  header: string;
  desc: string;
  link: string; 
};
export default function Carousel({ images }: { images: Activity[] }) {
  const containerRef = useRef<HTMLDivElement|null>(null);
  const itemRefs = useRef<(HTMLDivElement|null)[]>([]);

  const scrollTo = (idx: number) => {
    itemRefs.current[idx]?.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-fit h-fit mt-10 mx-auto z-10">
        <div className="relative mb-5 flex flex-col items-center w-fit mx-auto whitespace-nowrap mt-10">
          <h1 className="absolute left-[7px] top-1 sm:left-2 sm:top-2 text-purple-500 text-6xl sm:text-7xl md:text-8xl z-0">HIGHLIGHTS</h1>
          <h1 className="absolute left-1 top-1 text-black text-6xl sm:text-7xl md:text-8xl z-10">HIGHLIGHTS</h1>
          <h1 className="relative text-white text-6xl sm:text-7xl md:text-8xl z-20">HIGHLIGHTS</h1>
        </div>

      </div>
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory w-full h-full hide-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((img, idx) => (
          <div
            key={img.src}
            ref={el => { itemRefs.current[idx] = el; }}
            className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center relative"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover select-none"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />

            <div className="absolute top-[20rem] sm:left-20 z-10 flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl sm:text-7xl">{img.header}</h1>
            <div className="items-start">
            <a href={img.link} target="_blank" rel="noopener noreferrer" className="bg-white/50 rounded-lg text-3xl p-2 sm:text-5xl mt-20 sm:p-4 relative flex flex-col items-center justify-center overflow-hidden">
              <span className="absolute left-[6px] top-[11px] sm:left-[11px] sm:top-[21px] text-fuchsia-500 opacity-60 blur-sm z-10 select-none pointer-events-none">
                  LEARN MORE
                </span>
                <span className="absolute left-[5px] top-[10px] sm:left-[20px] sm:top-[20px] text-black opacity-70 z-0 select-none pointer-events-none">
                  LEARN MORE
                </span>
                <span className="relative text-white z-20 font-bold drop-shadow-lg">
                  LEARN MORE
                </span>
              </a>
            </div>
            </div>
          </div>
        ))}
      </div>
      
         {/** Desktop buttons; TODO: check md, add hover*/}
          <div className="hidden md:flex absolute left-3/4 top-3/4 -translate-x-3 -translate-y-1/2 gap-0 z-10 z-20">
            <button
              onClick={() => {
          const active = itemRefs.current.findIndex(
            el => el && Math.abs(el.getBoundingClientRect().left - containerRef.current!.getBoundingClientRect().left) < 10
          );
          if (active > 0) scrollTo(active - 1);
        }}
              className="bg-white/20 hover:bg-white/40 px-3 py-1 w-[6rem] h-[6rem] flex items-center justify-center"
              >
            <ArrowLeft className="w-5/6 h-5/6 cursor-pointer"/>
            </button>
            <button
              onClick={() => {
                const active = itemRefs.current.findIndex(
                  el => el && Math.abs(el.getBoundingClientRect().left - containerRef.current!.getBoundingClientRect().left) < 10
                );
                if (active < images.length - 1) scrollTo(active + 1);
              }}
              className="bg-white/20 hover:bg-white/40 px-3 py-1 w-[6rem] h-[6rem] flex items-center justify-center"
              >
              <ArrowRight className="w-5/6 h-5/6 cursor-pointer"/>
            </button>
          </div>

          {/** sm/medium screen buttons; TODO: Adjust size! */}
          <button onClick={() => {
          const active = itemRefs.current.findIndex(
            el => el && Math.abs(el.getBoundingClientRect().left - containerRef.current!.getBoundingClientRect().left) < 10
          );
          if (active > 0) scrollTo(active - 1);
        }}
          className="absolute hover:bg-white/40 left-2 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-1 w-[5rem] h-[5rem] flex items-center justify-center md:hidden z-20">
            <ArrowLeft className="w-5/6 h-5/6 cursor-pointer" />
          </button>

          <button onClick={() => {
          const active = itemRefs.current.findIndex(
            el => el && Math.abs(el.getBoundingClientRect().left - containerRef.current!.getBoundingClientRect().left) < 10
          );
          if (active < images.length - 1) scrollTo(active + 1);
        }}
          className="absolute hover:bg-white/40 right-2 top-1/2 -translate-y-1/2 bg-white/20 px-3 py-1 w-[5rem] h-[5rem] flex items-center justify-center md:hidden z-20">
            <ArrowRight className="w-5/6 h-5/6 cursor-pointer" />
          </button>

          {/** Buttons at the bottom */}
          {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-3 h-3  sm:w-5 sm:h-5 rounded-full ${idx === active ? "bg-fuchsia-600" : "bg-gray-300"}`}
              />
            ))}
          </div>  TODO: Figure out how to get the current active image.*/}
    </div>
  );
}