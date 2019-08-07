const styles = {
    base: {
        listStyle: "none",
    },
    item: {
        paddingLeft: "2rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        cursor: "pointer"

    },
    category: {
        borderLeft: "5px solid white",
        ":hover": {
            borderLeft: "5px solid #C61017",
            backgroundColor: "#FAFAFA"
        }
    },
    subCategory: {
        paddingLeft: "2rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "#FAFAFA",
        ":hover": {
            backgroundColor: "#F0F0F0"
        }
    }
}
   


export default styles;