import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibileExpenses from './selectors/expenses';


const store = configureStore();


store.dispatch(addExpense({description: 'waterbill'}));
store.dispatch(addExpense({description: 'gaz bill', amount: '200'}));

store.dispatch(setTextFilter('water'));

const state = store.getState();

const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
console.log(visibleExpenses);



console.log(store.getState());


ReactDOM.render(<AppRouter />, document.getElementById('app'));

