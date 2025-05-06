import React from 'react';
import teamdata from '../about/teamdata';
import Execs from '.././components/execs'

// Will add CUBO in the very near future.
export default function About () {
    return (
        <div className=" mt-10 flex flex-wrap flex-col justify-center items-center">
            <h1 className="text-5xl sm:text-7xl my-auto mx-auto text-center text-white">MEET THE TEAM</h1>
            <Execs execs={teamdata}/>
        </div>
    );
}