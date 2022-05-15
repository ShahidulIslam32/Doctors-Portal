import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({date , treatment , setTreatment}) => {
    const {_id ,name , slots} = treatment;
    const handleFormSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        console.log(slot , _id , name);
        setTreatment(null)
    }
    return (
        <div>
                <input type="checkbox" id="booking-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-3 mt-8 justify-items-center">
                        <input type="text" value={format(date, 'PP')}  class="input input-bordered w-full max-w-xs bg-gray-100"  readOnly/>
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                              slots.map(slot=><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs" required/>
                        <input name="phone" type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" required/>
                        <input name="email" type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" required/>
                        <input type="submit" value="Confirm Booking" class="input input-bordered bg-accent text-white w-full max-w-xs" />
                     </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;