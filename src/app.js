import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibileExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import { Provider } from 'react-redux';




const store = configureStore();



const jsx = (
    <Provider store = {store}>
        <AppRouter />
    
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

