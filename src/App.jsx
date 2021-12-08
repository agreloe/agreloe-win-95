import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  
  
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <mark>src/App.js</mark> and save to reload.
        </p>

        <button className="button-pink">Click here</button>

        <button>Click here</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
    <label>Please identify yourself:</label>
    <input value={input} onInput={e => setInput(e.target.value)}/>
    <p>Hello {input}</p>
    
    </div>
    </div>
  );
}

export default App;
