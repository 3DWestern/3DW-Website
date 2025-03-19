import React from 'react';

interface IconProps {
    link: string;
    src: string;
    alt: string;
}

// NOTE: Ignore the Image suggestion, since the image is svg.
//TODO: adjust image size and add responsiveness for images 
export default function Icon({ link, src, alt }: IconProps) {
    return (
        <>
            <a href={link}><img src={src} alt={alt} className="w-5 h-5" /></a>
        </>
    )
}