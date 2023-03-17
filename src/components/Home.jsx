import React from 'react';
import {HiArrowRight} from "react-icons/hi";
import Resume from '../assets/Resume.pdf'

const DownloadResume = () => <>
    <button
        onClick={()=>{
            window.open(Resume, "_blank");
        }}
        className="bg-gradient-to-r from-[#13ADC7] to-[#945DD6] hover:from-[#27c5c0] hover:to-[#e346ca] hover:transition duration-300 ease-in border-2 text-white font-bold px-6 py-3 my-2 rounded-full ">
        Download Résumé
    </button>
</>;

const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-[#006fad]">
            {/*change colours*/}
            <div className="max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full">
                <p className=" text-2xl text-pink-400 font-bold"> Welcome </p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"> Hi, I'm <span className="font-display text-8xl sm:text-8xl text-pink-400">   Abdel,</span></h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#ecccf6]">I'm a Software Developer & Accountant</h2>
                <h2 className="font-bold text-[#ccd6f6] py-4 max-w-[700px]">I am a front end software developer based in Melbourne! I am a Masters of Information Technology student at Monash University. Before diving in to software development, I was working at a boutique financial services company as an accountant managing millions of dollars of assets for high net value clients.</h2>
                <div className="grid grid-cols-2 gap-4 mx-8  px-8 justify-center">
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-full transition duration-900  hover:bg-pink-400">
                        View Work
                        <span className="group-hover:rotate-90 duration-500">
                            <HiArrowRight className="nl-3"/>
                        </span>
                    </button>
                    <DownloadResume/>
                </div>
            </div>
        </div>
    );
};

export default Home;

// skipped the socials step 24:30 & 27:00