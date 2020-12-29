import React from "react-router-dom"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Index from "./pages/Index"
import Second from "./pages/Second"
import Third from "./pages/Third"

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/second">Second</Link></li>
            <li><Link to="/third">Third</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/second" component={Second} />
          <Route exact path="/third" component={Third} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
