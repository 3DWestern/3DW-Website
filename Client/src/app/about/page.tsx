import React from "react";
import { execs, cooVps, cpoVps, ctoVps } from "../about/teamdata";
import Execs from "@/components/execs";

// Will add CUBO in the very near future.
export default function About() {
  return (
    <div className=" mt-10 flex flex-wrap flex-col justify-center items-center">
      <div className="relative mb-5 flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k">
        <h1 className="absolute left-[7px] top-1 sm:left-2 sm:top-2 text-purple-500 text-6xl sm:text-7xl md:text-9xl z-0 select-none">
          MEET THE TEAM
        </h1>
        <h1 className="absolute left-1 top-1 text-black text-6xl sm:text-7xl md:text-9xl z-10 select-none">
          MEET THE TEAM
        </h1>
        <h1 className="relative text-white text-6xl sm:text-7xl md:text-9xl z-20">
          MEET THE TEAM
        </h1>
      </div>
      <div className="relative mb-5 flex flex-col items-center w-fit mx-auto whitespace-nowrap bg-k gap-5">
        <Execs execs={execs} />
        <div>
          <div className="text-4xl m-0 text-center">Operations</div>
          <Execs execs={cooVps} />
        </div>
        <div>
          <div className="text-4xl m-0 text-center">Products</div>
          <Execs execs={cpoVps} />
        </div>
        <div>
          <div className="text-4xl m-0 text-center">Technology</div>
          <Execs execs={ctoVps} />
        </div>
      </div>
    </div>
  );
}
