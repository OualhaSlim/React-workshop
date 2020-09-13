import React from 'react';
import './App.css';
import Wrapper from './Wrapper';
import Photo from './Photo';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
        <Photo src="/portrait.jpg"/>
            <Title style={{color:"red"}}>
                will
            </Title>

            <Title small>Student</Title>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
