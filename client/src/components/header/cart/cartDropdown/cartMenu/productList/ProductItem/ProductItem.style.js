import font from "../../../../../../../styles/font.style";
import color from "../../../../../../../styles/colors";

const productItemStyle = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "0.3fr 2fr",
    padding: "0.5rem",
    justifyContent: "space-between",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "0.5rem",
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  poster: {
    width: "100%",
  },
  dividerLine: {
    borderBottom: "1px solid #C5C5C5",
  },
  title: {
    fontFamily: font.family.archivoNarrow,
    fontWeight: font.weight.regular,
    color: color.shades.grey00,
  },
  price: {
    fontFamily: font.family.archivoNarrow,
    fontWeight: font.weight.semiBold,
    color: color.shades.grey00,
  },
};

export default productItemStyle;
