import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Portfolio from "./components/pages/portfoliogrid";
import About from "./components/pages/about";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/design/:projectId?" component={Portfolio} />
          <Route exact path="/web/:projectId?" component={Portfolio} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
