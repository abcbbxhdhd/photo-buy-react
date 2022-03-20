import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {ImageContextProvider} from "./context/imageContext"

ReactDOM.render(
  <ImageContextProvider>
  <Router>
    <App />
  </Router>
  </ImageContextProvider>,
  document.getElementById('root')
);
