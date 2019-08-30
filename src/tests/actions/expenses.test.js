/* eslint-env jest */
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
      const data = {
        description: 'desc',
        note: 'note',
        amount: 1,
        createdAt: 1
      };

      const action = addExpense(data);

      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          ...data,
          id: expect.any(String)
        }
      });
    });
    it('should setup add expense action object with default values', () => {
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
  });
});
