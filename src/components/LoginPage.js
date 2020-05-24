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

function LoginPage() {
  const classes = useStyles();

  function handleLogin(email, password) {
    console.log('Submit Login');
    console.log('email', email);
    console.log('password', password);
  }

  return (
    <Container className={classes.main} maxWidth="xs">
        <h1 className={classes.h1} id="title">Login</h1>
        <EmailAndPasswordForm
          buttonLabel="Entrar"
          callback={handleLogin}
        />

        <Grid container justify="space-between">
          <Grid item className={classes.link}>
            <Link
              underline="none"
              id="recover-password"
              component={RouterLink}
              to="/recuperar"
            >
              Esqueci minha senha
            </Link>
          </Grid>
          <Grid item className={classes.link}>
            <Link
              underline="none"
              id="register"
              component={RouterLink}
              to="/cadastro"
            >
              Cadastre-se
            </Link>
          </Grid>
        </Grid>
    </Container>
  );
}

export default LoginPage;
