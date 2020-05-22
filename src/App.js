import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
