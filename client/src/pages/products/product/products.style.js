const styles = {
  base: {
    margin: "1em",
    "@media (min-width: 1024px)": {
      marginLeft: "20%",
      marginRight: "20%",
    },
  },
  threeColumns: {
    "@media (min-width: 1024px)": {
      display: "grid",
      gridTemplateColumns: "3fr 1fr",
    },
  },
  desktopLayout: {
    "@media (min-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "45% 1fr",
    },
  },
  margin: {
    "@media (min-width: 768px)": {
      marginLeft: "1em",
    },
  },
  disableListStyle: {
    listStyle: "none",
    padding: "0px",
  },
  gridColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    "@media (min-width: 768px) and (max-width: 1023px)": {
      gridTemplateColumns: "2fr 1fr",
    },
    "@media (min-width: 1024px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
};

export default styles;
