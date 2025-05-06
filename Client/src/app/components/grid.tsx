'use client'; 
import React from 'react';
import Image from 'next/image'; 

// import the images path and pass them through the parent container 
// how to dynamically adjust the grid/ size for each depending on the container elements 

// layout pattern for each grid; TODO: define fixed image sizes? 
const layoutPattern = [
    { colSpan: 2, rowSpan: 4 }, // 4
    { colSpan: 2, rowSpan: 2 }, // 3
    { colSpan: 1, rowSpan: 2 }, // 2
    { colSpan: 1, rowSpan: 1 }, // 
    { colSpan: 1, rowSpan: 1 }, 
    { colSpan: 1, rowSpan: 1 },
];

function spanClass(col: number, row: number) {
    return `col-span-${col} row-span-${row}`;
}

type ImageData = { // duplicated type from gallery/images 
    src: string;
    alt: string; 
};


export default function Grid({ images } : { images: ImageData[] }) {
    console.log(spanClass(layoutPattern[0].colSpan, layoutPattern[0].rowSpan) === 'col-span-1 row-span-3')

    return (
       <div className="bg-white h-[600px] w-5/6 sm:w-3/4 grid grid-cols-4 auto-rows-fr gap-4 mb-10">
            {images.map((img, i) => {
            const layout = layoutPattern[i % layoutPattern.length];
            return (
            <div
                key={i}
                className={`${spanClass(layout.colSpan, layout.rowSpan)} bg-red-700 relative overflow-hidden rounded-lg`}
            >
          </div>
        );
      })}
    </div> 
    );
}