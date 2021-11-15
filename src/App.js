import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Honme";
import Products from "./componentsProducts";
import About from "./components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={About} />
          <Route exact path="/" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
