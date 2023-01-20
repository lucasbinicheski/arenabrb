import { makeStyles } from "@material-ui/styles";
import backteste from "./backteste.jpeg";
export default makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  logotypeContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundSize: "cover",
    alignItems: "center",
  },
  logotypeImage: {
    width: 165,
  },
  logotypeText: {
    color: "white",
    fontWeight: 500,
    fontSize: 80,
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
  },
  formContainer: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "60%",
  },
  tab: {
    fontWeight: 400,
    fontSize: 18,
  },
  greeting1: {
    fontWeight: 600,
    color: "black",
    textAlign: "center",
  },
  greeting: {
    fontWeight: 500,
    color: "black",
    textAlign: "center",
    marginTop: "4%",
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop: "2%",
  },
  googleButton: {
    marginTop: "2%",
    boxShadow: theme.customShadows.widget,
    backgroundColor: "black",
    width: "100%",
    textTransform: "none",
  },
  googleButtonCreating: {
    marginTop: 0,
  },
  googleIcon: {
    width: 30,
    marginRight: "2%",
  },
  creatingButtonContainer: {
    height: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountButton: {
    height: 46,
    textTransform: "none",
  },
  formDividerContainer: {
    display: "flex",
    alignItems: "center",
  },
  formDividerWord: {
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
    backgroundColor: theme.palette.text.hint + "40",
  },
  errorMessage: {
    textAlign: "center",
  },
  textFieldUnderline: {
    color: "black",
    "&:before": {
      borderBottomColor: theme.palette.primary.light,
    },
    "&:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "&:hover:before": {
      borderBottomColor: `${theme.palette.primary.light} !important`,
    },
  },
  textField: {
    borderBottomColor: theme.palette.background.light,
    color: "black",
  },
  formButtons: {
    width: "100%",
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  forgetButton: {
    textTransform: "none",
    fontWeight: 400,
  },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  copyright: {
    marginTop: theme.spacing(4),
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: "2%",
    },
  },
}));
