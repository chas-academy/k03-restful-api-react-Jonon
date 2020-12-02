import colors from "../../../styles/colors";

const styles = {
  posterContainer: {
    listStyle: "none",
    padding: "0px",
    margin: "0px",
    width: "95%",
    display: "grid",
    gridColumnGap: "1rem",
    gridRowGap: "1rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    gridTemplateColumns: "1fr 1fr",
    "@media (min-width: 768px) and (max-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    },
  },
  posterBox: {
    backgroundColor: "#F0EFEF",
    borderRadius: "1%",
    boxShadow: `0px 0px 2px rgba(0, 0, 0, 0.25)`,
    ":hover": {
      boxShadow: `0px 0px 5px rgba(186, 45, 0, 0.75)`,
    },
  },
  productList: {
    padding: "1rem 1rem 0rem 1rem",
  },
  image: {
    width: "100%",
  },
  posterText: {
    margin: "0px",
  },
  title: {
    fontFamily: "Archivo Narrow, sans-serif",
    fontWeight: "100",
    fontSize: "1rem",
    color: colors.shades.grey02,
    height: "2.5rem",
  },
  price: {
    fontFamily: "Archivo Narrow, sans-serif",
    fontWeight: "100",
    fontSize: "0.9rem",
    color: colors.shades.grey02,
  },
};

export default styles;
