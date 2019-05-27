const sliderStyle = {
  divContainer: {
    width: "100%",
    maxHeight: "48.5vw",
    margin: "auto",
    textAlign: "center",
    position: "relative",
    overflow: "hidden"
  },
  image: {
    backgroundRepeat: "no-repeat",
    maxWidth: "100%",
    objectFilt: "cover"
  },
  controller: {
    position: "absolute",
    top: "0.1",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "0",
    padding: "0 0 0 0",
    lineHeight: "0.2"
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  bullet: {
    padding: "0",
    marginLeft: "1.1rem",
    marginRight: "1.1rem",
    fontSize: "2.5rem",
    cursor: "pointer",

    color: `rgba(256, 256, 256, 0.6)`,
    ":hover": {
      color: `rgba(256, 256, 256, 1)`
    }
  }
};
export default sliderStyle;
