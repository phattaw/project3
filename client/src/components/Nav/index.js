import React from "react";
import "./style.css";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';






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
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  consoleLog(event) {
       console.log(event);
      }

 

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Roulette</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown id="dropdown-basic-button" nav inNavbar>
                <DropdownToggle nav caret>
                  Bet Type
                </DropdownToggle>
                <DropdownMenu >
                <Dropdown.Item eventKey="singleBet" onSelect={this.consoleLog}>Single Bet</Dropdown.Item>
       <Dropdown.Item eventKey="DoubleBet" onSelect={this.consoleLog}>Double Bet</Dropdown.Item>
        <Dropdown.Item eventKey="QuadBet" onSelect={this.consoleLog}>Quad Bet</Dropdown.Item>
     <Dropdown.Item eventKey="1/3Bet" onSelect={this.consoleLog}>1/3 Bet</Dropdown.Item>
       <Dropdown.Item eventKey="BlackBet" onSelect={this.consoleLog}>Black Bet</Dropdown.Item>
     <Dropdown.Item eventKey="RedBet" onSelect={this.consoleLog}>Red Bet</Dropdown.Item>
      <Dropdown.Item eventKey="EvenBet" onSelect={this.consoleLog}>Even Bet</Dropdown.Item>
    <Dropdown.Item eventKey="OddBet" onSelect={this.consoleLog}>Odd Bet</Dropdown.Item>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown id="dropdown-basic-button" nav inNavbar>
                <DropdownToggle nav caret>
                Streak Type
                </DropdownToggle>
                <DropdownMenu>
            <Dropdown.Item eventKey="HottestFiveBet" onSelect={this.consoleLog}>Hottest 5 Bet</Dropdown.Item>
     <Dropdown.Item eventKey="HottestTenBet" onSelect={this.consoleLog}>Hottest 10 Bet</Dropdown.Item>
     <Dropdown.Item eventKey="DueToHit" onSelect={this.consoleLog}>Due to Hit</Dropdown.Item>
    <Dropdown.Item eventKey="Even/Odd" onSelect={this.consoleLog}>Even/ Odds</Dropdown.Item>
      <Dropdown.Item eventKey="Black/Red" onSelect={this.consoleLog}>Hits on Black or Red</Dropdown.Item>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown id="dropdown-basic-button" nav inNavbar>
                <DropdownToggle nav caret>
                Favorite Bet
                </DropdownToggle>
                <DropdownMenu>
                 <Dropdown.Item eventKey="FavoriteBet" onSelect={this.consoleLog}>Favorite Bet</Dropdown.Item>
  <Dropdown.Item eventKey="FavoriteNumber" onSelect={this.consoleLog}>Favorite Number </Dropdown.Item>
 <Dropdown.Item eventKey="FavoriteTen" onSelect={this.consoleLog}>Favorite 10 Number</Dropdown.Item>
  <Dropdown.Item eventKey="FavoriteColor" onSelect={this.consoleLog}>Favorite Color</Dropdown.Item>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavbarBrand href="./Login/Login.js">Login</NavbarBrand>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}
// class Nav extends React.Component {
//   consoleLog(event) {
//     console.log(event);
//   }

  
//   render() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <a className="navbar-brand" href="#">Name Of Project</a>  
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
//         <li>
//           <DropdownButton id="dropdown-basic-button" title="Bet Type">
//        <Dropdown.Item eventKey="singleBet" onSelect={this.consoleLog}>Single Bet</Dropdown.Item>
//       <Dropdown.Item eventKey="DoubleBet" onSelect={this.consoleLog}>Double Bet</Dropdown.Item>
//        <Dropdown.Item eventKey="QuadBet" onSelect={this.consoleLog}>Quad Bet</Dropdown.Item>
//     <Dropdown.Item eventKey="1/3Bet" onSelect={this.consoleLog}>1/3 Bet</Dropdown.Item>
//       <Dropdown.Item eventKey="BlackBet" onSelect={this.consoleLog}>Black Bet</Dropdown.Item>
//      <Dropdown.Item eventKey="RedBet" onSelect={this.consoleLog}>Red Bet</Dropdown.Item>
//      <Dropdown.Item eventKey="EvenBet" onSelect={this.consoleLog}>Even Bet</Dropdown.Item>
//    <Dropdown.Item eventKey="OddBet" onSelect={this.consoleLog}>Odd Bet</Dropdown.Item>
// </DropdownButton>
//         </li>
//         <li>
//           <DropdownButton id="dropdown-basic-button" title="Streak Type">
//   <Dropdown.Item eventKey="HottestFiveBet" onSelect={this.consoleLog}>Hottest 5 Bet</Dropdown.Item>
//   <Dropdown.Item eventKey="HottestTenBet" onSelect={this.consoleLog}>Hottest 10 Bet</Dropdown.Item>
//   <Dropdown.Item eventKey="DueToHit" onSelect={this.consoleLog}>Due to Hit</Dropdown.Item>
//   <Dropdown.Item eventKey="Even/Odd" onSelect={this.consoleLog}>Even/ Odds</Dropdown.Item>
//   <Dropdown.Item eventKey="Black/Red" onSelect={this.consoleLog}>Hits on Black or Red</Dropdown.Item>
// </DropdownButton>
//         </li>    
//         <li>      
//           <DropdownButton id="dropdown-basic-button" title="Favorite Bet">
//           <Dropdown.Item eventKey="FavoriteBet" onSelect={this.consoleLog}>Favorite Bet</Dropdown.Item>
//   <Dropdown.Item eventKey="FavoriteNumber" onSelect={this.consoleLog}>Favorite Number </Dropdown.Item>
//   <Dropdown.Item eventKey="FavoriteTen" onSelect={this.consoleLog}>Favorite 10 Number</Dropdown.Item>
//   <Dropdown.Item eventKey="FavoriteColor" onSelect={this.consoleLog}>Favorite Color</Dropdown.Item>
// </DropdownButton>
//         </li>
//       </ul>
//     </div>
//   </nav>
//   );
//   }
// }

// export default Nav;
