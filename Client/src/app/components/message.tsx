import Image from 'next/image'; 
import ShineBorder from './shineborder';

// A temporary message component for incoming changes. NOTE: Ignore the img optimization suggestion, since Image does not work on gifs.
export default function Message ({ message, header } : { message: string, header: string }) {
    return (
        <div className="relative overflow-hidden mx-auto my-10 bg-white rounded-lg w-1/2 h-[25rem] md:h-[20rem]">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <Image 
            src="/amongus.png" 
            alt="Amongus" 
            width={50}
            height={80}
            className="z-[100] rotate-45" />
        <div className="text-black text-center mx-auto my-auto flex flex-col justify-center items-center">
            <div className="my-2">
            <h1 className="text-2xl md:text-3xl">{header}
            <img src="/3d-printer-intensifies.gif" alt="3D printer gif" className="inline-block h-5 w-5 md:h-8 md:w-8 ml-2"/>
            </h1>
            </div>
            <div className="mx-auto p-3">
            <p className="text-sm md:text-lg sm:text-md">{message}</p>
            </div>
        </div>
        </div>
    );
}