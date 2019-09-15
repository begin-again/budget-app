/* eslint-env jest */
import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

const expensesReducerDefaultState = [];
describe('Expenses Reducer', () => {
  it('should setup default filter values', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual(expensesReducerDefaultState);
  });
  it('should remove expense', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
    const state = expenseReducer(expenses, action);

    expect(state).toEqual([
      expenses[0], expenses[2]
    ]);
  });
  it('should not remove expense', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '0' };
    const state = expenseReducer(expenses, action);

    expect(state).toEqual(expenses);
  });
  it('should add an expense', () => {
    const expense = {
      id: '4',
      description: 'laptop',
      note: '',
      createdAt: 20000,
      amount: 29500
    };
    const action = { type: 'ADD_EXPENSE', expense };

    const state = expenseReducer([], action);

    expect(state).toEqual([expense]);
  });
  it('should edit an expense', () => {
    const id = expenses[1].id;
    const description = 'more beer';
    const updates = { description };
    const action = { type: 'EDIT_EXPENSE', id, updates };

    const state = expenseReducer(expenses, action);

    expect(state[1].description).toBe(description);
  });
  it('should not edit an expense', () => {
    const id = '-1';
    const description = 'more beer';
    const updates = { description };
    const action = { type: 'EDIT_EXPENSE', id, updates };

    const state = expenseReducer(expenses, action);

    expect(state).toEqual(expenses);
  });
  it('should set expenses', () => {
    const action = {
      type: 'SET_EXPENSES',
      expenses: [expenses[1]]
    };

    const state = expenseReducer(expenses, action);

    expect(state).toEqual([expenses[1]]);
  });
});
