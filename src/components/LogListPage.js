import React, { useState } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header'
import SearchBarAndOptions from './SearchBarAndOptions';
import LogTable from './LogTable';
import MobileLogTable from './MobileLogTable';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2)
  }
}));

const createData = (id, level, description, source, date, events) => (
  { id, level, description, source, date, events }
);

function LogListPage() {
  const classes = useStyles();

  const longDesc = 'asdfghjkl qwertyuio zxcvbnm wertyu edrfghyujk sdfvgbhn ' +
      'qwsdfghjkm xzcvfghujiko sedfcvhjbctghjgc sdfghbghjwsedrftyuivbn'

  const data = [
    createData(1, 'error', 'desc 1', '1.1.1.1', '11-11-1111', 1000),
    createData(2, 'warning', 'desc 2', '2.2.2.2', '22-22-2222', 2000),
    createData(3, 'debug', 'desc 3', '3.3.3.3', '33-33-3333', 3000),
    createData(4, 'debug', longDesc, '3.3.3.3', '33-33-3333', 3000),
    createData(5, 'error', 'desc 5', '5.5.5.5', '55-55-5555', 5000),
  ]

  const isMdUp = useMediaQuery('(min-width:960px)') || false;

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = 75;

  return (
    <>
      <Header />
      <div className={classes.margin}>
        <SearchBarAndOptions />
        { isMdUp ? <LogTable rows={data} /> : <MobileLogTable rows={data} /> }
        <TablePagination
          component="div"
          page={page}
          count={totalPages}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
          onChangePage={(e, page) => setPage(page)}
        />
      </div>
    </>
  );
}

export default LogListPage;
