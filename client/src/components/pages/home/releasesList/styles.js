const style = {
    container: {
        width: '100%',
        overflow: 'hidden'
    },
    posterList: {
        width: '300%',
        '@media (min-width: 768px) and (max-width: 1024px)' : {
            width: '225%'
        },
        '@media (min-width: 1025px)' : {
            width: '180%'
        },
        display: 'flex',
        alignItems: 'flex-end'
    },
    poster: {
        flexGrow: '1',
        width: '10%',
        zIndex: '10',
        ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            filter: `opacity(60%)`
        }
    }
}

export default style;