import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(3, 0, 2)
  },
}));

function EmailAndPasswordForm(props) {
  const classes = useStyles();

  const buttonLabel = props.buttonLabel || 'Enviar';
  const callback = props.callback || console.log;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    callback(email, password);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Email"
        id="email"
        name="email"
        type="email"
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Senha"
        id="password"
        name="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        id="button-submit"
        className={classes.button}
      >
        { buttonLabel }
      </Button>
    </form>
  );
}

export default EmailAndPasswordForm;
