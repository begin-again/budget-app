/* eslint-env jest */
import filterReducer from '../../reducers/filters';
import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
describe('Filters Reducer', () => {
  it('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual(filtersReducerDefaultState);
  });
  it('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount');
  });
  it('should set sortBy to date', () => {
    const currentState = {
      ...filtersReducerDefaultState,
      sortBy: 'amount'
    };
    const state = filterReducer(currentState, { type: 'SORT_BY_DATE' });

    expect(state.sortBy).toBe('date');
  });
  it('should set startDate to passed in date', () => {
    const startDate = moment().add(1, 'year');
    const action = { type: 'SET_START_DATE', startDate };

    const state = filterReducer(filtersReducerDefaultState, action);

    expect(state.startDate).toBe(startDate);
  });
  it('should set endDate to passed in date', () => {
    const endDate = moment().add(1, 'year');
    const action = { type: 'SET_END_DATE', endDate };

    const state = filterReducer(filtersReducerDefaultState, action);

    expect(state.endDate).toBe(endDate);
  });
  it('should set test filter to passed in value', () => {
    const text = 'fake';
    const action = { type: 'SET_TEXT_FILTER', text };

    const state = filterReducer(filtersReducerDefaultState, action);

    expect(state.text).toBe(text);
  });
});
