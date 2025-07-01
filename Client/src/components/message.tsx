import Image from 'next/image'; 
import ShineBorder from './shineborder';

// A temporary message component for incoming changes. NOTE: Ignore the img optimization suggestion, since Image does not work on gifs.
export default function Message ({ message, header } : { message: string, header: string }) {
    return (
        <div className="overflow-hidden relative my-10 mx-auto md:w-1/2 bg-white rounded-lg h-[25rem] md:h-[20rem]">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <Image 
            src="/amongus.png" 
            alt="Amongus" 
            width={50}
            height={80}
            className="rotate-45 z-[100]" />
        <div className="flex flex-col justify-center items-center my-auto mx-auto text-center text-black">
            <div className="my-2">
            <h1 className="px-2 text-2xl sm:text-3xl md:text-5xl">{header}
            <img src="/3d-printer-intensifies.gif" alt="3D printer gif" className="inline-block ml-2 w-5 h-5 md:w-8 md:h-8"/>
            </h1>
            </div>
            <div className="p-3 mx-auto">
            <p className="sm:text-lg md:text-xl text-md">{message}</p>
            </div>
        </div>
        </div>
    );
}
