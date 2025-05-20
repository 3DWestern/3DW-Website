"use client";
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
//import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

export type Image = {
    src: string;
    alt: string;
};

// TODO: add the image indicator, add more images and adjust! 
// set autoplay to true for shuffling between images automatically 
export default function Images({ images, autoplay = true } : { images: Image[], autoplay?: boolean }) {
    const [active, setActive] = useState(0);
    const [rotateValues, setRotateValues] = useState<number[]>([]);

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % images.length);
    }, [images.length])


    /* const handlePrev = () => { // uncomment this for handling buttons for back and forth.
        setActive((prev) => (prev - 1 + images.length) % images.length);
    } */

    const isActive = (index: number) => {
        return index === active; 
    }


    useEffect(() => {
        const newRotateValues = images.map(() => Math.floor(Math.random() * 21) - 10);
        setRotateValues(newRotateValues);
    }, [images])

    // Auto play images; this is not needed if autoplay is not set to true 
    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, handleNext]);
    

    // TODO: Adjust size of container and image when adding more images, or keep images of the same size! Most troublesome part for this container.
    return (
        <>
        <div className="flex flex-col items-center justify-center relative w-full h-2/3 gap-y-1 sm:mt-6">
                <AnimatePresence>
                {images.map((image, index) => (
                    <button key={index} onClick={handleNext}>
                    <motion.div
                    className="absolute inset-0 origin-bottom w-1/2 sm:w-1/3 h-2/3 mt-20 sm:mt-0 sm:h-full mx-auto flex items-center justify-center"
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: rotateValues[index] || 0,
                    }}
                    animate={{
                        opacity: isActive(index)? 1 : 0.7,
                        scale: isActive(index)? 1 : 0.95,
                        rotate: isActive(index)? 0 : rotateValues[index] || 0,
                        z: isActive(index) ? 0 : -100,
                        zIndex: isActive(index) ? 40 : images.length + 2 - index,
                        y: isActive(index)? [0, -80, 0]: 0, 
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: rotateValues[index] || 0,
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    >
                    <Image src={image.src} alt={image.alt} width={500} height={500} draggable={false} className="absolute inset-0 h-full origin-bottom rounded-xl bg-black w-full"/>
                    </motion.div>
                    </button>
                ))}
                </AnimatePresence>
        </div>
            {/* <div className="flex flex-row justify-items-center w-100 z-10 mt-10 gap-x-1 z-100 bg-red-700 bg-blue-700">
                <button 
                onClick={handlePrev}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 self-start mr-10">
                    <IconArrowLeft className="h-10 w-10 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"/>
                </button>
                
                <button 
                onClick={handleNext}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 self-end">
                    <IconArrowRight className="h-10 w-10 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                </button>
            </div> */}
        </>
    );
}