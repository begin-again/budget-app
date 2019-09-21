import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import { createMemoryHistory as createHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={Login} exact />
        <PrivateRoute path='/create' component={AddExpense} />
        <PrivateRoute path='/dashboard' component={ExpenseDashboard} />
        <PrivateRoute path='/edit/:id' component={EditExpense} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
