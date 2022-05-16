import React from 'react';

const SingleAppointment = ({service , setTreatment}) => {
    const {name , slots} = service
    return (
        <div className="mt-4 card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body font-bold text-gray-600">
                <h2 className=" mt-4 text-primary font-bold text-center">{name}</h2>
                <p className='text-center'>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600 font-bold'>No Seats Available Now</span>
                    }
                </p>
                <p className='text-center'>Total {slots.length}  {slots.length > 1 ? 'Spaces' : 'Space'}  Available Right Now</p>
                <div className='card-actions justify-center'>
                    <label for="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}  
                        className="btn btn-primary uppercase text-white mt-2">book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default SingleAppointment;