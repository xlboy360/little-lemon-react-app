import { fetchAPI, submitAPI } from "../utils/utils";

export const reserveDate = (newDate) => {
  const posibleDates = fetchAPI(new Date(newDate));
  return { type: "newDate", payload: posibleDates };
};

export const submitForm = (data) => {
  if (submitAPI(data)) return { type: "submitReservation", payload: data };
};
