import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
    <div className='Nav'>
      <div className='items'>Math Factories</div>
      <div className='right'><button  className='items nav-buttons'>Home</button></div>
      <div><button  className='items'> Certification</button></div>
      <div><button  className='items'>Contact us</button></div>
    </div>
      <header className="App-header">
        <p>
          HIII <code>src/App.js</code> and save to reload.
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
}

export default App;
