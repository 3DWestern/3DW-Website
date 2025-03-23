import React from 'react';
import Image from 'next/image'; 

// TODO: Edit this 
export default function ComingSoon() {
    return (
        <div className="mx-auto my-auto flex flex-row items-center justify-center h-[12rem] md:h-[14rem]">
            <div className="z-[-100] rotate-45">
                <Image 
                src="/amongus.png" 
                alt="Amongus" 
                width={50}
                height={50}/>
            </div>
            <div className=" bg-white/50 p-4 rounded-2xl"> {/* header */}
                <h1 className="text-2xl">Coming Soon!</h1>
            </div>
        </div>
    );
}