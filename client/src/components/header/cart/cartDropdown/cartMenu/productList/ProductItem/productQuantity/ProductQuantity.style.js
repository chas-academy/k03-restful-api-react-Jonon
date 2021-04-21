import color from "../../../../../../../../styles/colors";

const productQuantityStyle = {
  center: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    border: `1px solid ${color.shades.grey03}`,
    borderRadius: "3px",
  },
  quantity: {
    margin: "0 1rem",
    color: color.secondary,
  },
  button: {
    cursor: "pointer",
    ":hover": {
      stroke: color.shades.black00,
    },
  },
};

export default productQuantityStyle;
