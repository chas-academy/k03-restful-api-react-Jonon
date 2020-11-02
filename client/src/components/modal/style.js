const styles = {
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "1000",
  },
  modalStyles: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    backgroundColor: `#FFFFFF`,
    zIndex: 1000,
    boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.5)",
    borderRadius: "1%",
  },
  modalBox: {
    backgroundColor: "#FFFFFF",
    width: "25rem",
  },
};

export default styles;
