import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { ConfigureStore } from './redux/configureStore';

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
