import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
        console.log("pressed");
    };

    const handleClick2 = () => {
        console.log("heeey")
    };
    return (
        // border-2 border-b-fuchsia-400
        <div
            className="  fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-b from-[#006fad] to-transparent bg-opacity-25	text-gray-300">
            <div>
                <img src={Logo} alt="logo" style={{width: '50px'}}/>
            </div>
            <ul className="hidden md:flex">
                <li>
                    <Link to={'home'} smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link  to={'about'}smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link name={"Work"} to={'work'}smooth={true} duration={500}/>
                </li>
                <li>
                    <Link name={"Skills"} to={'skills'}smooth={true} duration={500}/>
                </li>
                <li>
                    <Link name={"Contact"} to={'contact'}smooth={true} duration={500}/>
                </li>
            </ul>
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-mobile-nav bg-cover flex flex-col justify-center items-center text-zinc-900"}>
                <li>
                    <Link onClick={handleClick} name={"Home"} to={'home'}smooth={true} duration={500}/>
                </li>
                <li>
                    <Link onClick={handleClick} name={"About"} to={'about'}smooth={true} duration={500}/>
                </li>
                <li>
                    <Link onClick={handleClick} name={"Work"} to={'work'}smooth={true} duration={500}/>
                </li>
                <li>
                    <Link onClick={handleClick} name={"Skills"} to={'skills'}smooth={true} duration={500}/>
                </li>
                <li>
                    <Link onClick={handleClick} name={"Contact"} to={'contact'}smooth={true} duration={500}/>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;