import React from 'react';

// TODO: Make the grid params flexible instead of fixed! 
export default function Grid() {
    return (
        // TODO: Resolve height issue! 
            <div className="bg-white w-2/3 h-[600px] sm: h-[700px] md: h-[800px] mx-auto grid grid-cols-4 auto-rows-fr gap-4 my-4">
        {/* children divs */}
                <div className="col-span-2 row-span-4 bg-blue-500 rounded-lg">
                    Tall box 
                </div>
                <div className="col-span-2 row-span-2 bg-green-500 rounded-lg">Small box</div>
                <div className="col-span-1 bg-red-500 rounded-lg">Small box 2</div>
            </div>
    );
}