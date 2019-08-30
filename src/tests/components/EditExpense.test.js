/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpense } from '../../components/EditExpense';

let historySpy, editExpenseSpy, removeExpenseSpy, wrapper;

describe('Edit Expense Component', () => {
  beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
      <EditExpense
        editExpense={editExpenseSpy}
        removeExpense={removeExpenseSpy}
        history={historySpy}
        expense={expenses[2]}
      />
    );
  });
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);

    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  });
  it('should handle onRemove', () => {
    wrapper.find('button').simulate('click');

    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({
      id: expenses[2].id
    });
  });
});
