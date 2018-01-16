import React from 'react';
import { shallow, mount } from 'enzyme';

import HelloWorld from './Hello_World'

describe('<HelloWorld />', () => {
  it('Renders without crashing', () => {
    shallow(<HelloWorld />);
  });

  it('Renders the Say Hello button initially', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.hasClass('say-hello')).toEqual(true);
  });

  it('Renders the Reset button initially', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.hasClass('reset')).toEqual(true);
  });

})