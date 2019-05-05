import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Design from "./components/projects/design";
import Web from "./components/projects/web";
import About from "./components/about";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/design/:projectId?" component={Projects} />
          <Route exact path="/web" component={Web} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
