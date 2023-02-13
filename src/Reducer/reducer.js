export function reducer(state, action) {
  switch (action.type) {
    case "newDate":
      return {
        ...state,
        reservationDate: action.payload,
      };
    case "submitReservation":
      return {
        ...state,
        reservationDate: [],
        form: action.payload,
      };

    default:
      break;
  }
}
