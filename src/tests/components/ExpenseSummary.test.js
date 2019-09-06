/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

describe('Expenses Summary Component', () => {
  it('should render with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={20000} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should render with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={22} expensesTotal={12345600} />);

    expect(wrapper).toMatchSnapshot();
  });
});
