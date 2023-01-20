import React from "react";

import { Box, IconButton, Popover } from "@material-ui/core";

import { MoreVert as MoreIcon } from "@material-ui/icons";

import { useStyles } from "./styles";

/**
 *
 * Botão genérico que abstrai a lógica de um botão
 * que abre uma popover abaixo dele com opções
 *
 *
 * actions = [{ title: string, onPress: Function, isExcluir: boolean }]  (recebe as actions (cada botão que esta na popover))
 *
 *
 * Exemplo de uso:
 *
 * <BotaoConfigPopover
 *      actions={[
 *          { title: 'Editar', onPress: () => alert('Editar') },
 *          { title: 'Excluir', isExcluir: true, onPress: () => alert('Excluir') },
 *      ]}
 *  />
 *
 */
export default function BotaoConfigPopover({ actions = [] }) {
  const [popoverFiltroAnchorEl, setPopoverFiltroAnchorEl] =
    React.useState(null);

  const classes = useStyles();

  // popover
  const open = Boolean(popoverFiltroAnchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setPopoverFiltroAnchorEl(null);
  };

  const handleOpen = (event) => {
    setPopoverFiltroAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <IconButton
        color="primary"
        classes={{ root: classes.moreButton }}
        aria-owns="widget-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <MoreIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={popoverFiltroAnchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box p={1} className={classes.popoverBox}>
          {actions.map((action, index) => (
            <Box
              key={index}
              className={classes.popoverAction}
              onClick={action.onPress}
            >
              {action.title}
            </Box>
          ))}
        </Box>
      </Popover>
    </Box>
  );
}
