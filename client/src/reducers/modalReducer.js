import { SHOW_MODAL, HIDE_MODAL } from "../actions/modalActions";

const initialState = {
  payload: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        payload: action.payload,
      };
    case HIDE_MODAL:
      return {
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
