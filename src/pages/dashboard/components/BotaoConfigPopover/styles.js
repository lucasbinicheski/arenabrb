import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  popoverBox: {
    width: 100,
    display: 'flex',
    flexDirection: 'column',
  },

  popoverAction: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontFamily: 'Roboto, arial, sans-serif',
    padding: '3px',
    cursor: 'pointer',
    borderBottom: '1px solid #B9B9B9',
    '&:hover': {
      backgroundColor: '#f1f1f1',
    },
  },

  popoverActionExcluir: {
    fontWeight: '500',
    fontFamily: 'Roboto, arial, sans-serif',
    padding: '3px',
    cursor: 'pointer',
    borderBottom: '1px solid #B9B9B9',
    '&:hover': {
      backgroundColor: '#f1f1f1',
    },
    color: 'red',
  },
});
