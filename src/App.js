import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Main />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
