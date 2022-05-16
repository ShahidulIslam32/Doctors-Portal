import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appoint from '../../assets/images/bg.png'



const AppointmentBanner = ({date , setDate}) => {
    return (
        <div class="custom hero min-h-screen" style={{ background: `url(${appoint})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='box'/>
                <div className='shadow-xl p-6 rounded'>
                    <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;