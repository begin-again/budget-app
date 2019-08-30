/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

describe('Expense Dashboard Component', () => {
  it('should render', () => {
    const wrapper = shallow(<ExpenseDashboard />);

    expect(wrapper).toMatchSnapshot();
  });
});
