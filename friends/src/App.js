import React from 'react';
import './App.css';
import Login from "./components/Login"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import Friends from "./components/Friends"
import PrivateRoute from './components/PrivateRoute';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Link to = "/login">Login</Link><br/>
        <Link to = "/friends">Friends</Link>
        <Switch>
          <PrivateRoute path = "/friends" component = {Friends} />
          <Route path = "/login" component = {Login} />
          <Route component = {Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
