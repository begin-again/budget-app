/* eslint-env jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense, addExpense,
  editExpense, removeExpense, setExpenses,
  startSetExpenses, startRemoveExpense,
  startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'fakeuserid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

describe('Actions: Expenses', () => {
  beforeEach(async () => {
    const expensesData = {};
    expenses.map(({ id, description, note, amount, createdAt }) => {
      expensesData[id] = { description, note, amount, createdAt };
    });
    await database.ref(`users/${uid}/expenses`).set(expensesData);
  });
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
    describe('startRemoveExpense()', () => {
      it('should remove expense from database', async () => {
        const store = createMockStore(defaultAuthState);
        const id = expenses[2].id;

        await store.dispatch(startRemoveExpense({ id }));
        const actions = store.getActions();
        const found = database
          .ref(`users/${uid}/expenses/${id}`)
          .once('value')
          .then(snapShot => snapShot.val());

        expect(actions[0]).toEqual({
          type: 'REMOVE_EXPENSE',
          id
        });

        expect(Object.keys(found).length).toBe(0);
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
    describe('startEditExpense()', () => {
      it('should update expense in database', async () => {
        const store = createMockStore(defaultAuthState);
        const id = expenses[2].id;
        const description = 'hookers';
        const updates = { description };

        await store.dispatch(startEditExpense(id, updates));
        const actions = store.getActions();
        const snapShot = await database
          .ref(`users/${uid}/expenses/${id}`)
          .once('value');

        expect(actions[0]).toEqual({
          type: 'EDIT_EXPENSE',
          id,
          updates
        });

        expect(snapShot.val().description).toEqual(updates.description);
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
    describe('startAddExpense()', () => {
      it('should add expense to db and store', async () => {
        const store = createMockStore(defaultAuthState);
        const expense = { ...expenses[1] };
        delete expense.id;

        await store.dispatch(startAddExpense(expense));
        const actions = store.getActions();
        const snapshot = await database
          .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
          .once('value');

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
        const store = createMockStore(defaultAuthState);
        const defaultExpense = {
          description: '',
          note: '',
          amount: 0,
          createdAt: 0
        };

        await store.dispatch(startAddExpense());
        const actions = store.getActions();
        const snapshot = await database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');

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
  describe('setExpenses()', () => {
    it('should setup set expense action with data', () => {
      const action = setExpenses(expenses);

      expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
    });
    it('should fetch expenses from database', async () => {
      const store = createMockStore(defaultAuthState);

      await store.dispatch(startSetExpenses());
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
    });
  });
});
