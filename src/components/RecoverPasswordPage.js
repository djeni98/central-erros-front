import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8)
  },
  h1: {
    margin: theme.spacing(0),
    textAlign: 'center'
  },
  p: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(3, 0, 2)
  },
  link: {
    marginBottom: theme.spacing(2)
  }
}));

function RecoverPasswordPage() {
  const classes = useStyles();

  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Submit Recover Password');
    console.log('email', email);
  }

  return (
    <Container className={classes.main} maxWidth="xs">
      <h1 className={classes.h1} id="title">Recuperar senha</h1>
      <p className={classes.p}>
        Enviaremos um email para poder trocar sua senha.
      </p>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Email"
        id="email"
        name="email"
        type="email"
        onChange={e => setEmail(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        id="button-submit"
        className={classes.button}
        onClick={handleSubmit}
      >
        Enviar
      </Button>

      <Grid container justify="flex-end">
        <Grid item className={classes.link}>
          <Link
            underline="none"
            id="login"
            component={RouterLink}
            to="/"
          >
            Voltar ao login
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RecoverPasswordPage;
