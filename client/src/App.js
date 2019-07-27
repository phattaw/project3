import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Board from "./pages/Board";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Log from "./components/Login"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Board} />
          <Route exact path="/Board" component={Board} />
          <Route exact path="/Board/:id" component={Detail} />
          <Route exact path="/Login/index" component={Log} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
