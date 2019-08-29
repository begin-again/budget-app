import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpense = (props) => {
  const template =
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          console.log('updated', expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={(e) => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}
      >Remove
      </button>
    </div>
        ;
  return template;
};

const mapStateToProps = (state, props) => (
  {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
);

export default connect(mapStateToProps)(EditExpense);
