import React from 'react';
import './App.css';
import "./style.css"
import Button from './MyButton';
const profile ={

  photo:"/portrait.jpg", 

	Name:{firstName:"Slim", lastName:"Oualha"},

	profileLink:"https://www.linkedin.com/in/slim-oualha/"
}  

function App() {
  console.log(profile.photo)
  
  return (
    <div className="App">
      <header className="App-header">
        
        <img src= {profile.photo} className="my-profile"/>
        <p style={{color:'white',fontSize:60}}>
          {profile.Name.firstName} {profile.Name.lastName}
          
        </p>
        
        <Button profileLink={profile.profileLink} buttonColor="blue" onSimpleClick={()=>window.location = profile.profileLink}>LinkedIn</Button>
        
      </header>
      
    </div>
  );
}

export default App;
