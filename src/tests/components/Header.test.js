import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';



test('Header renderer', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();






//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
   
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
   
//   console.log(renderer.getRenderOutput());
});

