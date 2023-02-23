import {  BOOKING, BOOKING_CANCEL } from "./actionTypes";

const initialState = {
    value: [],
};

const bookingReducer = (state = initialState, action) => {
    
  
    switch (action.type) {
        case BOOKING:
            return {
                ...state,
                value: [
                    ...state.value,
                    {
                        bookingDetail : action.payload
                    }
                ],
            };

        case BOOKING_CANCEL:
            const filterData = state.value.filter((it,i) => {
                return i !== action.payload
               })
           return {
            ...state,
          
            value : filterData
          };

        default:
            return state;
    }
};

export default bookingReducer;