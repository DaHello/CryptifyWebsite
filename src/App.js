import logo from './images/logo.svg'; // Changed logo.svg to be in "images" folder
import './styles/App.css'; // this is the new direct path to App.css after modifying file structure

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
        <p>hello, camilo</p>
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
