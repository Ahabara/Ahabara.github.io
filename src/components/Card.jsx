import React from 'react';
const Card = (props) => {
    return (
        <>
            <div className=" text-white w-[200px] h-[300px] flex flex-col">
                <div className="top">
                <img className="w-[90px] h-[90px] justify-items-center" src={props.image} alt={props.alt}/>
                </div>
                <div className="bottom flex flex-col justify-center items-start p-3">
                    <div className="year text-4xl font-semibold text-pink-400">
                        {props.year}
                    </div>
                    <div className="description">
                        {props.description}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
//mx-8 p-8