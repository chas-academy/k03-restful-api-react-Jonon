const styles = {
  dropdownContainer: {
    position: "fixed",
    zIndex: "13",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "100",
    left: "0",
    top: "0",
  },
  content: {
    backgroundColor: "#FFFFFF",
    position: "relative",
    width: "20rem",
    height: "100%",
    overflowY: "auto",
    marginTop: "2.5rem",
    boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.5)",
    zIndex: "101",
  },
};

export default styles;
