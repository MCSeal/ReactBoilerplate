import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1> expense list</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        
        //state.expenses would work too, this is for the filter
      expenses: selectExpenses(state.expenses, state.filters)
    };
}

//connect attaches redux and react
export default connect(mapStateToProps)(ExpenseList);

