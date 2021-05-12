const navBarStyle = {
  navBarContainer: {
    listStyle: "none",
    padding: 0,
  },
  navBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  navBarSection: {
    display: "flex",

    "@media (min-width: 678px) and (max-width: 1024px)": {
      flexDirection: "column",
      alignItems: "center",
    },
    "@media (min-width: 1024px)": {
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
  },
};

export default navBarStyle;
