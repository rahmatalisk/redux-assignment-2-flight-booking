
import {  BOOKING, BOOKING_CANCEL} from "./actionTypes";

export const booking = (value) => {
    return {
        type: BOOKING,
        payload: value,
    };
};

export const cancelBooking = (value) => {
    return {
        type: BOOKING_CANCEL,
        payload: value,
    };
};
