import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
