import React from 'react';
import NotFoundPage from '../../components/NotFound';
import { shallow } from 'enzyme';


test('not found renderer', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot();


});

