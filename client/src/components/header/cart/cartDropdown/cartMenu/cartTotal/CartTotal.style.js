import font from "../../../../../../styles/font.style";

const cartTotalStyle = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
  },
  totalBox: {
    display: "flex",
    justifyContent: "space-between",
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
