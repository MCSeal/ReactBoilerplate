
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
            <h1 className="header__title">Mathew & Ashley</h1>
            <h3 className="header__subtitle"> {calender} September 24th 2022 </h3>
            <h3 className="header__subtitle"> {location}  Pine Lodge </h3>
            <NavLink className ="header__link" to="/" activeClassName="is-active" exact={true}>RSVP</NavLink>
            <NavLink className ="header__link" to="/create" activeClassName="is-active"> Wedding Day Info</NavLink>
            <NavLink className ="header__link" to="/edit" activeClassName="is-active"> Directions</NavLink>
            <NavLink className ="header__link" to="/help" activeClassName="is-active"> accommodations</NavLink>
        </header>
    </div>
);

export default Header;