import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import call from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-primary" img={clock} title={'Openning Hours'} time={'Everyday At 9.00 am to 4 P.m Except Govt Holiday and Friday'} ></InfoCard>
            <InfoCard bgClass="bg-accent" img={marker} title={'Visit Our Location'} time={'Esat London , MEH 147 , United Kingdom'} ></InfoCard>
            <InfoCard bgClass="bg-primary" img={call} title={'Contact Us Now'} time={'+88-01631903731'} ></InfoCard>
        </div>
    );
};

export default Info;