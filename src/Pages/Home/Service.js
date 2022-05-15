import React from 'react';
//import ServiceCard from './ServiceCard';
import ServiceText from './ServiceText';
import cavity from '../../assets/images/cavity.png'
import floride from '../../assets/images/fluoride.png'
import white from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Service = () => {
    const services = [
        {
            _id : 1,
            name: "Floride Treatment",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image : cavity
        },
        {
            _id: 2,
            name: "Cavity Filling",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: floride
        },
        {
            _id: 3,
            name: "Teath Whiteining",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image: white
        },
    ]
    return (
        <div>
            <ServiceText></ServiceText>

            <div className='mt-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service=> <ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;