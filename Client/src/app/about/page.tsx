import React from 'react';
import Execs from '.././components/execs'

// Will add CUBO in the very near future.
export default function About () {
    return (
        <div className=" mt-10 flex flex-wrap flex-col justify-between items-center">
            <h1 className="text-6xl my-auto mx-auto text-center">MEET THE TEAM</h1>
            <Execs />
        </div>
    );
}