import React from 'react'; 
import Grid from '.././components/grid';


export default function Gallery () {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-7xl">
                <h1>PRINT GALLERY</h1>
            </div>
            <Grid />
        </div>
    );
}