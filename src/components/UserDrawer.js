import React from 'react';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import CloseIcon from '@material-ui/icons/Close';
import ExitIcon from '@material-ui/icons/ExitToApp';
import AccountIcon from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  avatar: {
    fontSize: 100,
    color: 'rgba(0, 0, 0, 0.54)'
  },
  center: {
    justifyContent: 'center'
  },
  end: {
    justifyContent: 'end'
  }
}));

function UserDrawer(props) {
  const { email, token } = props;

  const classes = useStyles();
  const { drawer, setDrawer } = props;

  function toggleDrawer(e, open) {
    if (e.type === 'keydown' &&
          (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setDrawer(open);
  }

  const typographyProps = {
    align: 'right',
    style: {
      wordBreak: 'break-all'
    }
  };

  const isSmUp = useMediaQuery('(min-width:600px)');

  const paperProps = {
    style: {
      minWidth: isSmUp ? '300px' : '200px',
      maxWidth: '85%'
    }
  };

  return (
    <Drawer
      id={props.id}
      anchor="right"
      open={drawer}
      onClose={e => toggleDrawer(e, false)}
      PaperProps={paperProps}
    >
      <List>
        <ListItem className={classes.end}>
          <IconButton
            id="close-button"
            aria-label="close"
            onClick={e => toggleDrawer(e, false)}
          >
            <CloseIcon id="close-icon"/>
          </IconButton>
        </ListItem>
        <ListItem className={classes.center}>
          <AccountIcon className={classes.avatar} />
        </ListItem>

        <ListItem>
          <ListItemText
            id="email"
            primary="Email"
            secondary={email}
            primaryTypographyProps={typographyProps}
            secondaryTypographyProps={typographyProps}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            id="token"
            primary="Token"
            secondary={token}
            primaryTypographyProps={typographyProps}
            secondaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem />
        <ListItem>
          <Button
            id="logout-button"
            fullWidth
            color="secondary"
            variant="outlined"
            endIcon={<ExitIcon id="exit-icon" />}
          >
            Logout
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default UserDrawer;
