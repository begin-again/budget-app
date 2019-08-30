/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { filters, altFilters } from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

describe('Expenselist Filters Component', () => {
  beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    );
  });
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with alt data', () => {
    wrapper.setProps({
      filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle text change', () => {
    const value = 'new value';
    wrapper.find('input').simulate('change', {
      target: { value }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });
  it('should sort by date', () => {
    const value = 'date';
    // because the default is date, use altFilters to set it to amount
    wrapper.setProps({
      filters: altFilters
    });
    wrapper.find('select').simulate('change', {
      target: { value }
    });

    expect(sortByDate).toHaveBeenLastCalledWith();
  });
  it('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
      target: { value }
    });

    expect(sortByAmount).toHaveBeenLastCalledWith();
  });
  it('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  });
  it('should handle date focus changes', () => {
    const calendarFocused = 'endDate';

    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);

    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });
});
