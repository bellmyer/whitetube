import React, { Component } from 'react';
import { Navbar, NavbarBrand, Form, Input, Button } from 'reactstrap';

function Header(props) {
  return (
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">WhiteTube</NavbarBrand>
        </div>
      </Navbar>
  );
}

export default Header;