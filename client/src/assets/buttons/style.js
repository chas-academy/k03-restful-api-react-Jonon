import colors from "../../styles/colors";

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
    backgroundColor: colors.primary,
    color: colors.whites.variant00,
  },
  secondary: {
    backgroundColor: colors.whites.variant00,
    color: colors.greys.variant03,
  },
  tertiary: {
    backgroundColor: colors.secondary,
    color: colors.whites.variant00,
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
