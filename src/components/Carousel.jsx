import React from 'react';
import ANU from '../assets/carousel/ANU.svg';
import EnP from '../assets/carousel/EnP.svg';
import JS from '../assets/carousel/JS.svg';
import Monash from '../assets/carousel/Monash.svg';
import Deloitte from '../assets/carousel/Deloitte.png';
import Mission from '../assets/carousel/moon.png';
import Card from "./Card";

const TimeLineData = [
    { year: 2018, text: 'Started working in Financial Services (SMSF Fund Management)', imageURL: EnP, alt: "EP1 logo"},
    { year: 2020, text: 'Graduated from ANU with a Bachelor of Commerce/Bachelor of Arts', imageURL:ANU, alt: "ANU logo"},
    { year: 2020, text: 'Worked full time in accountancy. During this time, I spent my spare time learning Web Development', imageURL: JS, alt: "JS Logo"},
    { year: 2021, text: 'I quit my job to study my Masters of Information Technology at Monash University', imageURL:Monash, alt: "Monash Logo"},
    { year: 2022, text: "Joined Deloitte as a CyberSecurity Intern!", imageURL:Deloitte, alt: "Deloitte Logo"},
    { year: 2023, text: "Who knows!", imageURL: Mission, alt: "Space Rocket"}
];
const Carousel = () => {

    return (
        <>
            <section name="work" className=" w-full h-full bg-gradient-to-b from-pink-400 to-[#006fad] text-gray-300 p-2">
                <p className="text-4xl font-bold text-white text-center pb-14	" > Timeline </p>
                <p className="text-white text-center md:mx-20"> I've worked and implemented a number of technologies using a wide array of technologies, both speciifc to front-end, back-end and software pertaining to financial services, including but not limited to:
                </p>
                <br/>
                <div className="flex flex-row overflow-x-auto  md:justify-center">
                    {
                        TimeLineData.map((e) => (
                            <Card image = {e.imageURL} description={e.text} year={e.year} alt={e.alt}/>
                        ))
                    }
                </div>


            </section>
        </>
    );
};
export default Carousel;
