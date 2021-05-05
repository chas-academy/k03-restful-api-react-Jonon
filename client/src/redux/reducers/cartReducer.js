const initialState = {
  items: [],
  total: 0,
  totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let data = action.payload.data;
      let newData = { ...data, quantity: 1 };
      // Add quantity prop with the default value of 1
      const itemExist = state.items.find((item) => item._id === action.payload.id);
      // Find id of product in items array
      if (itemExist) {
        let quantity = (itemExist.quantity += 1);
        // Increase quantity by 1
        let totalPrice = (state.total += itemExist.price);
        // Calculate total price

        return {
          ...state,
          total: totalPrice,
          totalItems: state.totalItems + 1,
        };
      } else {
        let totalPrice = (state.total += data.price);

        return {
          ...state,
          items: [...state.items, newData],
          // Add Product to items array
          Total: totalPrice,
          totalItems: state.totalItems + 1,
          // Increase quantity by 1
        };
      }
    }

    default:
      return state;
  }
};

export default cartReducer;
