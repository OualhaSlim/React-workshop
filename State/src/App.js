import React, { Component } from 'react';
import './App.css';
import "./style.css";
const members = [
  { name :"David",descript : "Learning",photo: ""},
  { name :"Anna",descript : "Mentor",photo: ""},
  { name :"Arne",descript : "Developper",photo: ""}
]; 
export default class App extends React.Component{
  
  
  state = {
    name : "",
    descript : "",
    photo : ""
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <button onClick={() =>{
            this.setState({name: members[0].name,descript: members[0].descript});

          }}>David</button>

          <button onClick={() =>{
            this.setState({name: members[1].name,descript: members[1].descript});

          }}>Anna</button>

          <button onClick={() =>{
            this.setState({name: members[2].name,descript: members[2].descript});

          }}>Arne</button>
        </div>  

        <h1>{this.state.name} </h1>
          <h2>
          {this.state.descript}
          </h2>
          
          
        </header>
        
      </div>
    );
  }
}

