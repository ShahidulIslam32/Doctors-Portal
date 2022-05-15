import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Service from './Service';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;