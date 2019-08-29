import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = () => {
  const template =
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
        ;
  return template;
};

export default ExpenseDashboard;
