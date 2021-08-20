import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibileExpenses from './selectors/expenses';

import { Provider } from 'react-redux';




const store = configureStore();


store.dispatch(addExpense({description: 'waterbill', amount: 4500, createdAt:100}));
store.dispatch(addExpense({description: 'gaz bill', amount: 200, createdAt: 1000}));
store.dispatch(addExpense({description: 'rent', amount: 1095}));




const state = store.getState();

const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
console.log(visibleExpenses);



console.log(store.getState());



const jsx = (
    <Provider store = {store}>
        <AppRouter />
    
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

