import React from 'react';
import {DiFirebase, DiReact} from "react-icons/di";
import {RiMoneyDollarCircleLine} from "react-icons/ri";

function Technology(props) {
    return <li className="">
        <span >
            {<props.icon className="w-12 h-12 justify-center"/>}
        </span>
        <p className="text-3xl">
            {props.title}
        </p>
        <p className="text-xl"> Experienced in:</p>
        <ul className="ml-2">
            {props.li.map((i, k) =>
                <li> {i} </li>
            )}
        </ul>




    </li>;
}

const Skills = () => {
    const frontEnd = [
        "JavaScript",
        "HTML",
        "CSS",
        "ReactJS",
        "Bootstrap"
    ]
    const backEnd = [
        ".NET Core",
        "Spring Boot",
        "Django",
        "NodeJS",
        "MySQL/SQLServer"
    ]
    const financial = [
        "Tax Accounting",
        "Self-managed Super Fund regulation",
        "Financial advice and strategy implementation",
        "BGL"
    ]
    return (
        <div name='skills' className="w-full h-full bg-gradient-to-b from-[#006fad] to-pink-400 text-gray-300 p-4 pt-8 md:h-[70vh] ">
            <ul className="flex flex-row flex-wrap md:grid grid-cols-3 gap-10  mr-8 ml-8">
                <Technology icon={DiReact} title={"Front End"} li={frontEnd}/>
                <Technology icon={DiFirebase} title={"Back End"} li={backEnd}/>
                <Technology icon={RiMoneyDollarCircleLine} title={"Financial"} li={financial}/>
            </ul>
        </div>
    );
};


// 49:54, 100:50-work

export default Skills;