import React, { useState } from "react";

import styles from "./Booking.module.css";

function BookingForm({ availableTimes, setAvailableTimes }) {
  const [date, setDate] = useState({
    value: "",
    isValid: false,
    isTouched: false,
  });
  const [reservationTime, setReservationTime] = useState({
    value: "",
    isTouched: false,
  });
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const ErrorMessage = ({ errorText }) => {
    return <p style={{ color: "red", fontWeight: "bold" }}>{errorText}</p>;
  };

  const clearForm = () => {
    setDate({
      value: "",
      isValid: false,
      isTouched: false,
    });
    setReservationTime({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date.isValid) {
      alert("Please select a valid date");
    } else {
      alert("Reservation created");
      clearForm();
    }
  };

  return (
    <>
      <form
        className={styles.form}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date" className={styles.formHeader}>
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => setDate({ ...date, value: e.target.value })}
          onBlur={() => {
            setDate({ ...date, isTouched: true });
            let auxDate = new Date(date.value.toString().replace("-", "/"));
            if (date.value) {
              if (auxDate.getTime() > new Date().getTime()) {
                setDate({ ...date, isValid: true });
              } else {
                setDate({ ...date, isValid: false });
              }
            }
          }}
        />
        {date.isTouched && date.value.length <= 0 ? (
          <ErrorMessage errorText="Please provide a booking date" />
        ) : !date.isValid && date.value.length > 0 ? (
          <ErrorMessage errorText="Booking date should be in the future" />
        ) : (
          ""
        )}
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={(e) =>
            setReservationTime({ value: e.target.value, isTouched: true })
          }
        >
          {availableTimes.map((time, key) => (
            <option key={key} value={key}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setNumOfGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          className={styles.sendBtn}
        />
      </form>
    </>
  );
}

export default BookingForm;
