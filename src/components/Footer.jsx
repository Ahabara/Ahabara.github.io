import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer name={'contact'} className="bg-pink-400 text-white p-4 ">
            <div className="flex flex-wrap justify-center">
                <span className="flex ">
                <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                <p className="mr-8" >E-MAIL </p>
                </span>
                <a href="mailto:abdelsalam.habara1997@gmail.com">abdelsalam.habara1997@gmail.com</a>
            </div>
            <br/>
            <div className="flex flex-wrap justify-center">
                <p className="mr-8"> Find me On </p>

                <div className="flex">
                    <a href="https://github.com/Ahabara">
                        <AiFillGithub size="2rem" className="hover:bg-[#212d45] hover:bg-opacity-20"/>
                    </a>
                    <br/>
                    <a href="https://www.linkedin.com/in/abdel-habara-7258b2133/">
                        <AiFillLinkedin size="2rem" className="hover:bg-[#212d45] hover:bg-opacity-20"/>
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;