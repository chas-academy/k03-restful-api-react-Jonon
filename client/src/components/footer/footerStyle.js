import font from "../../styles/font.style";

const footerStyle = {
  size: {
    padding: "1rem 1rem 0 1rem",
  },
  position: {
    display: "flex",
    flexDirection: "column",
    "@media (min-Width: 768px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  styling: {
    backgroundColor: "#303030",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    "@media (min-Width: 768px)": {
      justifyContent: "space-between",
      margin: "0.5rem 1rem",
      order: "2",
    },
  },
  copyright: {
    fontFamily: font.family.roboto,
    fontWeight: font.weight.regular,
    textAlign: "center",
    order: "1",
  },
};

export default footerStyle;
