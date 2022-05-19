import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';


const BookingModal = ({date , treatment , setTreatment}) => {
    const {_id ,name , slots} = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formatDate = format(date , 'PP')

    const handleFormSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        console.log(slot , _id , name);
        // send data in database 

        const booking = {
            treatmentId : _id,
            treatment: name,
            date : formatDate,
            slot,
            pateint : user.email,
            patientName : user.displayName,
            phone : event.target.phone.value
        }
        // fetch data for send backend server

        fetch('http://localhost:5000/booking', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            swal("Your Booking is Confirm", "Thank You For Being With Us", "success");
            setTreatment(null)
        })

    }
    return (
        <div>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                        <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-3 mt-8 justify-items-center">
                        <input type="text" value={format(date, 'PP')}  className="input input-bordered w-full max-w-xs bg-gray-100"  readOnly/>
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                              slots.map(slot=><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

                        <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required/>

                        <input type="submit" value="Confirm Booking" className="input input-bordered bg-accent text-white w-full max-w-xs" />
                     </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;