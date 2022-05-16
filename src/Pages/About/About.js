import React from 'react';
import Footer from '../Shared/Footer';

const About = () => {
    return (
        <div className=''>
            <h2 className='text-center text-5xl mt-14 my-28'>Wellcome To Doctors Portal</h2>
            <h1 className='text-2xl mb-8 text-center'>A Little Defination About Us</h1>
            <p className='ml-14 text-2xl'>The Doctor’s Portal provides health organizations that strive for excellence and quality care, with a tool that allows physicians to measure themselves against key performance indicators set by the organization. This tool helps optimize physician practices in compliance with the organization’s guidelines, offering valuable statistics. Health organizations can easily get creative with this tool by setting targets for practices, and even promoting healthy competition between physicians to increase engagement in providing useful metrics, and overall better quality of service.</p> <br></br>
            <p className='ml-14 text-2xl mb-44'>
                <strong> Statistic Dashboard</strong>
                <br></br>

                Get detailed and true overview on the practice operations with build in graphical reports.
                Strive for better quality of care by analyzing statistics, locate problematic areas and implementing changes
                to eventually provide better health care to the community. <br></br><br></br>

                <strong>Compliance Ruler</strong>
                <br/>
                This intelligent tool measures physician compliance by learning how well the physician uses or misuses clinical guidelines and preventive care campaigns set by the organization. The Compliance Ruler will assess how often the physician informs the patient of opportunities for additional care to maintain the organization’s standards. 
            </p>
            <Footer></Footer>
        </div>
    );
};

export default About;