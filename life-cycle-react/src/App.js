import React, { Component } from 'react';
import './App.css';
import "./style.css"
import Button from './MyButton';
import MyComponent from "./test"
const profile ={

  photo:"/portrait.jpg", 

	Name:{firstName:"will", lastName:"smith"},

	profileLink:"https://www.linkedin.com/in/slim-oualha/"
}  
export default class App extends React.Component{
  componentDidMount(){
    setTimeout(function(){ alert("Hello"); }, 2000);
    //alert("Component will be destroyed" )
  }

  UNSAFE_componentWillUnmount(){
    alert('destroyed');
  }

  /*componentWillUnmount(){
    alert("destroyed");
  }*/
  
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <MyComponent small style={{color:"red"}}/>
          
          <img src= {profile.photo} className="my-profile"/>
          <p style={{color:'white',fontSize:60}}>
            {profile.Name.firstName} {profile.Name.lastName}
            
          </p>
          
          <Button profileLink={profile.profileLink} buttonColor="blue" onSimpleClick={()=>window.location = profile.profileLink}>LinkedIn</Button>
          
        </header>
        
      </div>
    );
  }
}
// the above is the same as the function but in class 
/*function App() {
  console.log(profile.photo)
  
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent small style={{color:"red"}}/>
        
        <img src= {profile.photo} className="my-profile"/>
        <p style={{color:'white',fontSize:60}}>
          {profile.Name.firstName} {profile.Name.lastName}
          
        </p>
        
        <Button profileLink={profile.profileLink} buttonColor="blue" onSimpleClick={()=>window.location = profile.profileLink}>LinkedIn</Button>
        
      </header>
      
    </div>
  );
}

//export default App;*/
