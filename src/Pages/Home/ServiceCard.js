import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="card card-compact lg:max-w-lg shadow-xl">
            <figure>
                <img src={service.image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-center text-lg font-bold">{service.name}</h2>
                <p className='text-center'>{service.desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;