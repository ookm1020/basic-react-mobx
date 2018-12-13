import React, { Component } from "react";
import { Route } from "react-router-dom";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Route exact path="/" component={Counter} />
      </div>
    );
  }
}

export default App;
