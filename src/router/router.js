import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from '../views/login/login'
import Home from '../views/home/home'
function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default AppRouter
