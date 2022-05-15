import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div class="card card-compact lg:max-w-lg shadow-xl">
            <figure>
                <img src={service.image} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="text-center text-lg font-bold">{service.name}</h2>
                <p className='text-center'>{service.desc}</p>
            </div>
        </div>
    );
};

export default ServiceCard;