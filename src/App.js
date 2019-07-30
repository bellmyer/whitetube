import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import VideoList from './components/VideoListComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div classNmae="container">
          <NavbarBrand href="/">WhiteTube</NavbarBrand>
        </div>
      </Navbar>

      <div className="container">
        <VideoList />
      </div>
    </div>
  );
}

export default App;
