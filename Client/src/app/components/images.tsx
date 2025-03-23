"use client";
import { useState, useEffect } from 'react';
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

    const handleNext = () => {
        setActive((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + images.length) % images.length);
    }

    const isActive = (index: number) => {
        return index === active; 
    }

    // this is not needed if autoplay is not set to true 
    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    });

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10; 
    }; 

    return (
        <div className="flex flex-col items-center justify-center relative w-100 gap-y-1">
            <div className="flex justify-center items-center relative h-full w-full my-2">
                <AnimatePresence>
                {images.map((image, index) => (
                    <motion.div
                    key={image.src}
                    className="absolute inset-0 origin-bottom"
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                    }}
                    animate={{
                        opacity: isActive(index)? 1 : 0.7,
                        scale: isActive(index)? 1 : 0.95,
                        rotate: isActive(index)? 0 : randomRotateY(),
                        z: isActive(index) ? 0 : -100,
                        zIndex: isActive(index) ? 40 : images.length + 2 - index,
                        y: isActive(index)? [0, -80, 0]: 0, 
                    }}
                     exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    >
                    <Image src={image.src} alt={image.alt} width={800} height={800} draggable={false} className="absolute inset-0 origin-bottom"/>
                    </motion.div>
                ))}
                </AnimatePresence>
            </div>
            <div className="flex flex-row justify-items-center w-100 z-10 mt-52 gap-x-10">
                <button 
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 self-start">
                    <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"/>
                </button>
                
                <button 
                onClick={handleNext}
                className=" group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 self-end">
                    <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                </button>
            </div>
        </div>
    );
}