import React from 'react';

const SingleAppointment = ({service}) => {
    return (
        <div class="mt-4 card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class=" mt-4 text-primary font-bold text-center">{service.name}</h2>
            </div>
        </div>
    );
};

export default SingleAppointment;