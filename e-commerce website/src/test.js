import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import './App.css';
import Product from "./product"
import Item from "./item"



class App extends React.Component {
  state = {
    item : new Item(),
    itemList : [],
  }

  Home =() =>{
    return(
      <div>
        <h2>Welcome!! you can register here or go to purchase our products</h2>
        <Link to="/products">go to products</Link>
      </div>
    );
  }

  
 
  DisplayProducts = () =>{
    console.log(this.state);
    return(
      <div>
        <form onSubmit={(event)=>{event.preventDefault();this.setState({item : {...this.state.item}
            ,itemList : [...this.state.itemList,...[this.state.item]]
            , item: {name : ""},item: {rating : 0},item: {price : 0}})
            }}>
          <input type="/text" value={this.state.item.name} onChange={(event)=>{
              this.setState({item: { name:event.target.value}})
            }}></input>
          <input type="/text" value={this.state.item.price} onChange={(event)=>{
              this.setState({item: {price:event.target.value}})
            }}></input>
          <input type="/text" value={this.state.item.rating} onChange={(event)=>{
              this.setState({item : {rating:event.target.value}})
            }}></input>

            <input type="submit"></input>
            <Product>{this.state.itemList}</Product>
        </form>
        
        <Link to="/">go to home page</Link>
      </div>
    );
  }
  render(){
    return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Website</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="#pricing">Register/login</Nav.Link>
          </Nav>
        </Navbar>
        <header className="App-header">
          
          <Route path="/" exact component={this.Home}/>
          <Route path="/products" component={this.DisplayProducts}/>
        </header>
      </div>
      </BrowserRouter>

    );
  }
}
export default App;



<div>
        
          <input type="/text" value={this.state.item.name} onChange={(event)=>{
              this.setState({item: { name:event.target.value}})
            }}></input>
          <input type="/text" value={this.state.item.price} onChange={(event)=>{
              this.setState({item: {price:event.target.value}})
            }}></input>
          <input type="/text" value={this.state.item.rating} onChange={(event)=>{
              this.setState({item : {rating:event.target.value}})
            }}></input>

            <button onClick = {()=>{this.setState({item : {...this.state.item}
            ,itemList : [...this.state.itemList,...[this.state.item]]
            , item: {name : ""},item: {rating : 0},item: {price : 0}})
            }}>add</button>
          <Product>{this.state.itemList}</Product>
        <Link to="/">go to home page</Link>
      </div>