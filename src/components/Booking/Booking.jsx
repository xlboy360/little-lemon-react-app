import React, { useReducer} from "react";
import BookingForm from "./BookingForm";
import styles from "./Booking.module.css";

import { reducer } from "../../Reducer/reducer";
import restaurantPhoto from "../../assets/restaurant.jpg";

function Booking() {

  const [state, dispatch] = useReducer( reducer, {reservationDate: [], form:''} )
  
  return (
    <div className={styles.bookingLayout}>
      <BookingForm state={state} dispatch={dispatch} />
      <img
        src={restaurantPhoto}
        alt="Restaurant"
        className={styles.restaurantPhoto}
      />
    </div>
  );
}

export default Booking;
