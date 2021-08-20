import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('DD MMM YYYY'))


class ExpenseForm extends React.Component {
     constructor(props){
        super(props);
        
        this.state ={
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        };
        
        
        
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
        
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        };
        
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({calenderFocused: focused}));    
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'please provide description + amount.'}));
            //set error state to 'please provide description'
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render(){
        return (
            <div>
            
            {this.state.error && <p>{this.state.error}!!</p>}
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                <input type="text" placeholder="amount" value={this.state.amount} onChange={this.onAmountChange}/>
                <textarea placeholder="add a note for the expense" value={this.state.note} onChange={this.onNoteChange}>
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange ={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange= {this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange = {() => false}
                
                />
                
                </textarea>
                <button>Add Expense</button>
                
            </form>
            </div>    
            
        )
    }
}

export default ExpenseForm;