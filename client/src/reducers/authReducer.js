const initialState = {
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATED":
      return {
        auth: action.payload,
      };
    case "NOT_AUTHENTICATED":
      return {
        payload: { auth: action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;
