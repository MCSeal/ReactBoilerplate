import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
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




test('should render expenlistitem', () => {
    const wrapper = shallow(<ExpenseListItem{...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
    
});
