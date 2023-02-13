import React, { useState } from "react";
import { reserveDate, submitForm } from "../../actions/uiActions";

import styles from "./Booking.module.css";

function BookingForm({state, dispatch}) {
  const [date, setDate] = useState({
    value: "",
    //*  TODO: hardcode la validacion para probar puedes hacer tu validacion en el meotod que hice esta comentado una propuesta
    isValid: true, // false
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
    setNumOfGuests(1)
    setOccasion('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date.isValid) {
      alert("Please select a valid date");
    } else {
      alert("Reservation created");
      dispatch(submitForm({date: date.value, reservationTime: reservationTime.value, numOfGuests, occasion}))
      clearForm();
    }
  };

  const handleRefetch = (value) =>{
    // setDate({ ...date, isTouched: true });
            // let auxDate = new Date(date.value.toString().replace("-", "/"));
            // if (date.value) {
            //   if (auxDate/Date.getTime() > new Date().getTime()) {
            //     setDate({ ...date, isValid: true });
            //   } else {
            //     setDate({ ...date, isValid: false });
            //   }
            // }
            // if date.isValid -> ejecutar dispatch
    dispatch(reserveDate(value))
  }


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
          value={date.value}
          onChange={(e) => setDate({ ...date, value: e.target.value })}
          onBlur={ ()=>handleRefetch(date.value)
            // () => {
            // setDate({ ...date, isTouched: true });
            // let auxDate = new Date(date.value.toString().replace("-", "/"));
            // if (date.value) {
            //   if (auxDate/Date.getTime() > new Date().getTime()) {
            //     setDate({ ...date, isValid: true });
            //   } else {
            //     setDate({ ...date, isValid: false });
            //   }
            // }
          // }
        }
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
          value={reservationTime.value || 'DEFAULT'}
          onChange={(e) =>
            setReservationTime({ value: e.target.value, isTouched: true })
          }
        >
          <option value='DEFAULT' disabled hidden>Choose an option</option>
          {
            state.reservationDate.length>0 ?
          state.reservationDate?.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))
          :
          <option disabled>No data</option>
        }
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numOfGuests}
          onChange={(e) => setNumOfGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion || 'DEFAULT'} onChange={(e) => setOccasion(e.target.value)}>
        <option value='DEFAULT' disabled hidden>Choose an option</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button
          type="submit"
          className={styles.sendBtn}
        >Make Your reservation</button>
      </form>
    </>
  );
}

export default BookingForm;
