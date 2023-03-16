import React from 'react';

const About = () => {
    return (
        <div name='about' className="w-full h-[50vh] bg-gradient-to-b from-[#006fad] to-pink-400 text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-left pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right inline text-4xl font-bold ">
                        <p>
                            A Bit About Me
                        </p>
                    </div>
                    <div>
                        <p>
                            My name is Abdel Habara. I'm a 24 year old IT student passionate about all things software
                            and finance. Here are a few of my achievements. For more information feel free to <a
                            style={{color: '#ffffff'}} href='mailto:abdelsalam.habara1997@gmail.com'> email me!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;