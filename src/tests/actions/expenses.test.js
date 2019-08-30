/* eslint-env jest */
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

describe('Actions: Expenses', () => {
  describe('removeExpense()', () => {
    it('should setup remove expense action object', () => {
      const action = removeExpense({ id: 'fake' });
      expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'fake'
      });
    });
  });
});
