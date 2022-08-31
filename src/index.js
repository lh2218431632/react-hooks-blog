import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../src/lib/font/iconfont.css"
import "../src/lib/swiper/swiper-bundle.min.css"
import { HashRouter } from 'react-router-dom';
import App from './App.jsx'

ReactDOM.render(<React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
</React.StrictMode>, document.getElementById("root"));
