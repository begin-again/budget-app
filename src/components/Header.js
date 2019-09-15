import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const template =
    <header>
      <h1>Expensify</h1>
      <NavLink to='/dashboard' activeClassName='is-active' exact>Dashboard</NavLink>
      <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
    </header>
        ;
  return template;
};

export default Header;
