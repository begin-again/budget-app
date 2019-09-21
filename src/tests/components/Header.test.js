/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let logoutSpy, wrapper;

describe('Header Component', () => {
  beforeEach(() => {
    logoutSpy = jest.fn();
    wrapper = shallow(<Header startLogout={logoutSpy} />);
  });
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');

    expect(logoutSpy).toHaveBeenCalledTimes(1);
  });
});
