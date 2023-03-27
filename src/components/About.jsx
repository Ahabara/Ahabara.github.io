import React from 'react';

const About = () => {
        return (
        <div name='about' className="w-full pb-14 bg-gradient-to-b from-[#006fad] to-pink-400 text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-left pb-8 pl-4">
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4">
                    <div className="sm:text-left inline text-4xl font-bold ">
                        <p>
                            A Bit About Me
                        </p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">
                            My name is Abdel Habara. I'm a 24 year old IT student passionate about all things software
                            and finance. After working as an accountant for several years, I discovered my passion for programming and decided to pursue a career in software engineering. As a Master of Information Technology student at Monash, I taken courses in programming languages such as Java, Python, and JavaScript and have honed my skills in web development and database management. I am eager to continue learning and growing as a software engineer and look forward to contributing my unique perspective and skills to the field. . For more information feel free to <a
                            style={{color: '#ffffff'}} href='mailto:abdelsalam.habara1997@gmail.com'> email me!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;