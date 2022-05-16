import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import SingleAppointment from './SingleAppointment';

const AvailableAppointment = ({date}) => {
    const [services , setServices] = useState([])
    const [treatment , setTreatment] = useState(null)

    useEffect( () => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='mt-14 text-center text-primary font-bold'>Available Appointments on {format(date, 'PP')}</p>
            <p className='text-center text-gray-400'>Please Select a Service</p>
            <div className='mt-14 mb-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 lg:grid-cols-3 gap-5 mb-44'>
                {
                    services.map(service=> <SingleAppointment 
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></SingleAppointment>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></ BookingModal>}
        </div>
    );
};

export default AvailableAppointment;