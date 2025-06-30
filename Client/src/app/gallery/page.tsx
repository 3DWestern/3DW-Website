import React from 'react'; 
import images from '../gallery/images';
import Grid from '.././components/grid';

export default function Gallery () {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative my-10 flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k">
                <h1 className="absolute left-[7px] top-1 sm:left-2 sm:top-2 text-purple-500 text-6xl sm:text-7xl md:text-9xl z-0 select-none">PRINT GALLERY</h1>
                <h1 className="absolute left-1 top-1 text-black text-6xl sm:text-7xl md:text-9xl z-10 select-none">PRINT GALLERY</h1>
                <h1 className="relative text-white text-6xl sm:text-7xl md:text-9xl z-20">PRINT GALLERY</h1>
            </div>
            <Grid images={images}/>
        </div>
    );
}