import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';


export class EditExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/');
  }

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    const template =
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
        </div>
      </div>
    ;
    return template;
  }
};

const mapStateToProps = (state, props) => (
  {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
);

const mapDispatchToProps = (dispatch, props) => (
  {
    editExpense: (id, expense) => dispatch(startEditExpense(id,expense)),
    removeExpense: (data) => dispatch(startRemoveExpense(data))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
