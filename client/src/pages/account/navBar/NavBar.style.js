const navBarStyle = {
  navBarContainer: {
    listStyle: "none",
    padding: 0,
  },
  navBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  navBarItemLi: {
    display: "none",
    "@media (min-width: 768px)": {
      display: "block",
    },
  },
};

export default navBarStyle;
