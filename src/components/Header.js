
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faMapMarker } from '@fortawesome/free-solid-svg-icons'


const calender = <FontAwesomeIcon icon={faCalendar} />
const location = <FontAwesomeIcon icon={faMapMarker} />

const Header = () => (
    <div className="header">
        <header>
            <h1 className="header__title">Expense</h1>
            <NavLink className ="header__link" to="/" activeClassName="is-active" exact={true}>RSVP</NavLink>
            <NavLink className ="header__link" to="/create" activeClassName="is-active"> Create exp</NavLink>
            <NavLink className ="header__link" to="/edit" activeClassName="is-active"> edit expense</NavLink>
            <NavLink className ="header__link" to="/help" activeClassName="is-active"> help</NavLink>
        </header>
    </div>
);

export default Header;