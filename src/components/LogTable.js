import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import ShowIcon from '@material-ui/icons/Visibility';

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

  const history = useHistory();

  const cols = [
    // { field: 'id', label: 'ID' },
    // { field: 'level', label: 'Nível' },
    { field: 'source', label: 'Origem' },
    { field: 'date', label: 'Data' },
    { field: 'description', label: 'Descrição' },
    { field: 'events', label: 'Eventos' }
  ];

  const [selected, setSelected] = useState([]);

  const deleteFunction = props.deleteFunction || console.log;
  const archiveFunction = props.archiveFunction || console.log;

  function selectAll(e) {
    if (e.target.checked) {
      const all = rows.map(r => r.id);
      setSelected(all);
    } else {
      setSelected([]);
    }
  }

  function selectItem(e, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }

  const total = rows.length;
  const numSelected = selected.length;

  return (
    <>
    <div id="action-buttons" className={classes.buttons}>
      <Button
        variant="outlined"
        color="secondary"
        id="archive-button"
        className={classes.button}
        startIcon={<ArchiveIcon />}
        onClick={(e) => archiveFunction(selected)}
      >
        Arquivar
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        id="delete-button"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={(e) => deleteFunction(selected)}
      >
        Apagar
      </Button>
    </div>

    <Table id="table">
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < total}
              checked={total > 0 && numSelected === total}
              onChange={selectAll}
            />
          </TableCell>
          <TableCell className={classes.level}>
            Nível
          </TableCell>
          {cols.map(col => (
            <TableCell key={col.field}>
              {col.label}
            </TableCell>
          ))}
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            selected={selected.includes(row.id)}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={selected.includes(row.id)}
                onChange={e => selectItem(e, row.id)}
              />
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
            <TableCell align="right">{row.events}</TableCell>
            <TableCell>
              <Button
                size="small"
                color="primary"
                onClick={() => history.push(`/logs/${row.id}`)}
                startIcon={<ShowIcon />}
              >
                Exibir
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  );
}

export default LogTable;
