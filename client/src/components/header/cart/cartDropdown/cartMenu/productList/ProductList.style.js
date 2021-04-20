const productListStyle = {
  list: {
    listStyle: "none",
    padding: "0",
    overflow: "hidden",
  },

  scroll: {
    overflowY: "scroll",
    height: "23rem",
    "@media (min-width: 768px)": {
      // Hide scrollbar
      width: "26rem",
    },
  },
};

export default productListStyle;
