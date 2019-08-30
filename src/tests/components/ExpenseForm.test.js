/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';

describe('Expense Form Component', () => {
  it('should render with defaults', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should render with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
  describe('onSubmit()', () => {
    it('should render error for invalid form submission', () => {
      const wrapper = shallow(<ExpenseForm />);
      expect(wrapper).toMatchSnapshot();

      wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
      });

      expect(wrapper.state('error').length).toBeGreaterThan(0);
      expect(wrapper).toMatchSnapshot();
    });
    it('should call onSubmit prop for valid form submission', () => {
      const onSubmitSpy = jest.fn();
      const expectedExpense = {
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
      };

      const wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} expense={expenses[0]} />);

      wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
      });

      expect(wrapper.state('error')).toBe('');
      expect(onSubmitSpy).toHaveBeenLastCalledWith(expectedExpense);
    });
  });
  it('should set description on input change', () => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('description')).toBe(value);
  });
  it('should set note on textarea change', () => {
    const value = 'new note';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change', {
      target: { value }
    });

    expect(wrapper.state('note')).toBe(value);
  });
  describe('onAmountChange()', () => {
    it('should set amount if valid input', () => {
      const value = '22.00';
      const wrapper = shallow(<ExpenseForm />);

      wrapper.find('input').at(1).simulate('change', {
        target: { value }
      });

      expect(wrapper.state('amount')).toBe(value);
    });
    it('should not set amount if invalid input', () => {
      const value = '22.00123';
      const wrapper = shallow(<ExpenseForm />);

      wrapper.find('input').at(1).simulate('change', {
        target: { value }
      });

      expect(wrapper.state('amount')).toBe('');
    });
  });
  describe('onDateChange()', () => {
    it('should set new date on date change', () => {
      const now = moment();
      const wrapper = shallow(<ExpenseForm />);
      wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);

      expect(wrapper.state('createdAt')).toEqual(now);
    });
  });
  describe('onFocusChange()', () => {
    it('should set calendar focus on change', () => {
      const focused = true;
      const wrapper = shallow(<ExpenseForm />);
      wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });

      expect(wrapper.state('calendarFocused')).toBe(true);
    });
  });
});
