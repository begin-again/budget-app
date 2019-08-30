/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

describe('Expense Dashboard Component', () => {
  it('should render', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper).toMatchSnapshot();
  });
});
