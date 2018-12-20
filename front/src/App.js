import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Memory from "./components/memory/Memory";
import PumpItUp from "./components/PumpItUp";
import FindWords from "./components/FindWords";

class App extends Component {
  render() {
    return (
      <Container fluid className="App position-relative">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/memory" component={Memory} />
          <Route path="/tableau-de-jeux" component={Dashboard} />
          <Route path="/jeu-pump-it-up" component={PumpItUp} />
          <Route path="/jeu-trouver-saint-ex" component={FindWords} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
