import React from 'react';
import {NavLink} from "react-router-dom";

const Header = props => {
  return (
    <header>
      <div className="black mb5 pt5">
        <h1 className="ttu f3 tracked-mega anton tc mt0 mb4">Marmalade.fm</h1>
        <ul className="list flex justify-center pl0">
          <li className="mh2">
            <NavLink exact to="/" href='#'
              className="nav-link biryani-black f6 ttu gray no-underline">
              What's hot
            </NavLink>
          </li>
          <li className="mh2">
            <NavLink to="/archive" href='#'
              className="nav-link biryani-black f6 ttu gray no-underline">
              Archive
            </NavLink>
          </li>
          <li className="mh2">
            <NavLink to="/about" href='#'
              className="nav-link biryani-black f6 ttu gray no-underline">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
