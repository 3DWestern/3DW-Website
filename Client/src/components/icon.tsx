import React from 'react';

interface IconProps {
    link: string;
    src: string;
    alt: string;
}

// NOTE: Ignore the Image optimization suggestion, since the image is svg.
//TODO: adjust image size and add responsiveness for images 
export default function Icon({ link, src, alt }: IconProps) {
    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer"><img src={src} alt={alt} className="w-9 h-9 select-none" /></a>
        </>
    )
}