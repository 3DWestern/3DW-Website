import React from 'react';
// import ImageElem from 'imageelem';


type Exec = {
    name: string;
    title: string;
    src: string;
    alt: string;
}

// take in the execs as a list and map them to render on the flex box 
// TODO: move images, apply map()
export default function Execs ({ execs } : { execs:Exec[] }) {
    return (
        <div className="w-2/3 flex flex-wrap flex col justify-between items-center mx-auto my-auto">
            
            <div className="bg-black">Hello</div>
            <div className="bg-white">Hi</div>
            <div className="bg-black">Goodbye</div>
            <div className="bg-white">Bye</div>

            <div className="bg-red-700">Hello</div>
            <div className="bg-white">Hi</div>
            <div className="bg-black">Goodbye</div>
            <div className="bg-white">Bye</div>
        </div>
    );
}