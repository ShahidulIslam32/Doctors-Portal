import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceText from './ServiceText';
import cavity from '../../assets/images/cavity.png'
import floride from '../../assets/images/fluoride.png'
import white from '../../assets/images/whitening.png'

const Service = () => {
    return (
        <div>
            <ServiceText></ServiceText>

            <div className='mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
                <ServiceCard img={cavity} title={'Floride Treatment'}></ServiceCard>
                <ServiceCard img={floride} title={'Cavity Filling'}></ServiceCard>
                <ServiceCard img={white} title={'Teath Whiteining'}></ServiceCard>
            </div>
        </div>
    );
};

export default Service;