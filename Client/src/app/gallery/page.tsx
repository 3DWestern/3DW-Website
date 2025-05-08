import React from 'react'; 
import images from '../gallery/images';
import Grid from '.././components/grid';

export default function Gallery () {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="my-10 text-5xl sm:text-7xl text-white">PRINT GALLERY</h1>
            <Grid images={images}/>
        </div>
    );
}