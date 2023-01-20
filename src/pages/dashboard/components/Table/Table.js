import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip,
  Checkbox,
} from "@material-ui/core";
import useStyles from "../../styles";
import BotaoConfigPopover from "../BotaoConfigPopover";
import qrmockado from "./qrmockado.jpeg";
import PrintIcon from "@material-ui/icons/Print";

const states = {
  apto: "success",
  pending: "warning",
  banido: "secondary",
};

export default function TableColaboradoresComponent({ data }) {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsCheckedAll(event.target.checked);
    // Realizar ação específica com o estado do checkbox
  };

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          <TableCell>
            {" "}
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </TableCell>
          <TableCell>Foto </TableCell>
          <TableCell>Nome Colaborador</TableCell>
          <TableCell>Cpf</TableCell>
          <TableCell>Número</TableCell>
          <TableCell>Empresa</TableCell>
          <TableCell>QR Code</TableCell>
          <TableCell>Status</TableCell>
          <TableCell align={"center"}>Imprimir Pulseira</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(
          ({
            id,
            foto,
            name,
            cpf,
            numero,
            empresa,
            status,
            impressoraIcon,
          }) => (
            <TableRow key={id}>
              <TableCell>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src={foto}
                  width="60"
                  height="60"
                  style={{ borderRadius: "50%" }}
                />
              </TableCell>
              <TableCell className="pl-3 fw-normal">{name}</TableCell>
              <TableCell>{cpf}</TableCell>
              <TableCell>{numero}</TableCell>
              <TableCell>{empresa}</TableCell>
              <TableCell>
                {" "}
                <img
                  src={qrmockado}
                  alt="QR Code"
                  width="50"
                  height="50"
                />{" "}
              </TableCell>
              <TableCell>
                {status === "Apto" ? (
                  <Chip
                    label={status}
                    style={{ backgroundColor: "#4caf50", color: "#fff" }}
                  />
                ) : status === "Banido" ? (
                  <Chip
                    label={status}
                    style={{ backgroundColor: "#f44336", color: "#fff" }}
                  />
                ) : (
                  <Chip
                    label={status}
                    style={{ backgroundColor: "gray", color: "#fff" }}
                  />
                )}
              </TableCell>
              <TableCell align={"center"}>
                <PrintIcon
                  style={{ cursor: "pointer" }}
                  alt="Imprimir Pulseira"
                />
              </TableCell>
              <TableCell>
                <BotaoConfigPopover
                  actions={[
                    {
                      title: "Editar",
                      // onPress: () => handleAbrirModalAdicionarSituacao(situacao),
                    },
                    {
                      title: "Excluir",
                      isExcluir: true,
                      onPress: () => {
                        // handleAbrirModalDeletarSituacao(situacao);
                      },
                    },
                  ]}
                />
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}
