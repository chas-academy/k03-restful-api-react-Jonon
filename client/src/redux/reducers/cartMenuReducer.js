const initialState = {
  payload: false,
};

const cartMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return {
        payload: { show: !state.payload.show },
      };
    case "HIDE_CART":
      return {
        payload: { show: action.payload },
      };
    default:
      return state;
  }
};

export default cartMenuReducer;
