import './components/LoginPage/Login.jsx'; // only need the file since you imported the directory with import LoginPage
import './styles/App.css';                  // we are getting an error because the page has no code

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  )
}

export default LoginPage;

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