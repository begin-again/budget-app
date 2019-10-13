/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import LoaderPage from '../../components/LoadingPage';

describe('LoaderPage', () => {
  it('should render', () => {
    const wrapper = shallow(<LoaderPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
