import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';

const App = () => (
  <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
  </Switch>
);

export default App;
