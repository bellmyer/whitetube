import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: props.loggedIn,
    }
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.props.login('test', this.password.value)
  }

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

                { this.props.loggedIn &&
                  <NavItem>
                    <NavLink className="nav-link" to="/parents">
                      <span className="fa fa-male fa-lg"></span>
                      <span className="fa fa-female fa-lg"></span> Parents
                    </NavLink>
                  </NavItem>
                }
              </Nav>
            </Collapse>

            { !this.props.loggedIn &&
              <Form inline onSubmit={this.handleLogin} className="float-right">
                <FormGroup>
                  <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
                  <span> </span>
                  <Button type="submit" color="secondary" onClick={this.login}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </FormGroup>
              </Form>
            }
          </div>
        </Navbar>
    );
  }
}

export default Header;