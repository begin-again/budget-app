/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { AddExpense } from '../../components/AddExpense';

let historySpy, startAddExpenseSpy, wrapper;

describe('Add Expense Component', () => {
  beforeEach(() => {
    startAddExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpense startAddExpense={startAddExpenseSpy} history={historySpy} />);
  });
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
  });
});
