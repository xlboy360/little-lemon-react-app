import React, { useEffect, useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import styles from "./Booking.module.css";

import restaurantPhoto from "../../assets/restaurant.jpg";

function Booking() {
  const updateTimes = () => {
    return availableTimes;
  };

  const initializeTimes = () => {
    // eslint-disable-next-line no-undef
    return fetchAPI(new Date());
  };

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  );

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div className={styles.bookingLayout}>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
      <img
        src={restaurantPhoto}
        alt="Restaurant"
        className={styles.restaurantPhoto}
      />
    </div>
  );
}

export default Booking;
