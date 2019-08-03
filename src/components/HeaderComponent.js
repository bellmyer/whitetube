import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
        <Navbar dark color="primary" expand="md">
          <div className="container">
            <NavbarBrand href="/">WhiteTube</NavbarBrand>

            <Collapse isOpen={true} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/kids">
                    <span className="fa fa-user fa-lg"></span> Kids
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/parents">
                    <span className="fa fa-male fa-lg"></span>
                    <span className="fa fa-female fa-lg"></span> Parents
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
    );
  }
}

export default Header;