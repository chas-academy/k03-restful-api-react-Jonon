import font from "../../../../styles/font.style";
import color from "../../../../styles/colors";

const styles = {
  image: {
    width: "100%",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: `${font.family.archivoNarrow}`,
    fontWeight: `${font.weight.semiBold}`,
    color: `${color.shades.grey00}`,
  },
  price: {
    fontFamily: "Archivo Narrow, sans-serif",
    fontWeight: `${font.weight.medium}`,
    color: `${color.shades.grey00}`,
  },
};

export default styles;
