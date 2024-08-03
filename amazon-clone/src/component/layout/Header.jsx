import React from "react";
import "./header.css";
import logo from "/home/mocod/project1/amazon-clone/src/assets/logoAma.png";
// import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} className="amazon-logo" alt="Logo"></img>
        </div>
        <span className="Delivery">
          <div className="locationIco">I</div>
          <div className="deliverTo">Deliver to</div>
          <div className="deliverLocation">South Africa</div>
        </span>
        <div className="nav-search">
          <form id="navbar-search" action="input" method="GET">
            <div className="nav-left">
              <div id="nav-search-dropdown"></div>
            </div>
            <div className="nav-fill">
              <div className="nav-searchField">
                <label htmlFor="" aria-placeholder="Search Amazon" tab tabIndex={0}></label>
                <input type="text" placeholder="Search Amazon" />
              </div>
            </div>
            <div className="nav-right">
              <div className="nav-search-submit">
                <span>Search Icon</span>
              </div>
            </div>
          </form>
        </div>
        <ul>
          {/* <li><NavLink className={({isActive})=>(isActive ? "active" : "")} to="./home">HOME</NavLink></li> */}
          {/* <li><NavLink className={({isActive})=>(isActive ? "active": "")} to="./product">PRODUCT</NavLink></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
