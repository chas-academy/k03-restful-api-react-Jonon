const styles = {
  rowCenter: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  },
  columnCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  productsContainer: {
    width: "100%",
    "@media (min-width: 1024px)": {
      width: "60%",
    },
  },
};

export default styles;
