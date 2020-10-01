import React from 'react';
import logo from './logo.svg';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div>
          <p>Here's this super awesome game we're building</p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
