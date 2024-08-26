import React from "react";
import ReactDOM from "react-dom";
import Start from "./InternBatch6/Start";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Start />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
