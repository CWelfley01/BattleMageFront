import React from "react";
import { NavLink } from "react-router-dom";
import style from "../style/navbar.scss";


export default function NavBar() {
  return (
    <div>
      <div className="nav-header">
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          exact
          to="/"
        >
          Battle Page
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-element"
        >
          Add Element
        </NavLink>
        
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-FormElement"
        >
          Add FORM Element
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-spell"
        >
          Add a Spell!
        </NavLink>
      </div>
    </div>
  );
}
