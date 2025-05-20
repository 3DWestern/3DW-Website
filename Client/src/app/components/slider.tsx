"use client";
import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from 'next/image';

export type Activity = {
  src: string;
  alt: string;
  header: string;
  desc: string;
};
// TODO: Map each string to render along with each page as well, adjust position, responsiveness and styling. Add the dots back.
export default function Carousel({ images }: { images: Activity[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollTo = (idx: number) => {
    itemRefs.current[idx]?.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory w-full h-full hide-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((img, idx) => (
          <div
            key={img.src}
            ref={el => (itemRefs.current[idx] = el)}
            className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center relative"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-xl"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-2xl z-10">{img.header}</h2>
          </div>
        ))}
      </div>
      {/* Controls */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <button onClick={() => {
          const active = itemRefs.current.findIndex(
            el => el && Math.abs(el.getBoundingClientRect().left - containerRef.current!.getBoundingClientRect().left) < 10
          );
          if (active > 0) scrollTo(active - 1);
        }}>
          <ArrowLeft className="w-10 h-10 text-white" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <button onClick={() => {
          const active = itemRefs.current.findIndex(
            el => el && Math.abs(el.getBoundingClientRect().left - containerRef.current!.getBoundingClientRect().left) < 10
          );
          if (active < images.length - 1) scrollTo(active + 1);
        }}>
          <ArrowRight className="w-10 h-10 text-white" />
        </button>
      </div>
    </div>
  );
}