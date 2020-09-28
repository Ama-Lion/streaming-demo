//TODO-------IMPORT MODULES--------
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//TODO-------IMPORT PAGES-----------
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";

//TODO-------IMPORT COMPONENTS-----------
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

//TODO-------CREATE FUNCTION-----------
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route exact path="/series" component={Series} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

//TODO-------EXPORT FUNCTION-----------
export default App;
