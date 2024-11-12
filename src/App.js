//import LoginPage from './components/LoginPage.Login'; // ONLY need path to LoginPage directory
import components from './components'; // imported only one directory or
//import LoginPage from './components/LoginPage';
import './styles/App.css';

// each function should be based on what button is clicked on html
function App() {
  return ( // this returns the LoginPage directory that is inside the components directory
    <div>
      <components.LoginPage.Login />  
    </div>
  )
}

export default components.LoginPage.Login;

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
/* this is my edit yug*/
let yug = "yug";