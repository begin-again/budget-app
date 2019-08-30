/* eslint-env jest */
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';
import moment from 'moment';

describe('Actions: Filters', () => {
  describe('setTextFilter()', () => {
    it('should set up text filter action object with passed in value', () => {
      const text = 'fake';
      const action = setTextFilter(text);

      expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
      });
    });
    it('should set up text filter action object with default', () => {
      const text = '';
      const action = setTextFilter();

      expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
      });
    });
  });
  describe('sortByDate()', () => {
    it('should set up sort date filter action object', () => {
      const action = sortByDate();

      expect(action).toEqual({
        type: 'SORT_BY_DATE'
      });
    });
  });
  describe('sortByAmount()', () => {
    it('should set up sort amount filter action object', () => {
      const action = sortByAmount();

      expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
      });
    });
  });
  describe('setStartDate()', () => {
    it('should set up start date filter action object', () => {
      const startDate = moment(0);
      const action = setStartDate(startDate);

      expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate
      });
    });
  });
  describe('setEndDate()', () => {
    it('should set up end date filter action object', () => {
      const endDate = moment(0);
      const action = setEndDate(endDate);

      expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate
      });
    });
  });
});
