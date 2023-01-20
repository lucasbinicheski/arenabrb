import { Button, Grid, Paper, Typography } from "@material-ui/core";
import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

// styles
import useStyles from "./styles";

// logo

export default function Error() {
  var classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotype}>
        {/* <img className={classes.logotypeIcon} src={logo} alt="logo" /> */}
        <Typography variant="h3" color="white" className={classes.logotypeText}>
          Arena Admin
        </Typography>
      </div>
      <Paper classes={{ root: classes.paperRoot }}>
        <Typography
          variant="h1"
          color="primary"
          className={classnames(classes.textRow, classes.errorCode)}
        >
          404
        </Typography>
        <Typography variant="h5" color="primary" className={classes.textRow}>
          Ops, página não encontrada, ou você não tem permissão para acessá-la.
        </Typography>
        <Typography
          variant="h6"
          color="text"
          colorBrightness="secondary"
          className={classnames(classes.textRow, classes.safetyText)}
        >
          Mas não se preocupe, você pode voltar a página inicial.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
          size="large"
          className={classes.backButton}
        >
          Início
        </Button>
      </Paper>
    </Grid>
  );
}
