import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import RecoverPasswordPage from './components/RecoverPasswordPage';

import LogListPage from './components/LogListPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/cadastro" exact component={RegisterPage} />
        <Route path='/recuperar' exact component={RecoverPasswordPage} />
        <Route path="/logs" exact component={LogListPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
