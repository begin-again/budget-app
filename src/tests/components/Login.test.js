/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

describe('Login Component', () => {
  it('should render login', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
});
