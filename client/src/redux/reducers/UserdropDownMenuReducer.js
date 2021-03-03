const initialState = {
  payload: "false",
};

const UserdropDownMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return {
        payload: action.payload,
      };
    case "HIDE":
      return {
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default UserdropDownMenuReducer;
