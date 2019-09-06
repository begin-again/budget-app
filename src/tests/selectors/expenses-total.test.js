/* eslint-env jest */
import total from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('Totals Selector', () => {
  it('should be zero if no expenses', () => {
    const result = total([]);

    expect(result).toBe(0);
  });
  it('should sum a single expense', () => {
    const result = total([expenses[0]]);

    expect(result).toBe(195);
  });
  it('should sum multiple expenses', () => {
    const result = total(expenses);

    expect(result).toBe(124095);
  });
});
