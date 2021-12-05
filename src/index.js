import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import App from './App';
import Navbar from './Navbar';


ReactDOM.render(
<Router>
  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>
</Router>,
  document.getElementById('root')
);

