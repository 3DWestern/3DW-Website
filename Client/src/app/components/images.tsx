"use client";
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

type Image = {
    src: string;
    alt: string;
};

// set autoplay to true for shuffling between images automatically 
export default function Images({ images, autoplay = true } : { images: Image[], autoplay?: boolean }) {
    const [active, setActive] = useState(0);
    const [rotateValues, setRotateValues] = useState<number[]>([]);

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % images.length);
    }, [images.length])


    const handlePrev = () => {
        setActive((prev) => (prev - 1 + images.length) % images.length);
    }

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
    

    // TODO: Adjust size of element for responsiveness 
    return (
        <>
        <div className="flex flex-col items-center justify-center relative w-full h-2/3 gap-y-1 mt-10">
                <AnimatePresence>
                {images.map((image, index) => (
                    <motion.div
                    key={image.src}
                    className="absolute inset-0 origin-bottom w-1/2 h-full mx-auto flex items-center justify-center"
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
                    <Image src={image.src} alt={image.alt} width={500} height={500} draggable={false} className="absolute inset-0 h-full origin-bottom rounded-lg bg-black w-full"/>
                    </motion.div>
                ))}
                </AnimatePresence>
        </div>
            <div className="flex flex-row justify-items-center w-100 z-10 mt-10 gap-x-1 z-100 bg-red-700 bg-blue-700">
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
            </div>
        </>
    );
}