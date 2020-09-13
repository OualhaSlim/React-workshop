import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent'

function Container() {
  let containerTitle= "this is the container";
  return (
    <div className="App">
      <h1>{containerTitle}</h1>
      <ListComponent />
      <ListComponent />
    </div>
    
  );
}

export default Container;
