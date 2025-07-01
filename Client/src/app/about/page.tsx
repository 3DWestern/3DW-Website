import React from 'react';
import teamdata from '../about/teamdata';
import Execs from '../../components/execs'

// Will add CUBO in the very near future.
export default function About () {
    return (
        <div className=" mt-10 flex flex-wrap flex-col justify-center items-center">
            <div className="relative mb-5 flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k">
                <h1 className="absolute left-[7px] top-1 sm:left-2 sm:top-2 text-purple-500 text-6xl sm:text-7xl md:text-9xl z-0 select-none">MEET THE TEAM</h1>
                <h1 className="absolute left-1 top-1 text-black text-6xl sm:text-7xl md:text-9xl z-10 select-none">MEET THE TEAM</h1>
                <h1 className="relative text-white text-6xl sm:text-7xl md:text-9xl z-20">MEET THE TEAM</h1>
            </div>
            <Execs execs={teamdata}/>
        </div>
    );
}