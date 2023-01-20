import { Button, Grid, IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
// styles

// components
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../components/PageTitle/PageTitle";
import BotaoConfigPopover from "../dashboard/components/BotaoConfigPopover";

export default function Producao() {
  const datatableData = [
    [
      <img
      src={'https://www.w3schools.com/howto/img_avatar.png'}
      width="75"
      height="75"
      style={{ borderRadius: "50%" }}
    />,
      "Joe James",
      "R2 Prod.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
    ],
    [
       <img
      src={'https://www.w3schools.com/howto/img_avatar.png'}
      width="75"
      height="75"
      style={{ borderRadius: "50%" }}
    />,
      "Janaina Alves",
      "Example Inc.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
    ],
    [
       <img
      src={'https://www.w3schools.com/howto/img_avatar.png'}
      width="75"
      height="75"
      style={{ borderRadius: "50%" }}
    />,
      "Jeff Bezos",
      "Amazon Inc.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
    ],
    [
       <img
      src={'https://www.w3schools.com/howto/img_avatar.png'}
      width="75"
      height="75"
      style={{ borderRadius: "50%" }}
    />,
      "James Houston",
      "Example Inc.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
    ],
    [
       <img
      src={'https://www.w3schools.com/howto/img_avatar.png'}
      width="75"
      height="75"
      style={{ borderRadius: "50%" }}
    />,
      "João Roberto",
      "Globo Inc.",
      "076.721.455.88",
      "(61) 88855-2266",
      "fulanodetal@gmail.com",
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
  const [openModalAdicionarProdutor, setOpenModalAdicionarProdutor] =
    React.useState(false);

  function CustomToolbar() {
    return (
      <Tooltip title={"Adicionar Produtor"}>
        <Button
          variant="contained"
          size="small"
          style={{ textTransform: "capitalize" }}
          color="primary"
          onClick={() => {
            setOpenModalAdicionarProdutor(true);
          }}
          startIcon={<AddIcon />}
        >
          Adicionar Produtor
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
    <>
      <PageTitle title="Controle de Produção" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <CustomToolbar />
            </Grid>
            <Grid item xs={12} md={12}>
              <MUIDataTable
                options={options}
                title="Produtores"
                data={datatableData}
                columns={columns}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
