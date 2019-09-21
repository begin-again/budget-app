/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

let loginSpy, wrapper;

describe('Login Component', () => {
  beforeEach(() => {
    loginSpy = jest.fn();
    wrapper = shallow(<Login startLogin={loginSpy} />);
  });
  it('should render login', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call startLogin on button click', () => {
    wrapper.find('button').simulate('click');

    expect(loginSpy).toHaveBeenCalledTimes(1);
  });
});
