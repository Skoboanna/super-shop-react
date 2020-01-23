import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import Catalog from "./components/Catalog/Catalog";
import About from "./components/About/About";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Router>
          <NavigationBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    </div>
  );
}

export default App;
