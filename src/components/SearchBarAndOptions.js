import React, { useState } from 'react';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    flexGrow: 1,
    margin: theme.spacing(1),
    minWidth: 120,
  },
  searchBarControl: {
    flexGrow: 3,
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

function SearchBarAndOptions(props) {
  const classes = useStyles();

  const [environment, setEnvironment] = useState(0);
  const environmentOptions = [
    { value: 0, label: 'Todos' },
    { value: 1, label: 'Produção' },
    { value: 2, label: 'Homologação' },
    { value: 3, label: 'Desenvolvimento' }
  ];

  const [order, setOrder] = useState(0);
  const orderOptions = [
    { value: 0, label: 'Todos' },
    { value: 1, label: 'Nível' },
    { value: 2, label: 'Frequencia' },
  ];

  const [searchBy, setSearchBy] = useState(0);
  const searchByOptions = [
    { value: 0, label: 'Todos' },
    { value: 1, label: 'Nível' },
    { value: 2, label: 'Descrição' },
    { value: 3, label: 'Origem' }
  ];

  const [search, setSearch] = useState('');
  
  const callback = props.callback || console.log;
  function handleSearch() {
    callback({
      environment,
      order,
      searchBy,
      search
    });
  }

  return (
    <form className={classes.form}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="environment">Ambiente</InputLabel>
        <Select
          native
          value={environment}
          onChange={e => setEnvironment(e.target.value)}
          label="Ambiente"
          inputProps={{
            name: 'environment',
            id: 'environment'
          }}
        >
          { environmentOptions.map((item, id) => (
              <option key={id} value={item.value}>
                {item.label}
              </option>
            ))
          }
        </Select>
      </FormControl> 
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="order">Ordenar por</InputLabel>
        <Select
          native
          value={order}
          onChange={e => setOrder(e.target.value)}
          label="Ordenar por"
          inputProps={{
            name: 'order',
            id: 'order'
          }}
        >
          { orderOptions.map((item, id) => (
              <option key={id} value={item.value}>
                {item.label}
              </option>
            ))
          }
        </Select>
      </FormControl> 
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="search-by">Procurar por</InputLabel>
        <Select
          native
          value={searchBy}
          onChange={e => setSearchBy(e.target.value)}
          label="Procurar por"
          inputProps={{
            name: 'search-by',
            id: 'search-by'
          }}
        >
          { searchByOptions.map((item, id) => (
              <option key={id} value={item.value}>
                {item.label}
              </option>
            ))
          }
        </Select>
      </FormControl> 
      <FormControl variant="outlined" className={classes.searchBarControl}>
        <InputLabel htmlFor="search-bar">Pesquisar</InputLabel>
        <OutlinedInput
          id="search-bar"
          value={search}
          label="Pesquisar"
          onChange={e => setSearch(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleSearch} id="search-button">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
}

export default SearchBarAndOptions;
