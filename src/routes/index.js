import React from 'react';
import { Switch } from 'react-router-dom';

import MyRouter from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRouter exact path="/" component={Login} />
      <MyRouter path="*" component={Page404} />
    </Switch>
  );
}
