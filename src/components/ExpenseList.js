import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import filterExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className='content-container'>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )
    }
  </div>
);

const mapStateToProps = (state) => (
  {
    expenses: filterExpenses(state.expenses, state.filters)
  }
);

export default connect(mapStateToProps)(ExpenseList);
