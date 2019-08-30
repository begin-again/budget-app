/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

describe('Expense List Item Component', () => {
  it('should render', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
