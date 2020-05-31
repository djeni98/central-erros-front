import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

import UserDrawer from './UserDrawer';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  toolbar: {
    marginBottom: theme.spacing(2)
  }
}));

function Header() {
  const token = 'asdfghjklqwertyuiopzxcv';
  const email = "test@test.com"

  const classes = useStyles();
  const history = useHistory();
  const [drawer, setDrawer] = useState(false);

  function handleLogout() {
    history.push('/');
  }

  return (
    <>
      <AppBar>
        <Toolbar position="fixed">
          <span className={classes.title}>
            <Typography
              variant="h5"
              display="inline"
              id="welcome"
            >
              Bem-vindo.
            </Typography>
            <Hidden only="xs">
              <Typography
                variant="body1"
                display="inline"
                id="token"
              >
                { ` Seu token é: ${token}.` }
              </Typography>
            </Hidden>
          </span>
          <IconButton
            edge="end"
            aria-label="menu"
            color="inherit"
            id="drawer-button"
            onClick={e => setDrawer(true)}
          >
            <PersonIcon id="menu-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />

      <UserDrawer
        id="user-drawer"
        email={email}
        token={token}
        drawer={drawer}
        setDrawer={setDrawer}
        handleLogout={handleLogout}
      />
    </>
  );
}

export default Header;
