import React from "react";
import BookingForm from "./BookingForm";
import styles from "./Booking.module.css";

import restaurantPhoto from "../../assets/restaurant.jpg";

function Booking() {
  return (
    <div className={styles.bookingLayout}>
      <BookingForm />
      <img
        src={restaurantPhoto}
        alt="Restaurant"
        className={styles.restaurantPhoto}
      />
    </div>
  );
}

export default Booking;
