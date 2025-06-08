'use client';
import React from 'react';
import Image from 'next/image';

// import the images path and pass them through the parent container 
// how to dynamically adjust the grid/ size for each depending on the container elements 

type ImageData = { // duplicated type from gallery/images 
  src: string;
  alt: string;
  width?: number;
  height?: number;
};


{/* <div className="bg-white h-[600px] w-5/6 sm:w-3/4 grid grid-flow-dense grid-cols-custom gap-[1rem] mb-10">
            {images.map((img, i) => { // map each image to the bento grid 
            return (
                <div key={i} className="relative h-full object-cover">
                <Image src={img.src} alt={img.alt} fill className="w-full h-auto block"/>
                </div>
        );
      })}
    </div>  */}
export default function Grid({ images }: { images: ImageData[] }) {

  // make an image span 2 columns if it's width > 400? 
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[16em] gap-5 w-full max-w-screen-lg mb-20">
      {images.map((img, i) => (
        <div
          key={i}
          className={`relative w-full h-full overflow-hidden rounded-md ${img.width && img.width >= 400 ? 'col-span-2' : 'col-span-1'
            } ${img.height && img.height >= 400 ? 'row-span-2' : 'row-span-1'} transition-transform duration-300 ease-in-out hover:scale-[104%]
            active:brightness-90`}
          onClick={(e) => {
            const el = e.currentTarget;

            const isExpanded = el.classList.contains('fixed');

            if (isExpanded) {
              // Restore original size
              el.classList.remove(
                'fixed', 'top-1/2', 'left-1/2', 'max-w-[50%]', 'max-h-[92.5%]',
                'transform', '-translate-x-1/2', '-translate-y-1/2', 'z-50'
              );
              el.classList.add('relative'); // or whatever original class you want
            } else {
              // Expand image
              el.classList.add(
                'fixed', 'top-1/2', 'left-1/2', 'max-w-[50%]', 'max-h-[92.5%]',
                'transform', '-translate-x-1/2', '-translate-y-1/2', 'z-50'
              );
              el.classList.remove('relative'); // optional if it's set
            }
          }}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}