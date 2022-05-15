import React from 'react';

const ServiceCard = ({ img, title}) => {
    return (
        <div class="card card-compact w-96 shadow-xl">
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="text-center text-lg font-bold">{title}</h2>
                <p className='text-center'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
            </div>
        </div>
    );
};

export default ServiceCard;