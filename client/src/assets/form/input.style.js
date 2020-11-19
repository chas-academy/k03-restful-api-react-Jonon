import color from "../../styles/colors";

const style = {
  base: {
    textIndent: "1rem",
    border: ".01px solid #4B3A39",
    fontSize: "0.9rem",
    fontFamily: "Roboto, sans-serif",
    paddingTop: "0.9rem",
    paddingBottom: "0.9rem",
    "@media (min-width: 768px)": {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
    ":focus": {
      outline: "none",
    },
  },
  rounded: {
    true: { borderRadius: "0.2rem" },
  },
  kind: {
    primary: { border: `1px solid ${color.primary}` },
    none: { border: "none" },
  },
};

export default style;
