import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tiles from "./pages/Tiles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Tiles} />
          <Route exact path="/tiles" component={Tiles} />
          <Route exact path="/tiles/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
