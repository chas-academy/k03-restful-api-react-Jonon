const styles = {
  dropdownBase: {
    position: "fixed",
    zIndex: "11",
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "20rem",
    boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.5)",
    marginTop: "2.5rem",
  },
  dropdownContainer: {
      position: "fixed",
      zIndex: "13",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      paddingRight: "1rem"
  },
  hiddenScrollbar: {
    overflowY: "scroll",
    scrollbarWidth: "none",
    height: "100%",
  },
  menuBase: {
    backgroundColor: "#FFFFFF",
    height: "85.8vh",
    width: "20rem",
    boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.5)",
  },
};

export default styles;