'use client'; 
import React from 'react';
import Image from 'next/image'; 

// import the images path and pass them through the parent container 
// how to dynamically adjust the grid/ size for each depending on the container elements 

// layout pattern for each grid; TODO: define fixed image sizes? 
const layoutPattern = [
    { colSpan: 1, rowSpan: 4 }, // large square
    { colSpan: 2, rowSpan: 1 }, // small
    { colSpan: 1, rowSpan: 1 }, // tall
    { colSpan: 2, rowSpan: 1 }, // wide
    { colSpan: 2, rowSpan: 1 }, 
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
];

function spanClass(col: number, row: number) {
    if (row === 0) {
        return `col-span-${col}`;
    } else if (col === 0) {
        return `row-span-${row}`;
    }
    return `col-span-${col} row-span-${row}`;
}

type ImageData = { // duplicated type from gallery/images 
    src: string;
    alt: string; 
};


// bg-white w-5/6 sm:w-3/4
        {/* <div className="bg-white h-[600px] w-5/6 sm:w-3/4 grid grid-cols-4 auto-rows-fr gap-4">
            <div className="col-span-2 row-span-4 bg-blue-500 rounded-lg">
                    Tall box 
                </div>
                <div className="col-span-2 row-span-2 bg-green-500 rounded-lg">Small box</div>
                <div className="col-span-1 bg-red-500 rounded-lg">Small box 2</div>
        </div> */}

export default function Grid({ images } : { images: ImageData[] }) {
    console.log(spanClass(layoutPattern[0].colSpan, layoutPattern[0].rowSpan) === 'col-span-1 row-span-4')

    return (
       <div className="bg-white h-[600px] w-5/6 sm:w-3/4 grid grid-cols-4 auto-rows-[100px] gap-4">
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