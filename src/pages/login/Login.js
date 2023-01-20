import {
  Button,
  CircularProgress,
  Divider,
  Fade,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// styles
import useStyles from "./styles";

// logo

// context
import { loginUser, useUserDispatch } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        {/* <img src={google} alt="logo" className={classes.logotypeImage} /> */}
        {/* <Typography className={classes.logotypeText}>Arena BRB</Typography> */}
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <React.Fragment>
            <Divider />
            <Typography variant="h1" className={classes.greeting}>
              Arena BRB
            </Typography>
            <Typography
              variant="h6"
              className={classes.greeting}
              style={{ color: "black" }}
            >
              Seja bem-vindo!
            </Typography>

            <Fade in={error}>
              <Typography color="secondary" className={classes.errorMessage}>
                Login ou senha incorretos!
              </Typography>
            </Fade>
            <TextField
              id="email"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
              margin="normal"
              placeholder="Usuário "
              type="username"
              fullWidth
            />
            <TextField
              id="password"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              margin="normal"
              placeholder="Senha"
              type="password"
              fullWidth
            />
            <div className={classes.formButtons}>
              {isLoading ? (
                <CircularProgress size={26} className={classes.loginLoader} />
              ) : (
                <Button
                  disabled={
                    loginValue.length === 0 || passwordValue.length === 0
                  }
                  onClick={() =>
                    loginUser(
                      userDispatch,
                      loginValue,
                      passwordValue,
                      props.history,
                      setIsLoading,
                      setError
                    )
                  }
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Entrar
                </Button>
              )}
            </div>

            <Divider style={{ marginTop: "7%" }} />
          </React.Fragment>
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
