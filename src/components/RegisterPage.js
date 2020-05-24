import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import EmailAndPasswordForm from './EmailAndPasswordForm';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8)
  },
  h1: {
    margin: theme.spacing(0),
    textAlign: 'center'
  },
  link: {
    marginBottom: theme.spacing(2)
  }
}));

function RegisterPage() {
  const classes = useStyles();

  function handleRegister(email, password) {
    console.log('Submit Register');
    console.log('email', email);
    console.log('password', password);
  }

  return (
    <Container className={classes.main} maxWidth="xs">
        <h1 className={classes.h1} id="title">Cadastro</h1>
        <EmailAndPasswordForm
          buttonLabel="Cadastrar-se"
          callback={handleRegister}
        />

        <Grid container justify="flex-end">
          <Grid item className={classes.link}>
            <Link
              underline="none"
              id="login"
              component={RouterLink}
              to="/"
            >
              Já possuo conta
            </Link>
          </Grid>
        </Grid>
    </Container>
  );
}

export default RegisterPage;
