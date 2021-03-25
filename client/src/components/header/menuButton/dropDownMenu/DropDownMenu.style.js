import color from "../../../../styles/colors";

const dropDownMenuStyle = {
  base: {
    position: "absolute",
    zIndex: "101",
    "@media (max-width: 768px)": {
      top: "3.5rem",
      left: 0,
      width: "100%",
    },
    "@media (min-width: 768px)": {
      right: "3.2rem",
      top: "3.6rem",
    },
  },
  arrowAlignment: {
    display: "flex",
    justifyContent: "flex-end",
  },
  box: {
    backgroundColor: color.shades.white00,
    boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.5)",
  },

  triangleUp: {
    "@media (min-width: 768px)": {
      position: "relative",
      width: 0,
      height: 0,
      marginRight: "1.5rem",
      borderLeft: "0.4rem solid transparent",
      borderRight: "0.4rem solid transparent",
      borderBottom: `0.9rem solid ${color.shades.white00}`,
    },
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "100",
    left: "0",
    top: "0",
  },

  active: {
    display: "block",
  },
  notActive: {
    display: "none",
  },
};

export default dropDownMenuStyle;
