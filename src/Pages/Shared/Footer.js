import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{ background: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center'}} class="p-10">
            <div className='footer'>
                <div>
                    <p>Doctor's Portal</p>
                    <p>A Clinical Based Appointment Web Application</p>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div>
                <footer class="footer footer-center p-4 text-base-content my-4 ">
                    <div>
                        <p>Copyright © 2022 - All right reserved by Doctors Portal </p>
                        <p>Design and Developed By <span className='text-primary font-bold'>Shahidul Islam Khan</span> </p>
                    </div>
                </footer>
            </div>
        </footer>
    );
};

export default Footer;