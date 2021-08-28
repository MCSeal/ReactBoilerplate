import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';


const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '1',
    description: 'credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]




test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    
    expect(wrapper).toMatchSnapshot();
    
    
});


test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    
    expect(wrapper).toMatchSnapshot();
    
    
});

test('should render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    
   wrapper.find('form').simulate('submit', {
       preventDefault: () => {  }
   });
   expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});


test('should set new desc on change', () => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm />)
       wrapper.find('input').at(0).simulate('change', {
      target: { value }
   });
   expect(wrapper.state('description')).toBe(value)
});


test('should set note on textarea change', () => {
    const value = 'new note value'
    const wrapper = shallow(<ExpenseForm />)
       wrapper.find('textarea').at(0).simulate('change', {
      target: { value }
   });
   expect(wrapper.state('note')).toBe(value)
});


