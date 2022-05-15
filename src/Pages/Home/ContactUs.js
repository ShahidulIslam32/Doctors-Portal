import React from 'react';
import bg from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className='text-center mt-28 mb-5 p-10' style={{ background: `url(${bg})` }}>
            <div>
                <h2 className='uppercase font-bold text-primary p-5'>Contact Us</h2>
                <h2 className='text-3xl text-white mb-5'>Stay Connected With Us</h2>
            </div>
            <div>
                <input type="text" placeholder="Email Address" class="input w-full max-w-xs" />
                <br/>
                <br/>
                <input type="text" placeholder="Subject" class="input w-full max-w-xs" />
                <br/><br/>
                <textarea class="textarea w-full max-w-xs" placeholder="Your Message"></textarea>
            </div>
            <div className='mt-4'>
                <button class="btn btn-primary text-white font-bold">Submit</button>
            </div>
        </section>
    );
};

export default ContactUs;