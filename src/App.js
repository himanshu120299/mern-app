import "./App.css";
import React from "react";
import Home from "./Screens/Home.js";
import Login from "./Screens/Login.js";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Signup from "./Screens/Signup.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/creatuser" element = {<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
