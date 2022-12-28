import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#006fad] text-gray-300">
            <div>
                <img src={Logo} alt="logo" style={{width: '50px'}}/>
            </div>
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-mobile-nav bg-cover flex flex-col justify-center items-center text-zinc-900"}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;