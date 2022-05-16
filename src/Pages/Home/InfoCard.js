import React from 'react';

const InfoCard = ({img , title , time , bgClass}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-4 pt-5'>
                <img src={img} alt="Album"/>
            </figure>
            <div className="card-body text-white">
                <h2 className='font-bold'>{title}</h2>
                <p>{time}</p>
            </div>
        </div>
    );
};

export default InfoCard;