const styles = {
  iconsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    "@media (min-Width: 768px)": {
      justifyContent: "space-between",
      margin: "0.5rem 1rem",
      order: "2",
    },
  },
  width: "2rem",
  height: "2rem",
  fontSize: "2rem",
  color: "#303030",
  borderRadius: "50%",
  backgroundColor: "#6A6A6A",
  align: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  margin: "0 0.5rem",
};

export default styles;
