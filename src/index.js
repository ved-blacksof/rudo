import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { createBrowserHistory } from 'history';


const root = ReactDOM.createRoot(document.getElementById("root"));
const history = createBrowserHistory();

if (root) {

  const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];

  if (path) {
    history.replace(path);
  }
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}




