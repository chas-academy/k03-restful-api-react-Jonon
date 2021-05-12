import color from "../../../styles/colors";

const navBarStyle = {
  navBarContainer: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  navBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  navBarButton: {},
  navBarSection: {
    cursor: "pointer",
    borderBottom: `1.5px solid ${color.shades.grey03}`,
    width: "33.333%",
    ":hover": {
      borderBottom: `1.5px solid rgba(0, 163, 255, 0.69)`,
    },

    display: "flex",
    justifyContent: "center",
    "@media (max-width: 678px)": {
      padding: "1rem 0",
    },
    "@media (min-width: 678px) and (max-width: 1024px)": {
      padding: "0.5rem 0",
      flexDirection: "column",
      alignItems: "center",
    },
    "@media (min-width: 1024px)": {
      padding: "1rem 0",
      flexDirection: "row",
      alignItems: "center",
      alignContent: "flex-start",
    },
  },
  navBarItemLi: {
    display: "none",
    "@media (min-width: 768px)": {
      display: "block",
    },
    "@media (min-width: 1024px)": {
      marginLeft: "0.5rem",
    },
  },
};

export default navBarStyle;
