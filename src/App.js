import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav.js"
import Homepage from "./Homepage.js"
import Projects from "./Projects.js"
import Experience from "./Experience.js"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

  const App = () => {
  return (
    <Router>
    <div className="App">
    <Nav />
    
    <Route path="/" exact component={Home} />
    <Route path="/homepage" exact component={Homepage} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/experience" exact component={Experience}/>

    </div>
    </Router> 

  )
}

const Home = () => {
  return (
  <div>
    <h1>homepage </h1>
  </div>
  )
}

export default App;
