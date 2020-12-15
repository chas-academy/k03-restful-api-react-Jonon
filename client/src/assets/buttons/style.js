import color from "../../styles/colors";

const styles = {
  base: {
    border: "none",
    color: "grey",
    padding: "0.3rem",
    fontWeight: "400",
    fontFamily: "Roboto, sans-serif",
    cursor: "pointer",
    ":focus": {
      outline: "none",
    },
  },
  primary: {
    backgroundColor: color.primary,
    color: color.shades.white00,
    ":hover": {
      backgroundColor: color.primary02,
    },
  },
  primaryNoHover: {
    backgroundColor: color.primary,
    color: color.shades.white00,
  },
  secondary: {
    backgroundColor: color.shades.white00,
    color: color.shades.grey02,
  },
  tertiary: {
    backgroundColor: color.secondary,
    color: color.shades.white00,
    ":hover": {
      backgroundColor: color.secondary02,
    },
  },
  rounded: {
    true: { borderRadius: "0.2rem" },
  },
  size: {
    md: {
      padding: "0.5rem 1rem ",
      fontSize: "1rem",
    },
    lg: {
      padding: "0.8rem 1.2rem ",
      fontSize: "1.2rem",
    },
  },
};

export default styles;
