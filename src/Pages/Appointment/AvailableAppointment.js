import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import SingleAppointment from './SingleAppointment';

const AvailableAppointment = ({date}) => {
    const [services , setServices] = useState([])

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(date, 'PP')}</p>
            <p className='text-center text-gray-400'>Please Select a Service</p>
            <div className='mt-14 mb-5 grid gap-x-8 gap-y-4 grid-cols-3'>
                {
                    services.map(service=> <SingleAppointment 
                        key={service._id}
                        service={service}
                    ></SingleAppointment>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;