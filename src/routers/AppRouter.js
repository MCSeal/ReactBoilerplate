import React from 'react';
import ReactDOM from 'react-dom';
//bwoserrouter and route for routing, switch for 404 page, link is for react links without loading
//NavLink for navshit
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFound from '../components/NotFound';
//comp what it shows




//404 handling  is not found, SWITCH instead of div helps in this. switch only finds the correct path and then stops

const AppRouter = () => (
    <BrowserRouter> 
       <div>
        <Header/>
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} exact={true} />
            <Route path="/edit" component={EditExpensePage} exact={true} />
            <Route path="/help" component={HelpPage} exact={true} />
            <Route component={NotFound}  />
        </Switch>
       </div>


    </BrowserRouter>  

);

export default AppRouter;