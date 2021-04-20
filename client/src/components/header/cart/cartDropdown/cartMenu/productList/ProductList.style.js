const productListStyle = {
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    overflow: "hidden",
  },

  scroll: {
    overflowY: "scroll",
    height: "17.8rem",
    "@media (min-width: 768px)": {
      // Hide scrollbar
      width: "26rem",
      height: "18rem",
    },
  },
};

export default productListStyle;
