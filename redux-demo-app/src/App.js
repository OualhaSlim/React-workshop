import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";
import { Switch, Route } from "react-router-dom";

//const Cart = () => <div>Cart page</div>;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
