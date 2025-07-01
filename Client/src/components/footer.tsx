import React from 'react';
import Subscribe from './subscribe';
import Icons from './icons';

// Updated footer to take in hex colors in addition to the default black/50
export default function Footer({ color = 'bg-black/50' }: { color?: string }) {

    const isHex = color.startsWith('#'); // default for bg-black, # for specific color 

    return (
        <div style={isHex ? { backgroundColor: color } : { backgroundColor: ' #00000080' }} className="flex flex-col items-center justify-around gap-6 w-full h-full pt-6">
            <div>
                <div className="z-10 font-medium sm:font-bold text-3xl md:text-4xl text-white text-center mb-2 md:mb-4">
                    Subscribe to Our NewsLetter
                </div>
                <div className="text-center flex flex-row items-center justify-center gap-x-1">
                    <Subscribe />
                </div>
            </div>
            <div className="">
                <Icons />
            </div>
            <div className="flex gap-2 text-lg">
                <div className="relative mb-5 flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k">
                    <h1 className="absolute left-[3px] top-[3px] text-purple-500 z-0 select-none">3D WESTERN</h1>
                    <h1 className="absolute left-[2px] top-[2px] text-black z-10 select-none">3D WESTERN</h1>
                    <h1 className="relative text-white z-20">3D WESTERN</h1>
                </div>
                <p>2025</p>
            </div>
        </div>
    );
}
