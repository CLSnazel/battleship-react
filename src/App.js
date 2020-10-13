import React from 'react';
import logo from './logo.svg';
import Header from './components/header';
import Board from './components/board';
import Button from './components/button';
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Button />
        <h2>Your Board</h2>
        <Board showShips={true} key={'A'} id={'A'}/>
        <h2>Opponent's Board</h2>
        <Board showShips={false} key={"B"} id ={'B'}/>
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
