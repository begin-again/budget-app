/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header Component', () => {
  it('should render', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
