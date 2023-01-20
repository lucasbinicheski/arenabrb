import classnames from "classnames";
import React from "react";

//icons

// styles
import useStyles from "./styles";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// pages
import AddIcon from "@material-ui/icons/Add";
// context
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useLayoutState } from "../../context/LayoutContext";
import BotaoConfigPopover from "../../pages/dashboard/components/BotaoConfigPopover";
import PageTitle from "../PageTitle/PageTitle";

function Produtor(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  const datatableData = [
    [
      <img
        src={"https://www.w3schools.com/howto/img_avatar.png"}
        width="90"
        height="90"
        style={{ borderRadius: "50%" }}
      />,
      "Joao Silva",
      "Example Inc.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
      "12/12/2023",
    ],
    [
      <img
        src={"https://www.w3schools.com/howto/img_avatar.png"}
        width="90"
        height="90"
        style={{ borderRadius: "50%" }}
      />,
      "John Walsh",
      "Example Inc.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
      "12/12/2023",
    ],
    [
      <img
        src={"https://www.w3schools.com/howto/img_avatar.png"}
        width="90"
        height="90"
        style={{ borderRadius: "50%" }}
      />,
      "Bob Herm",
      "Example Inc.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
      "12/12/2023",
    ],
    [
      <img
        src={"https://www.w3schools.com/howto/img_avatar.png"}
        width="90"
        height="90"
        style={{ borderRadius: "50%" }}
      />,
      "James Houston",
      "Example Inc.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
      "12/12/2023",
    ],
    [
      <img
        src={"https://www.w3schools.com/howto/img_avatar.png"}
        width="90"
        height="90"
        style={{ borderRadius: "50%" }}
      />,
      "Prabhakar Linwood",
      "Example Inc.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
      "12/12/2023",
    ],
  ];
  const columns = [
    {
      name: "Foto",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "Nome",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Empresa",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Cpf",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Telefone",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Valido até",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Ações",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <IconButton onClick={() => console.log(tableMeta.rowIndex)}>
              <BotaoConfigPopover
                actions={[
                  { title: "Editar", onPress: () => alert("Editar") },
                  {
                    title: "Excluir",
                    isExcluir: true,
                    onPress: () => alert("Excluir"),
                  },
                ]}
              />
            </IconButton>
          );
        },
      },
    },
  ];
  const [openModalAdicionarColaborador, setOpenModalAdicionarColaborador] =
    React.useState(false);

  function CustomToolbar() {
    return (
      <Tooltip title={"Adicionar Colaborador"}>
        <Button
          variant="contained"
          size="small"
          style={{ textTransform: "capitalize" }}
          color="primary"
          onClick={() => {
            setOpenModalAdicionarColaborador(true);
          }}
          startIcon={<AddIcon />}
        >
          Adicionar Colaborador
        </Button>
      </Tooltip>
    );
  }

  const options = {
    filter: true,
    search: true,
    selectableRows: false,
    print: false,
    download: false,
    viewColumns: false,
    textLabels: {
      body: {
        noMatch: "Nenhum registro encontrado",
        toolTip: "Classificar",
      },
      pagination: {
        next: "Próxima página",
        previous: "Página anterior",
        rowsPerPage: "Linhas por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Pesquisar",
        downloadCsv: "Baixar CSV",
        print: "Imprimir",
        viewColumns: "Exibir Colunas",
        filterTable: "Filtrar Tabela",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Limpar",
      },
      viewColumns: {
        title: "Exibir Colunas",
        titleAria: "Exibir/Ocultar Colunas da Tabela",
      },
      selectedRows: {
        text: "linha(s) selecionada(s)",
        delete: "Excluir",
        deleteAria: "Excluir Linhas Selecionadas",
      },
    },
  };
  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar produtorPage={true} />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <PageTitle title="Controle de Equipe" />
          <Grid container spacing={1}>
            <Paper elevation={3} className={classes.paper}>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom display="inline">
                  Evento: Gusttavo Lima
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom display="inline">
                  Data: 12/12/2020
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom display="inline">
                  Data Final: 13/12/2020
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom display="inline">
                  Empresa: Funn Entretenimento
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid container spacing={4} style={{ marginTop: "2%" }}>
            <Grid item xs={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <CustomToolbar />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MUIDataTable
                    options={options}
                    title="Colaboradores"
                    data={datatableData}
                    columns={columns}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    </div>
  );
}

export default Produtor;
