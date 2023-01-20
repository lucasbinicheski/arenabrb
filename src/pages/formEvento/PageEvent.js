import {
  Button,
  CircularProgress,
  Fade,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// styles
import useStyles from "./styles";
import { createTheme } from "@material-ui/core/styles";
// logo
import backteste from "./backteste.jpeg";
 // context
import { CSVLink } from "react-csv";
import { useUserDispatch } from "../../context/UserContext";

function PageEvent(props) {
  var classes = useStyles();

   const [verificandoExcel, setVerificandoExcel] = useState(false);
  const [excelAceito, setExcelAceito] = useState(false);

  // global
  var userDispatch = useUserDispatch();
  const theme = createTheme();
  console.log("🚀 ~ file: PageEvent.js:39 ~ PageEvent ~ theme", theme)
  // local
  var [error, setError] = useState(null);
  var [file, setFile] = useState();
  const isMobile = useMediaQuery(theme?.breakpoints?.down("sm") );

  const onUploadCSV = async (e) => {
    const csv = e.target.files[0];
    setFile(csv);
  };

  const onClickEnviaExcel = async (e) => {
    setVerificandoExcel(true);
    setTimeout(() => {
      setExcelAceito(true);
      setVerificandoExcel(false);
      props.history.push("/produtor");
    }, 4000);
  };

  const styleConst = {
    backgroundImage: `url(${/* isMobile ? testemob2 : */ backteste})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer} style={styleConst}>
         <div className={classes.formContainer}>
 
          <Paper
            style={{
              backgroundColor: "#f2f5fa",
              borderRadius: "2%",
              maxHeight: "80%",
              maxWidth: "100%",

              overflow: "auto",
            }}
            elevation={3}
          >
            <Grid xs={12} sm={12} style={{ padding: "10%" }}>
              <Typography variant="h1" className={classes.greeting1}>
                Arena BRB
              </Typography>
              <Typography variant="h4" className={classes.greeting}>
                Seja bem-vindo produtor!
              </Typography>
              <Typography variant="body1" className={classes.greeting}>
                Envie um excel com os dados dos colaboradores e aguarde a
                aprovação.
              </Typography>

              <CSVLink
                filename="arena-colaboradores.csv"
                separator=";"
                data={[]}
                headers={[
                  { key: "nome_completo", label: "Nome Completo" },
                  { key: "cpf", label: "Cpf" },
                  { key: "telefone", label: "Telefone" },
                  { key: "empresa", label: "Empresa" },
                  { key: "servico", label: "Serviço" },
                ]}
              >
                <Button
                  style={{ marginTop: "7%" }}
                  color="primary"
                  variant="text"
                  size="small"
                >
                  Baixar modelo
                </Button>
              </CSVLink>

              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Excel com dados incorretos!
                </Typography>
              </Fade>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="label"
                 >
                  Anexo
                </Typography>
                <br />
               
                <Button
                  variant="outlined"
                  size="small"
                  onChange={onUploadCSV}
                  component="label"
                  style={{ textTransform: "initial" }}
                >
                  Upload Excel
                  <input
                    type="file"
                    id="anexo"
                    name="anexo"
                    hidden
                    accept=".csv,.xlsx,.xls"
                  />
                </Button>
                <Typography variant="label" style={{ marginLeft: "2%" }}>
                  {file?.name}
                </Typography>
              </Grid>

              <Grid
                item
                display="flex"
                alignItems="center"
                style={{ marginTop: "6%" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  style={{ textTransform: "initial", marginTop: "4%" }}
                  onClick={onClickEnviaExcel}
                  disabled={!file?.name || verificandoExcel || excelAceito}
                >
                  {verificandoExcel ? (
                    <>
                      <CircularProgress size={25} />
                      Verificando Excel
                    </>
                  ) : excelAceito ? (
                    " Excel aceito com sucesso! "
                  ) : (
                    "Enviar Excel"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(PageEvent);
