import { Box, Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';

import ModalComTitulo from '../../ModalComTitulo';

const ModalDeletarProdutor = (
  //props do modal
  { abrirModalDeletarProdutor, handleFecharModalDeletarProdutor }
) => {
   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClickDelete = async () => {
    setLoading(true);
   /*  await deleteDeletaTipoDocumento(
      documentoBody?.id,
      documentoBody?.tipo_documento === 'Membro' ? 1 : documentoBody?.tipo_documento === 'Inscrição' ? 2 : null
    )
      .then(() => {
        handleFecharModalDeletarProdutor();
        dispatch(listarDocumentoTodosTipos(0, 10));
        setError(false);
      })
      .catch(() => {
        setError(true);
      }); */
    setLoading(false);
  };

  return (
    <ModalComTitulo
      open={abrirModalDeletarProdutor}
      onClose={handleFecharModalDeletarProdutor}
      titulo={'Deletar Projeto'}
    >
      <Grid container spacing={4} center style={{ textAlign: 'center' }}>
        <Grid item xs={12} sm={12}>
          {error === true && (
            <Box padding={2} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="body1" color="error">
                Ocorreu um erro ao deletar
              </Typography>
            </Box>
          )}
          <Typography style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: 5 }}>
            Tem certeza que deseja deletar Documento ?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            onClick={() => handleClickDelete()}
            size="small"
            variant="outlined"
            // color="primary"
            style={{ color: 'white', backgroundColor: 'red', textTransform: 'capitalize', marginRight: '2%' }}
          >
            {loading === true ? <CircularProgress size={20} color="white" /> : 'Deletar'}
          </Button>

          <Button
            size="small"
            variant="contained"
            color="secondary"
            style={{ textTransform: 'capitalize' }}
            onClick={handleFecharModalDeletarProdutor}
          >
            Fechar
          </Button>
        </Grid>
      </Grid>
    </ModalComTitulo>
  );
};

export default ModalDeletarProdutor;
