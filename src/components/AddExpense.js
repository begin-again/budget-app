import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => {
  const template =
    <div>
      <h1>Add Expense component</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
        ;
  return template;
};

export default connect()(AddExpense);
