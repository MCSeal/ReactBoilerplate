import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { addExpense  } from '../actions/expenses'; 


const AddExpensePage = (props) => (
    <div className="body__content">
      <h1> Add Expense! </h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push({
          pathname: '/',
          message: 'RSVP Succesful! Thanks! Feel free to add more if needed.'  
          });
        }}
      />

    </div>
    
);

export default connect()(AddExpensePage);