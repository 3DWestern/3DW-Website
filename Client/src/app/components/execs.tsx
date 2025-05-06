'use client';
import React from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

// the glare doesn't quite work; TODO: add md/sm responsiveness, adjust the grid a bit more and sort out component tree 

type Exec = { // duplicated this to avoid execssive importing down the component tree. 
    name: string;
    title: string;
    src: string;
    alt: string;
    url: string;
    bgColor: string; 
};


export default function Execs ({execs} : {execs: Exec[]}) {
    return (
        <div className="w-2/3 flex flex-wrap flex col justify-center items-center mx-auto my-10">
            {execs.map((data: Exec, index) => (
                <div key={index}>
                   <Tilt 
                   glareEnable={true}
                   glareColor={data.bgColor}
                   scale={1.5}
                   transitionSpeed={600}
                   tiltMaxAngleX={25}
                   tiltMaxAngleY={25}
                   className="flex-shrink-0 m-10 rounded-xl max-w-xs">
                   <a className="flex flex-col items-center justify-center z-50" href={"https://" + data.url}>
                    <Image 
                        width={180}
                        height={320}
                        alt={data.alt} 
                        src={data.src}
                        className="h-28 w-28 object-cover my-2 rounded-xl text-white"
                        />
                        <div className="text-center text-white my-3 p-1">
                            <h1 className="block font-semibold text-2xl">{data.name}</h1>
                            <h2 className="text-lg px-3 pt-1 text-center mt-1 leading-tight">{data.title}</h2>
                        </div> 
                   </a>
                   </Tilt>
                </div>
            ))} 
        </div>
    );
}