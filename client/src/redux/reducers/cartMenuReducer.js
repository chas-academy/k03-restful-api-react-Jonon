const initialState = {
  payload: false,
};

const cartMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return {
        payload: action.payload,
      };
    case "HIDE_CART":
      return {
        payload: { payload: action.payload },
      };
    default:
      return state;
  }
};

export default cartMenuReducer;
