/* eslint-env jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

describe('Actions: Expenses', () => {
  describe('removeExpense()', () => {
    it('should setup edit expense action object', () => {
      const id = 'fake';
      const action = removeExpense({ id: id });

      expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
    });
    it('should setup edit expense action object with default value', () => {
      const action = removeExpense();

      expect(action).toEqual({
        type: 'REMOVE_EXPENSE'
      });
    });
  });
  describe('editExpense()', () => {
    it('should setup remove expense action object', () => {
      const data = {
        description: 'desc'
      };

      const action = editExpense('fake', data);

      expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'fake',
        updates: {
          ...data
        }
      });
    });
  });
  describe('addExpense()', () => {
    it('should setup add expense action object with provided values', () => {
      const data = expenses[2];

      const action = addExpense(data);

      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: data
      });
    });
    it.skip('should setup add expense action object with default values', () => {
      const expectedExpense = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      };
      const action = addExpense();

      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          ...expectedExpense,
          id: expect.any(String)
        }
      });
    });
    describe('startAddExpense()', () => {
      it('should add expense to db and store', async () => {
        const store = createMockStore({});
        const expense = { ...expenses[1] };
        delete expense.id;

        await store.dispatch(startAddExpense(expense));
        const actions = store.getActions();
        const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value');

        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expense
          }
        });

        expect(snapshot.val()).toEqual(expense);
      });
      it('should add expense with defaults to db and store', async () => {
        const store = createMockStore({});
        const defaultExpense = {
          description: '',
          note: '',
          amount: 0,
          createdAt: 0
        };

        await store.dispatch(startAddExpense());
        const actions = store.getActions();
        const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value');

        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...defaultExpense
          }
        });

        expect(snapshot.val()).toEqual(defaultExpense);
      });
    });
  });
});
