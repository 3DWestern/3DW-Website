'use client'; 
import React from 'react';
 
import Image from 'next/image'; 
import { Rowdies } from 'next/font/google';

// import the images path and pass them through the parent container 
// how to dynamically adjust the grid/ size for each depending on the container elements 

// layout pattern for each grid; TODO: define fixed image sizes? 
const layoutPattern = [
    { colSpan: 2, rowSpan: 2 }, // large square
    { colSpan: 2, rowSpan: 1 }, // small
    { colSpan: 2, rowSpan: 1 }, // tall
    { colSpan: 2, rowSpan: 1 }, // wide
    { colSpan: 2, rowSpan: 1 }, 
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 4 },
];

function spanClass(col: number, row: number) {
    return `col-span-${col} row-span-${row}`;
}

type ImageData = { // duplicated type from gallery/images 
    src: string;
    alt: string; 
};



export default function Grid({ images } : { images: ImageData[] }) {

    return (
            <div className="w-5/6 sm:w-3/4 mx-auto grid grid-cols-4 auto-rows-fr gap-4 my-4">
                {images.map((img, index) => {
                    const layout = layoutPattern[index % layoutPattern.length]; 
                    return(
                        <div key={index} 
                        className={`${spanClass(layout.colSpan, layout.rowSpan)} bg-gray-200 rounded-lg flex items-center justify-center`}>
                        <div className="relative w-full aspect-square">
                        <Image src={img.src} alt={img.alt} 
                        className="rounded-lg"
                        fill />
                        </div>
                    </div>
                    );
                })}
            </div>
    );
}