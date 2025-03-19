import React from 'react';

interface text {
    text: string;
}

export default function Sign ({ text }: text) {
    return (
        <div className="bg-black">
            <p>{text}</p> 
        </div>
    );
}