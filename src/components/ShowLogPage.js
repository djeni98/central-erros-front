import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';

import Header from './Header'
import LevelChip from './LevelChip';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2)
  },
  marginTop: {
    marginTop: theme.spacing(2)
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(4)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing(2),
  }
}));

function ShowLogPage(props) {
  const classes = useStyles();

  const history = useHistory();

  const id = props.match.params.id;
  
  const data = {
    id: id,
    level: 'Error',
    description: 'desc 1',
    source: '11.11111.1111.1',
    date: '12-34-5678',
    events: 2,
    details: 'details',
    collectedBy: ''
  };

  return (
    <>
      <Header />
      <div className={classes.margin}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.marginTop}
          startIcon={<ArrowBackIcon />}
          onClick={(e) => history.goBack()}
        >
          Voltar
        </Button>

        <Typography variant="h4" component="h1" className={classes.marginTop}>
          {data.level} Log no {data.source} em {data.date}
        </Typography>

        <Grid container className={classes.marginTop} spacing={2}>
          <Grid item xs={12}>
            <LevelChip label={data.level} />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant="h6">Título</Typography>
            <p>{data.description}</p>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h6">Eventos</Typography>
            <p>{data.events}</p>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant="h6">Detalhes</Typography>
            <p>{data.details}</p>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h6">Coletado Por</Typography>
            <p>{data.collectedBy}</p>
          </Grid>
        </Grid>

        <div className={classes.buttons}>
          <Button
            variant="outlined"
            color="secondary"
            id="archive-button"
            className={classes.button}
            startIcon={<ArchiveIcon />}
          >
            Arquivar
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            id="delete-button"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Apagar
          </Button>
        </div>
      </div>
    </>
  );
}

export default ShowLogPage;
