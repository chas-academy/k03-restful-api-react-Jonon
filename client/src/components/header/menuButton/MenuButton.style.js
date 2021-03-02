import color from "../../../styles/colors";

const MenuButtonStyle = {
  marginRight: "1rem",
  signIn: {
    color: color.shades.white00,
    cursor: "pointer",
  },
  menuOptionsButton: {
    cursor: "pointer",
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "100",
    left: "0",
    top: "0",
  },
};

export default MenuButtonStyle;
