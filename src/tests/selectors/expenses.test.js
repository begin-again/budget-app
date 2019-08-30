
/* eslint-env jest */
import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

const filterDefault = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined };

describe('SelectExpenses()', () => {
  it('should return all values sorted by date by default', () => {
    const result = selectExpenses(expenses, filterDefault);

    expect(result).toEqual([
      expenses[2], expenses[0], expenses[1]
    ]);
  });
  it('should filter by text value', () => {
    const text = 'e';
    const filters = {
      ...filterDefault,
      text
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
      expenses[2], expenses[0]
    ]);
  });
  it('should filter by startDate', () => {
    const startDate = moment(0);
    const filters = {
      ...filterDefault,
      startDate
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
      expenses[2], expenses[0]
    ]);
  });
  it('should filter by endDate', () => {
    const endDate = moment(0).add(2, 'days');
    const filters = {
      ...filterDefault,
      endDate
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
      expenses[0], expenses[1]
    ]);
  });
  it('should sort by date', () => {
    const sortBy = 'date';
    const filters = {
      ...filterDefault,
      sortBy
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
      expenses[2], expenses[0], expenses[1]
    ]);
  });
  it('should sort by amount', () => {
    const sortBy = 'amount';
    const filters = {
      ...filterDefault,
      sortBy
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
      expenses[2], expenses[1], expenses[0]
    ]);
  });
});
