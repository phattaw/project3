// import React from "react";
// import "./style.css";
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';


// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   consoleLog(event) {
//        console.log(event);
//       }



//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">Roulette</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <UncontrolledDropdown id="dropdown-basic-button" nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Bet Type
//                 </DropdownToggle>
//                 <DropdownMenu >
//                 <Dropdown.Item eventKey="singleBet" onSelect={this.consoleLog}>Single Bet</Dropdown.Item>
//        <Dropdown.Item eventKey="DoubleBet" onSelect={this.consoleLog}>Double Bet</Dropdown.Item>
//         <Dropdown.Item eventKey="QuadBet" onSelect={this.consoleLog}>Quad Bet</Dropdown.Item>
//      <Dropdown.Item eventKey="1/3Bet" onSelect={this.consoleLog}>1/3 Bet</Dropdown.Item>
//        <Dropdown.Item eventKey="BlackBet" onSelect={this.consoleLog}>Black Bet</Dropdown.Item>
//      <Dropdown.Item eventKey="RedBet" onSelect={this.consoleLog}>Red Bet</Dropdown.Item>
//       <Dropdown.Item eventKey="EvenBet" onSelect={this.consoleLog}>Even Bet</Dropdown.Item>
//     <Dropdown.Item eventKey="OddBet" onSelect={this.consoleLog}>Odd Bet</Dropdown.Item>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//               <UncontrolledDropdown id="dropdown-basic-button" nav inNavbar>
//                 <DropdownToggle nav caret>
//                 Streak Type
//                 </DropdownToggle>
//                 <DropdownMenu>
//             <Dropdown.Item eventKey="HottestFiveBet" onSelect={this.consoleLog}>Hottest 5 Bet</Dropdown.Item>
//      <Dropdown.Item eventKey="HottestTenBet" onSelect={this.consoleLog}>Hottest 10 Bet</Dropdown.Item>
//      <Dropdown.Item eventKey="DueToHit" onSelect={this.consoleLog}>Due to Hit</Dropdown.Item>
//     <Dropdown.Item eventKey="Even/Odd" onSelect={this.consoleLog}>Even/ Odds</Dropdown.Item>
//       <Dropdown.Item eventKey="Black/Red" onSelect={this.consoleLog}>Hits on Black or Red</Dropdown.Item>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//               <UncontrolledDropdown id="dropdown-basic-button" nav inNavbar>
//                 <DropdownToggle nav caret>
//                 Favorite Bet
//                 </DropdownToggle>
//                 <DropdownMenu>
//                  <Dropdown.Item eventKey="FavoriteBet" onSelect={this.consoleLog}>Favorite Bet</Dropdown.Item>
//   <Dropdown.Item eventKey="FavoriteNumber" onSelect={this.consoleLog}>Favorite Number </Dropdown.Item>
//  <Dropdown.Item eventKey="FavoriteTen" onSelect={this.consoleLog}>Favorite 10 Number</Dropdown.Item>
//   <Dropdown.Item eventKey="FavoriteColor" onSelect={this.consoleLog}>Favorite Color</Dropdown.Item>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//               <NavbarBrand href="./Login/Login.js">Login</NavbarBrand>
//             </Nav>
//           </Collapse>
//         </Navbar>

//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import "./style.css";
import Multiselect from 'multiselect-dropdown-react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

var betType = [{
  label: 'Single Bet',
  value: 'one'
},
{
  label: 'Double Bet',
  value: 'two'
},
{
  label: 'Quad Bet',
  value: 'Quad'
},
{
  label: '1/3 Bet',
  value: '1/3'
},
{
  label: 'Black Bet',
  value: 'Black'
},
{
  label: 'Red Bet',
  value: 'Red'
},
{
  label: 'Even Bet',
  value: 'Even'
},
{
  label: 'odd Bet',
  value: 'Odd'
}];

var streakType = [{
  label: 'Hottest 5 Bet',
  value: 'Hottes 5'
},
{
  label: 'Hottest 10 Bet',
  value: 'Hottest 10'
},
{
  label: 'Due to Hit',
  value: 'Due to Hit'
},
{
  label: 'Even/ Odds',
  value: 'Even/Odd'
},
{
  label: 'Hits on Black or Red',
  value: 'Black/Red'
}];

var favoriteBet = [{
  label: 'Favorite Bet',
  value: 'Hottes 5'
},
{
  label: 'Favorite Number',
  value: 'Hottest 10'
},
{
  label: 'Favorite 10 Number',
  value: 'Due to Hit'
},
{
  label: 'Favorite Color',
  value: 'Black/Red'
}];



class App extends Component {

  result(params) {
    console.log(params);
  }

  render() {
    return (
      <div id="dropdown-basic-button" className="App">
        <Navbar id="nav.link" color="light" height="58px" light expand="md">
          <NavbarBrand href="/">Roulette</NavbarBrand>>
             <NavbarToggler onClick={this.toggle} />
          <Nav id="bar" className="ml-auto" navbar>
            <ReactMultiSelectCheckboxes placeholderButtonLabel="Bet Type" id="bar1" options={betType} onSelectOptions={this.result} />
          </Nav>
          <Nav id="bar" className="ml-auto" navbar>
            <ReactMultiSelectCheckboxes placeholderButtonLabel="Streak Type"  id="bar2" options={streakType} onSelectOptions={this.result} />
          </Nav>
          <Nav id="bar" className="ml-auto" navbar>
            <ReactMultiSelectCheckboxes  placeholderButtonLabel="Favorite Bet" id="bar3" options={favoriteBet} onSelectOptions={this.result} />
            <NavbarBrand id="login" href="../Login">Login</NavbarBrand>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;