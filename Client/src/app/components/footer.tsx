import React from 'react';
import Subscribe from './subscribe';

// TODO: adjust size for the footer; make it bigger
// TODO: md for input and footer
// TODO: 
export default function Footer () {
    return(
        <div className="bg-red-500 flex flex-col items-center justify-center gap-y-1">
            <div className="text-2xl font-medium sm:font-bold sm:text-3xl bg-red-700 my-4">
                <h1>Subscribe to Our NewsLetter</h1>
            </div>
            <div className="bg-black text-center flex flex-row items-center justify-center gap-x-1">
               <Subscribe /> 
            </div>
            <div className="bg-red-70">
                <h1>icons</h1>
            </div>
            <div className="bg-white">
                <h1>signature</h1>
            </div>
        </div>
    );
}