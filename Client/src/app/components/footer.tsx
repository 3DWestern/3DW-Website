import React from 'react';
import FooterButton from './footer-button';

// TODO: responsiveness font + flex shrinkable footer icons and input  
export default function Footer () {
    return(
        <div className="bg-black/70 opacity-80 text-white gap-y-1">
            <div className="flex items-center justify-center bg-red-700">
                <h1>SUBSCRIBE</h1>
            </div>
            <div className="bg-blue-50">
                <h1>Input</h1>
                <FooterButton /> 
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