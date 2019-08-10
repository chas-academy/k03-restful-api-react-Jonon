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
        marginLeft: "2.5%",
        marginRight: "2.5%",
         gridTemplateColumns: "1fr 1fr",
        '@media (min-width: 768px) and (max-width: 1024px)' : {
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
        '@media (min-width: 1024px)' : {
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },

    },
    posterBox: {
        backgroundColor: "#F0EFEF",
    },
    posterText: {
        margin: "0px",
    },
    image: {
        width: "100%",
        
    },
    title: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: "100",
        fontSize: "1rem",
        color: "#00A3FF",
        marginBottom: "1rem"
    },
    price: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: "100",
        fontSize: "0.9rem"
    }
}

export default styles;