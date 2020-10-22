const styles = {
  base: {
    listStyle: "none",
  },
  item: {
    paddingLeft: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    lineHeight: "2rem",
    cursor: "pointer",
    fontFamily: "Roboto, sans-serif",
  },
  category: {
    fontWeight: "400",
    borderLeft: "5px solid white",
    ":hover": {
      borderLeft: "5px solid #C61017",
      backgroundColor: "#FAFAFA",
    },
  },
  activeArrow: {
    borderLeft: "5px solid #C61017",
    backgroundColor: "#FAFAFA",
  },
  inactiveArrow: {
    borderLeft: "5px solid #FFFFFF",
    backgroundColor: "#FFFFFF",
  },
  active: {
    display: "block",
  },
  inactive: {
    display: "none",
  },
  rotateIcon: {
    transform: `rotate(90deg)`,
  },
};

export default styles;
