const styles = {
    modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '11',
        width: '100%',
        height: '100%', 
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    modalBox: {
        backgroundColor: '#FFFFFF',
        width: '30rem',
        height: '20rem',
        borderRadius: '1%',
        boxShadow: '1px 0px 4px 0px rgba(0, 0, 0, 0.5)'
    },
    buttonWrapper: {
        width: '100%',
        float: 'left',
    },
    button: {
        width: "50%",
        border: 'none',
        padding: '0.5rem',
        fontFamily: "Fjalla One, sans-serif",
        cursor: 'pointer'
    }
  };
  
  export default styles;
  