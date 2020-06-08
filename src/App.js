import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import RecoverPasswordPage from './components/RecoverPasswordPage';

import LogListPage from './components/LogListPage';

const theme = createMuiTheme({}, ptBR);

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/cadastro" exact component={RegisterPage} />
        <Route path='/recuperar' exact component={RecoverPasswordPage} />
        <Route path="/logs" exact component={LogListPage} />
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
