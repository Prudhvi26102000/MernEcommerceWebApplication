import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactNavbar from "./lib/ReactNavbar";
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export { ReactNavbar };