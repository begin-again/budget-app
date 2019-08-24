/* eslint-env commonjs, browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => {
  const template =
    <div>
      Dashboad component
    </div>
;
  return template;
};

const AddExpensePage = () => {
  const template =
    <div>
      Add Expense component
    </div>
;
  return template;
};

const EditExpensePage = () => {
  const template =
    <div>
      Edit Expense component
    </div>
;
  return template;
};

const HelpPage = () => {
  const template =
    <div>
      Help component
    </div>
;
  return template;
};

const NotFoundPage = () => {
  const template =
    <div>
      404! - <Link to='/'>Go Home</Link>
    </div>
;
  return template;
};

const Header = () => {
  const template =
    <header>
      <h1>Expensify</h1>
      <NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink>
      <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
      <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
      <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
;
  return template;
};

const routes =
  <BrowserRouter>
    <div>
      <Route component={Header} />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
;

ReactDOM.render(routes, document.getElementById('app'));
