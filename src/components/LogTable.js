import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';

import LevelChip from './LevelChip';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    margin: theme.spacing(1),
  },
  level: {
    width: '90px',
    textAlign: 'center'
  },
  word: {
    wordBreak: 'break-all'
  }
}));

function LogTable(props) {
  const classes = useStyles();

  const rows = props.rows || [];

  const cols = [
    // { field: 'id', label: 'ID' },
    // { field: 'level', label: 'Nível' },
    { field: 'source', label: 'Origem' },
    { field: 'date', label: 'Data' },
    { field: 'description', label: 'Descrição' },
    { field: 'events', label: 'Eventos' }
  ];

  return (
    <>
    <div id="action-buttons" className={classes.buttons}>
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

    <Table id="table">
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          <TableCell className={classes.level}>
            Nível
          </TableCell>
          {cols.map(col => (
            <TableCell key={col.field}>
              {col.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell className={classes.level}>
              <LevelChip label={row.level} />
            </TableCell>
            <TableCell className={classes.word}>
              {row.source}
            </TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell className={classes.word}>
              {row.description}
            </TableCell>
            <TableCell>{row.events}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  );
}

export default LogTable;
