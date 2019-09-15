/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { AddExpense } from '../../components/AddExpense';

let historySpy, addExpenseSpy, wrapper;

describe('Add Expense Component', () => {
  beforeEach(() => {
    addExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpense addExpense={addExpenseSpy} history={historySpy} />);
  });
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
  });
});
