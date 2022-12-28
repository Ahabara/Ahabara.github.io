import React from 'react';
import {HiArrowRight} from "react-icons/hi";

const Home = () => {
    return (
        <div className="w-full h-screen bg-[#006fad]">
            {/*change colours*/}
            <div className="max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full">
                <p className=" text-2xl text-pink-400 font-bold"> Welcome </p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"> Hi, I'm Abdel</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#ecccf6]">I'm a Software Developer & Accountant</h2>
                <h2 className="font-bold text-[#ccd6f6] py-4 max-w-[700px]">I am a front end software developer based in Melbourne! I am a Masters of Information Technology student at Monash University. Before diving in to software development, I was working at a boutique financial services company as an accountant managing millions of dollars of assets for high net value clients.</h2>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center transition duration-900  hover:bg-pink-400">
                        View Work
                        <span className="group-hover:rotate-90 duration-500">
                            <HiArrowRight className="nl-3"/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;

// skipped the socials step 24:30 & 27:00