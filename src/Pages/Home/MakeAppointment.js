import React from 'react';
import doctor from '../../assets/images/doctor.png'
import doctorBg from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{background : `url(${doctorBg})`}} className='flex justify-center items-center mt-44'>
            <div className='flex-1 mt-[-150px] hidden lg:block'>
                <img src={doctor} alt=""/>
            </div>
            <div className='flex-1 text-white p-12'>
                <h3 className='text-primary text-xl'>Appointment</h3>
                <h2 className='text-3xl mt-5'>Make an Appointment Today</h2>
                <p className='mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="mt-5 btn btn-primary uppercase text-white font-bold">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;