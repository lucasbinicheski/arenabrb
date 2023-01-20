import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import { Line, LineChart } from "recharts";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Typography } from "../../components/Wrappers/Wrappers";
import TableColaboradores from "./components/Table/Table";
import mock from "./mock";

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  //dia e mes atual formatados
  const dia_mes_atual = new Date();
  const dia = dia_mes_atual.getDate();
  const mes = dia_mes_atual.getMonth() + 1;
  const ano = dia_mes_atual.getFullYear();

  //corrigir futuramente
  const data_atual = dia + "/" + "0" + mes + "/" + ano;

  return (
    <>
      <PageTitle title="Controle de acesso" />

      <Grid container spacing={4}>
        <Grid item lg={8} md={8} sm={8} xs={12}>
          <Widget
            title="Visitas Mensais"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Grid container item alignItems={"center"}>
                <Grid item xs={6}>
                  <Typography size="xl" weight="medium" noWrap>
                    12, 678
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LineChart
                    width={100}
                    height={30}
                    data={[
                      { value: 10 },
                      { value: 15 },
                      { value: 10 },
                      { value: 17 },
                      { value: 18 },
                    ]}
                  >
                    <Line
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.success.main}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </Grid>
              </Grid>
            </div>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              style={{ marginTop: "2%" }}
            >
              <Grid item xs={12} sm={12}>
                <Typography color="text" colorBrightness="black" noWrap>
                  Data: {data_atual}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="text" colorBrightness="secondary" noWrap>
                  Entradas
                </Typography>
                <Typography size="md">860</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="text" colorBrightness="secondary" noWrap>
                  Saídas
                </Typography>
                <Typography size="md">32</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography color="text" colorBrightness="secondary" noWrap>
                  Porcentagem de visitas hoje
                </Typography>
                <Typography size="md">3.25%</Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid>

        <Grid item xs={12}>
          <Widget
            title={`Colaboradores data: ${data_atual}`}
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <TableColaboradores data={mock.tableColaborador} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
