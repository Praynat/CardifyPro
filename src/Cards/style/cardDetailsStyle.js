import { useDarkLightTheme } from "../../theme/ThemeProvider";

const useDetailStyles = () => {
  const { theme } = useDarkLightTheme();
  
  return {
    container: {
      width: "80vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      mt: "68px",
      overflow: "hidden"
    },
    header: {
      fontFamily: "roboto",
      fontWeight: "550",
      fontSize: "30px",
      marginBottom: "5px",
      color: theme.strongTextColor,
      textAlign: { xs: 'center', sm: 'left' },
    },
    subHeader: {
      fontFamily: "roboto",
      fontWeight: "100",
      fontSize: "20px",
      marginBottom: "20px",
      marginLeft: "2px",
      color: theme.weakTextTColor,
      textAlign: { xs: 'center', sm: 'left' },
    },
    text: {
      fontFamily: "roboto",
      fontWeight: "100",
      fontSize: "12px",
      marginBottom: "5px",
      color: theme.midTextColor,
      textAlign: { xs: 'center', sm: 'left' },
      width: "auto"
    },
    boldText: {
      fontWeight: "500",
      fontSize: "12px",
      color: theme.strongTextColor,
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
      borderRadius: "15px",
      border: "solid",
      borderColor:theme.cardDetailBorder
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
      gap: "2vh",
      mt:"20px"
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
      border: "solid",
      borderColor:theme.cardDetailBorder,
      opacity: "0.9",
      ':hover': {
        opacity: "0.95"
      },
    }
  };
  };
  
  export default useDetailStyles;