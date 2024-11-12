import React from 'react';
import LoginPage from './Components/LoginPage/Login'; // ONLY need path to LoginPage directory 

    // just import the components firectory and the styles directory, then we can use all files from each
function App() {
  return ( // this returns the LoginPage directory that is inside the components directory
    <div>
      <LoginPage />  
    </div>
  );
}

export default App;

// old code (keep for reference):
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          This is a Test Line of code by me
          This will appear in the GitHub Desktop app as a modified file from
          the respository on GitHub.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/