import React from "react";
import "./style.css";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Name Of Project</a>
    <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#"><span className="sr-only">(current)</span></a>
          <DropdownButton id="dropdown-basic-button" title="Bet Type">
  <Dropdown.Item href="#/action-1">Single Bet</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Double Bet</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Quad Bet</Dropdown.Item>
  <Dropdown.Item href="#/action-3">1/3 Bet</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Black Bet</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Red Bet</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Even Bet</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Odd Bet</Dropdown.Item>
</DropdownButton>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
          <DropdownButton id="dropdown-basic-button" title="Streak Type">
  <Dropdown.Item href="#/action-1">Hottest Five Bet</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Hottest 10 Bet</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Due to Hit</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Even/ Odds</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Hits on Black or Red</Dropdown.Item>
</DropdownButton>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
          <DropdownButton id="dropdown-basic-button" title="Favorite Bet">
  <Dropdown.Item href="#/action-1">Favorite Number </Dropdown.Item>
  <Dropdown.Item href="#/action-3">Favorite 10 Number</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Favorite Color</Dropdown.Item>
</DropdownButton>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;
