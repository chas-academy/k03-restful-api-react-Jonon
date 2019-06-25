const style = {
    container: {
        width: '100%',
        overflow: 'hidden'
    },
    title: {
        textAlign: 'center', 
        fontFamily: "Fjalla One, sans-serif", 
        fontWeight: '100'
    },
    posterList: {
        width: '100%',
        gridTemplateColumns: '1fr 1fr 1fr',
        '@media (min-width: 768px) and (max-width: 1024px)' : {
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
        '@media (min-width: 1024px)' : {
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        },
        display: 'grid',
        
    },
    poster: {
        width: '100%',
        zIndex: '10',
        ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            filter: `opacity(60%)`
        }
    },
    viewMoreLink: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: '300', 
        float: 'right',
        paddingRight: '1rem'
    },
    posterContainer: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    buttons: {
        display: 'block',
        width: '95%',
        height: '100%',
        margin: 'auto',
        marginLeft: '1rem'
    },
    slideButton: {
        cursor: 'pointer',
        width: '2rem',
        position: 'absolute',
        zIndex: '10',
        top: '50%',
        bottom: '0',
        lineHeight: '0',
        height: '0px',
        color: 'grey',
        fontSize: '3em',
        '@media (min-width: 768px) and (max-width: 1024px)': {
            fontSize: '4em',
            },
        '@media (min-width: 1025px)' : {
            fontSize: '5em'
        },
    },
    prevSlide: {
        left: '0',
        marginLeft: '0.5rem'
    },
    nextSlide: {
        right: '0',
    }
}

export default style;