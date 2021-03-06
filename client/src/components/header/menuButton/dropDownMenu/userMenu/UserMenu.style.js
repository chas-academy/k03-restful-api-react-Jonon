import color from "../../../../../styles/colors";
import font from "../../../../../styles/font.style";
const UserMenuStyle = {
  box: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    "@media (max-width: 767px)": {
      width: "100%",
    },
    "@media (min-width: 768px)": {
      width: "15rem",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: color.shades.grey01,
    fontFamily: font.family.archivoNarrow,
    fontWeight: font.weight.medium,
  },
};

export default UserMenuStyle;
