import React from "react";
import { connect } from "react-redux";
import { cancelBooking, booking } from "../redux/flightBooking/action";
import TableRow from "./TableRow";

const Table = ({ booked, booking, cancelBooking }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const destinationFrom = e.target.from.value;
    const destinationTo = e.target.to.value;
    const journeyDate = e.target.date.value;
    const guests = e.target.guests.value;
    const ticketClass = e.target.ticketClass.value;


    const bookingDetail = {
      destinationTo,
      destinationFrom,
      journeyDate,
      guests,
      ticketClass,
    };
    booking(bookingDetail);
  };
  return (
    <section>
      {/* <!-- Input Data --> */}
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
            {/* <!-- From --> */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="from"
                  id="lws-from"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- To --> */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="to"
                  id="lws-to"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- Date --> */}
            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                required
              />
            </div>

            {/* <!-- Guests --> */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            {/* <!-- Class --> */}
            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketClass"
                  id="lws-ticketClass"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button className="addCity" type="submit" id="lws-addCity" disabled={(booked.length === 3) ? true : false}>
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                strokeLinecap="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>

     

      {
        booked.length > 0 && <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            {booked &&
              booked.map((book, index) => (
                <TableRow
                  key={index}
                  index={index}
                  book={book}
                  cancelBooking={cancelBooking}
                />
              ))}
          </tbody>
        </table>
      </div>
      }
      
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    booked: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    booking: (value) => dispatch(booking(value)),
    cancelBooking: (value) => dispatch(cancelBooking(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
