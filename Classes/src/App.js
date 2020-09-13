import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  const me =new Student();
    console.log(me);
    me.getJob('WebDeveloper');
    me.learnNewSkill('React');
    console.log(me);
    me.forgetSkill('React');
    me.leaveJob();
    console.log(me)
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
