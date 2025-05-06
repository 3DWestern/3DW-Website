'use client'; 
import React from 'react';
import Image from 'next/image'; 

// import the images path and pass them through the parent container 
// how to dynamically adjust the grid/ size for each depending on the container elements 

type ImageData = { // duplicated type from gallery/images 
    src: string;
    alt: string; 
    width?: number;
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
export default function Grid({ images } : { images: ImageData[] }) {

    // make an image span 2 columns if it's width > 400? 
    return (
        <div className="grid auto-rows-[8rem] grid-cols-custom gap-4 grid-flow-dense gap-4 w-full max-w-screen-lg mx-auto mt-10 mb-20">
        {images.map((img, i) => (
        <div
          key={i}
          className={`relative w-full h-full overflow-hidden rounded-md ${
            img.width === 400 ? 'col-span-2' : 'col-span-1'
          }`}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
    );
}