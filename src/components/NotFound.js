import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

//similar to Href link is for react
const NotFound = () => (
    <div>
    404 not found!
       <Link to="/"> Go home</Link>
    </div>
    
);

export default NotFound;