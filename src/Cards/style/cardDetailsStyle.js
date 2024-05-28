const detailStyles = {
    container: {
      width: "80vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      mt: "68px",
      overflow: "none"
    },
    header: {
      fontFamily: "roboto",
      fontWeight: "550",
      fontSize: "30px",
      marginBottom: "5px",
      color: 'white',
      textAlign: { xs: 'center', sm: 'left' },
    },
    subHeader: {
      fontFamily: "roboto",
      fontWeight: "100",
      fontSize: "20px",
      marginBottom: "20px",
      marginLeft: "2px",
      color: '#9CA3AF',
      textAlign: { xs: 'center', sm: 'left' },
    },
    text: {
      fontFamily: "roboto",
      fontWeight: "100",
      fontSize: "12px",
      marginBottom: "5px",
      color: '#F0F0F0',
      textAlign: { xs: 'center', sm: 'left' },
      width: "auto"
    },
    boldText: {
      fontWeight: "500",
      fontSize: "12px",
      color: 'white',
    },
    buttonContainer: {
      width: '100%',
      display: "flex",
      justifyContent: { xs: 'center', sm: 'flex-start' },
      mt: "25px",
    },
    button: {
      fontFamily: "roboto",
      fontWeight: "500",
      fontSize: "12px",
      color: 'white',
    },
    imagebox: {
      height: "35vh",
      width: { xs: '85%', sm: '30vw' },
      backgroundColor: "white",
      borderRadius: "10px",
      border: "solid white"
    },
    textbox: {
      display: "inline-block",
      width: "auto",
      alignSelf: "right",
      margin: "auto"
    },
    imageAlign: {
      display: "flex",
      justifyContent: { xs: "center", sm: "left" },
      position: "relative"
    },
    iconButtons: {
      display: "flex",
      justifyContent: { xs: "center", sm: "start" },
      gap: "2vh"
    },
    textAlign: {
      display: "flex",
      justifyContent: { xs: "center", sm: "flex-end" }
    },
    mapAlign: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px"
    },
    mapContainer: {
      height: '45vh',
      width: '90%',
      borderRadius: '10px',
      overflow: 'hidden',
      marginTop: '20px',
      zIndex: 0,
      border: "solid #F0F0F0",
      opacity: "0.9",
      ':hover': {
        opacity: "0.95"
      },
    }
  };
  
  export default detailStyles;