import React from 'react';
import Subscribe from './subscribe';
import Icons from './icons';

// Updated footer to take in hex colors in addition to the default black/50
export default function Footer ({ color='bg-black/50' } : { color?: string }) {

    const isHex = color.startsWith('#'); // default for bg-black, # for specific color 

    return(
        <div style={isHex ? { backgroundColor: color } : { backgroundColor: ' #00000080' }} className="flex flex-col items-center justify-center gap-y-1">
            <div className="z-10 text-2xl font-medium sm:font-bold sm:text-3xl my-4 text-white">
                <h1>Subscribe to Our NewsLetter</h1>
            </div>
            <div className="text-center flex flex-row items-center justify-center gap-x-1 my-4">
               <Subscribe /> 
            </div>
            <div className="my-4">
                <Icons />
            </div>
            <div className="mt-2">
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#ffffff'}}>3D Western 2025</p> 
            </div>
        </div>
    );
}
