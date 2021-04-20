import font from "../../../../../../styles/font.style";
import color from "../../../../../../styles/colors";

const cartTotalStyle = {
  totalBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem",
  },
  line: {
    borderBottom: `1px solid ${color.shades.grey03}`,
  },
  totalTitle: {
    fontFamily: font.family.archivoNarrow,
    fontWeight: font.weight.regular,
  },
  totalPrice: {
    fontFamily: font.family.archivoNarrow,
    fontWeight: font.weight.semiBold,
  },
};

export default cartTotalStyle;
