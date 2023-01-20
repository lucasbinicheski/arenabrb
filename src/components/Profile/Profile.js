import React, { useState } from "react";
import {
  TextField,
  Avatar,
  Button,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PageTitle from "../PageTitle/PageTitle";

const useStyles = makeStyles({
  avatar: {
    width: "110px",
    height: "110px",
    margin: "auto",  },
  button: {
    margin: "25px 0",
  },
});

const Profile = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [accessLevel, setAccessLevel] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://ef564920920608e03abb-7d34ef097b6ab6c586dfc84157128505.ssl.cf1.rackcdn.com/PostImagem/36734/foto-de-perfil-profissional_o1eh30s23krp31qn41l3havc2fti.JPG"
  );

  const handleUpdate = () => {
    // Code to update profile information goes here
  };

  return (
    <>
      <PageTitle title="Perfil" />

      <Paper
        style={{
          padding: "3%",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={12}>
            <Avatar src={profileImage} className={classes.avatar} />
          </Grid>

          <Grid item xs={6} sm={3}>
            <TextField
              disabled
              label="Nome"
              value="Lucas Binicheski"
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              disabled
              label="Email"
              value="Lucasmbinicheski@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={6} sm={3}>
            <TextField
              disabled
              label="CPF"
              value="076.721.331-58"
              onChange={(e) => setCpf(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              disabled
              label="Telefone"
              value="(61) 9 98633-8288"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>

          <Grid item xs={6} sm={3}>
            <TextField
              disabled
              label="Nascimento"
              value="10/10/1999"
              onChange={(e) => setAccessLevel(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              disabled
              label="Nível de acesso"
              value="ADMIN"
              onChange={(e) => setAccessLevel(e.target.value)}
            />
          </Grid>

          <Grid item xs={6} sm={12}>
            <Button
              variant="contained"
              color="primary"
              size={"small"}
              disabled
              style={{ textTransform: "capitalize" }}
              onClick={handleUpdate}
              className={classes.button}
            >
              Atualizar informações
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Profile;
