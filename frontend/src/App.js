import React, { Component } from "react";

import "./App.css";
import "antd/dist/antd.css";
import { AddTime } from "./components/AddTime";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddTime />
        </header>
      </div>
    );
  }
}

export default App;
