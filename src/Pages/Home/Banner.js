import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br></br> Here</h1>
                    <p className="py-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary text-white font-bold">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;