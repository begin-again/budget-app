import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Login from '../components/Login';
import Header from '../components/Header';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route component={Header} />
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/create' component={AddExpense} />
        <Route path='/dashboard' component={ExpenseDashboard} />
        <Route path='/edit/:id' component={EditExpense} />
        <Route path='/help' component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
