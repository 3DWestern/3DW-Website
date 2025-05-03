import React from 'react';
import Execs from '.././components/execs'

export default function About () {

    const execList = [
        {
            name: "Troy",
            title: "Head of projects",
            src: "/amongus.png",
            alt: "Bombidilo crocidilo",
        },
    ];



    return (
        <div>
            <Execs execs={execList}/>
        </div>
    );
}